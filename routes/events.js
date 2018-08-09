const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const axios = require('axios');

// for node-google-calendar
const CONFIG = require('../config/settings');
const CalendarAPI = require('node-google-calendar');
let cal = new CalendarAPI(CONFIG);  



//================ Eventbright API stuff ============================
// axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${eventbriteKey}&categories=${eventbriteCategories}&location.address=${eventbriteLocation}&location.within=${userRadius}mi`)
  
// let eventbriteKey = 'ZJYXEPK4OFMGCTEUVMYH';

// let eventbriteCategories = '102';

// let eventbriteLocation = 'miami';


// router.get('/tester', (req, res, next) => {

// // to get events
//     //     let params = {
// //         // timeMin: '2018-08-08T06:00:00+08:00',
// //         // timeMax: '2018-08-08T22:00:00+08:00',
// //         // q: 'query term',
// //         singleEvents: true,
// //         orderBy: 'startTime'
// //     }; 	//Optional query parameters referencing google APIs
    
// //     cal.Events.list('techcalendermia@gmail.com', params)
// //   .then(json => {
// // 	//Success
// // 	console.log('List of events on calendar within time-range:');
// // 	res.send(json);
// //   }).catch(err => {
// // 	//Error
// // 	console.log('Error: listSingleEvents -' + err.message);
// //   });
// });


// gets all events
router.get('/events', (req, res, next) => {
    let eventbrightArray;
    let meetupArray;
    let pulledCalendar = [];

    let meetupPromise;
    let eventPromise;

    let eventbriteKey = 'ZJYXEPK4OFMGCTEUVMYH';
    let eventbriteCategories = '102';
    let eventbriteLocation = 'miami';
    let eventbrightUserRadius = '10';

    axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${eventbriteKey}&categories=${eventbriteCategories}&location.address=${eventbriteLocation}&location.within=${eventbrightUserRadius}mi`)
        .then((eventbrightEvents) => {
            // console.log('eventbrightEvents :', eventbrightEvents.data.events);
        
            let eventbrightRawDataArray = [];
            
            eventbrightRawDataArray.push(eventbrightEvents.data.events);
            // console.log('eventbrightRawDataArray :', eventbrightRawDataArray);

            // PREPS RAW EVENTBRIGHT DATA TO SEND TO GOOGLE CAL API
            eventbrightArray =   eventbrightEvents.data.events.map((event) => {

                let startDateString = event.start.utc; // start time us an object
                let addedTime = Number(new Date(startDateString)) + Number(event.duration); // makes end time by adding millisecond dates
                
                let nameData = ((event || {}).name || {}); // how to access nested objects
                let startTimeDate = ((event || {}).start || {}).utc;
                let endTimeDate = ((event || {}).end || {}).utc;
                let descriptionData = ((event || {}).description || {}).html; 
               
                let aEventbrightObj = {
                    summary: nameData.text,
                    start: {
                        dateTime: new Date(startTimeDate), // think it formats right
                    },
                    end: {
                        dateTime: new Date(endTimeDate),  // think it formats right
                    },
                    // might have to reformat location
                    // location: , // // Eventbright doesn't have location data - just an id number
                    description: descriptionData + '    ' + event.url,
                };

                // console.log('aEventbrightObj :', aEventbrightObj);

                return aEventbrightObj; // returns reformatted object each iteration
            });

            eventPromise = Promise.resolve(eventbrightArray);

        })
        .catch(err => console.log('Error getting Eventbright data: ', err));



    // https://api.meetup.com/find/upcoming_events?key=726f391116101c5b316166a3d4411e&zip=33130&category=34&radius=10&sign=true
    let meetupKey = '726f391116101c5b316166a3d4411e'; // meetup API key
    let meetupUserZipCode = '33130'; // Miami zip hard coded
    let meetupUserRadius = '10'; // 10 miles hard coded
    
    axios.get(`https://api.meetup.com/find/upcoming_events?key=${meetupKey}&zip=${meetupUserZipCode}&category=34&radius=${meetupUserRadius}&sign=true`)
    
        .then((meetupEvents) => {
            // console.log('meetupEvents :', meetupEvents);
            
            // GET LIST OF EVENTS FROM MEETUP API -> SAVE TO ARRAY -------------------------------------------------------------------
            let meetupRawDataArray = [];
            meetupRawDataArray.push(meetupEvents.data.events);
            // console.log('meetupRawDataArray ------------------:', meetupRawDataArray);

            // PREPS RAW MEETUP DATA TO SEND TO GOOGLE CAL API -----------------------------------------------------------------------
             meetupArray = meetupEvents.data.events.map((event) => {

                let startDateString = event.local_date + 'T' + event.local_time; // makes aprox dateTime structure
                let addedTime = Number(new Date(startDateString)) + Number(event.duration); // makes end time by adding millisecond dates
                let locationData = ((event || {}).venue || {}); // how to access nested objects
               
                let aMeetupObj = {
                    summary: event.name,
                    start: {
                        dateTime: new Date(startDateString),
                    },
                    end: {
                        dateTime: new Date(addedTime),
                    },
                    // might have to reformat location
                    location: locationData.name + ' ' +/* locationData.address + ' ' +*/ locationData.city /*+ ', ' + locationData.zip*/,
                    description: event.description + '    ' + event.link,
                };

                return aMeetupObj; // returns reformatted object each iteration

            });

            meetupPromise = Promise.resolve(meetupArray);

                            
            // GETS EVENTS FROM GOOGLE CALENDAR -----------------------------------------------------------------------------------
            let params = {
                // timeMin: currentTime, // CURRENT DATE
                // timeMax: '2017-05-25T22:00:00+08:00',
                // q: 'query term',
                singleEvents: true,
                orderBy: 'startTime'
            };
        
            cal.Events.list('techcalendermia@gmail.com', params)
                .then(response => {
                    pulledCalendar = response;
                    
                    // meetupArray.forEach(element => {
                    //     console.log('meetupArray.summary :', element.summary);
                    // });

                    // console.log('pulledCalendar :', pulledCalendar);
                    
                    // pulledCalendar.forEach(element => {
                    //     console.log('pulledCalendar.summary :', element.summary);
                    // });

                   
                })
                .catch(err => console.log('Error while listing events already in Google Calendar: ', err.message));
        })
        // return res.json(meetupArray);
        .catch(err => console.log('Error finding Meetup events and creating JSON objects: ', err));
    
    

    
    
    
    setTimeout(() => {
        let combinedArray = meetupArray.concat(eventbrightArray); // combines the arrays 

        console.log('combinedArray :', combinedArray);
        
        // FILTERS FOR DUPLICATES BY TITLE AND START DATETIME - now combine arrays from eventbright and meetup -----------
        combinedArray = combinedArray.filter((obj1) => {
            if (!pulledCalendar.find((obj2) => {
    
                // obj2 is pulled from Google and is string -> make a date so can compare
                return obj2.summary === obj1.summary && new Date(obj2.start.dateTime).getTime() == new Date(obj1.start.dateTime).getTime();
            })
            ) {
                return obj1;
            }
        });
    
        // CREATES GOOGLE EVENTS BASED ON ARRAY GIVEN ---------------------------------------------------------------------
        combinedArray.forEach(function (eachObj) {
            cal.Events.insert('techcalendermia@gmail.com', eachObj)
                .then(response => {
                    // console.log('inserted event:');
                    // console.log(resp);
                })
                .catch(err => {
                    console.log('Error while insertEvent to Google Calendar: ' + err.message);
                });
        });
        
    }, 3000);
     
});
        

// //gets ONE event - PROBABLY NOT NEEDED
// router.get('/events/details/:id', (req, res, next) => {
//     const id = req.params.id;
//     Event.findById(id)
//         .then((theEvent) => {
//             res.json(theEvent)
//                 .catch(err => console.log('Error while finding event by ID: ', err));
//         });
// });


module.exports = router;
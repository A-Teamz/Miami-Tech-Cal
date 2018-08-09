const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const axios = require('axios');

// for node-google-calendar
const CONFIG = require('../config/settings');
const CalendarAPI = require('node-google-calendar');
let cal = new CalendarAPI(CONFIG);  

// const meetupAPI = axios.create({
//     baseURL: 'https://api.meetup.com/find/upcoming_events?',
// });

//================ Eventbright API stuff ============================
// axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${eventbriteKey}&categories=${eventbriteCategories}&location.address=${eventbriteLocation}&location.within=${userRadius}mi`)
  
// let eventbriteKey = 'ZJYXEPK4OFMGCTEUVMYH';

// let eventbriteCategories = '102';

// let eventbriteLocation = 'miami';


router.get('/tester', (req, res, next) => {

// to get events
    //     let params = {
//         // timeMin: '2018-08-08T06:00:00+08:00',
//         // timeMax: '2018-08-08T22:00:00+08:00',
//         // q: 'query term',
//         singleEvents: true,
//         orderBy: 'startTime'
//     }; 	//Optional query parameters referencing google APIs
    
//     cal.Events.list('techcalendermia@gmail.com', params)
//   .then(json => {
// 	//Success
// 	console.log('List of events on calendar within time-range:');
// 	res.send(json);
//   }).catch(err => {
// 	//Error
// 	console.log('Error: listSingleEvents -' + err.message);
//   });
    

    
});


// gets all events
router.get('/events', (req, res, next) => {

    // https://api.meetup.com/find/upcoming_events?key=726f391116101c5b316166a3d4411e&zip=33130&category=34&radius=10&sign=true
        
    let userZipCode = '33130'; // Miami zip hard coded
    
    let userRadius = '10'; // 10 miles hard coded
    
    let meetupKey = '726f391116101c5b316166a3d4411e'; // meetup API key
    
    axios.get(`https://api.meetup.com/find/upcoming_events?key=${meetupKey}&zip=${userZipCode}&category=34&radius=${userRadius}&sign=true`)
    
        .then((meetupEvents) => {
            // console.log('meetupEvents :', meetupEvents);
            
            // GET LIST OF EVENTS FROM MEETUP API -> SAVE TO ARRAY 
            let meetupRawDataArray = [];
            meetupRawDataArray.push(meetupEvents.data.events);
            // console.log('meetupRawDataArray ------------------:', meetupRawDataArray);

        
            // PREPS RAW MEETUP DATA TO SEND TO GOOGLE CAL API
            let meetupArray = meetupEvents.data.events.map((event) => {

                let startDateString = event.local_date + 'T' + event.local_time; // makes aprox dateTime structure
                let addedTime = Number(new Date(startDateString)) + Number(event.duration); // makes end time by adding millisecond dates
                let locationData = ((event || {}).venue || {}); // how to accsess nested objects
               
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

                console.log('aMeetupObj.start.dateTime :', aMeetupObj.start.dateTime);
                return aMeetupObj;
                // meetupArray.push(aMeetupObj);
                // console.log('aMeetupObj :', aMeetupObj);

            });
                
            // check events by name and start if mach not found do ->
            
            let currentTime = new Date(); // doesn't format right - needs to match below
            console.log('currentTime  should be 2017-05-25T22:00:00+08:00:', currentTime);
            
            // GETS EVENTS FROM GOOGLE CALENDAR
            let pulledCalendar = [];

            let params = {
                // timeMin: currentTime, // CURRENT DATE
                // timeMax: '2017-05-25T22:00:00+08:00',
                // q: 'query term',
                singleEvents: true,
                orderBy: 'startTime'
            };
        
            cal.Events.list('techcalendermia@gmail.com', params)
                .then(resp => {
                    // console.log(resp);
                    pulledCalendar = resp;
                    // return resp;
                    
                    meetupArray.forEach(element => {
                        console.log('meetupArray.summary :', element.summary);
                        
                    });
                    // console.log('pulledCalendar :', pulledCalendar);
                    
                    pulledCalendar.forEach(element => {
                        console.log('pulledCalendar.summary :', element.summary);
                    });
                    
                    // console.log('pulledCalendar :', pulledCalendar);
                    meetupArray = meetupArray.filter((obj1) => {
                        if (!pulledCalendar.find((obj2) => {
                            // console.log('obj2.start.dateTime :', obj2.start.dateTime, obj2.summary );
                            // console.log('obj1.start.dateTime :', obj1.start.dateTime, obj1.summary );
                            
                            return obj2.summary === obj1.summary && new Date(obj2.start.dateTime).getTime() == new Date(obj1.start.dateTime).getTime() ;
                        })
                        ) {
                            return obj1;
                        }
                    });
                    
                    console.log("-------------------------------------------------------------------------");
                    meetupArray.forEach(element => {
                        console.log('meetupArray.summary :', element.summary);
                        
                    });

                    // CREATES GOOGLE EVENTS BASED ON ARRAY GIVEN
                    meetupArray.forEach(function (eachObj) {
                        cal.Events.insert('techcalendermia@gmail.com', eachObj)
                            .then(resp => {
                                // console.log('inserted event:');
                                // console.log(resp);
                            })
                            .catch(err => {
                                console.log('Error: insertEvent-' + err.message);
                            });
                    });
                    

                })
                .catch(err => console.log('Error while listing events already in Google Calendar: ', err.message));
                
            
            // console.log('meetupArray :', meetupArray);
            // var isDuplicate = function (pulledCalendar) {
                //     if(pulledCalendar.summary === meetupArray.summary)
            // }

            
            // array1 = array1.filter(val => !array2.includes(val));

            // console.log('pulledCalendar :', pulledCalendar);

            // meetupArray = meetupArray.filter(val => !pulledCalendar.includes(val));

           

            

            // let calenderData = ((event || {}).venue || {});


            // let filtArray = meetupArray.filter(function (event) {
            //     // console.log('event.summary :', event.summary);
            //     !pulledCalendar.includes(event);

            // });

            // var bigCities = cities.filter(function (e) {
            //     return e.population > 3000000;
            // });
            // console.log(bigCities);


            
                
            // console.log('meetupArray :', meetupArray);
            

            

           
                          
                
        })
        // return res.json(meetupArray);
        .catch(err => console.log('Error finding Meetup events and creating JSON objects: ', err));
});
        

//gets ONE event - PROBABLY NOT NEEDED
router.get('/events/details/:id', (req, res, next) => {
    const id = req.params.id;
    Event.findById(id)
        .then((theEvent) => {
            res.json(theEvent)
                .catch(err => console.log('Error while finding event by ID: ', err));
        });
});


module.exports = router;
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
            
            // get list of events -> save array 
            let meetupRawDataArray = [];
            meetupRawDataArray.push(meetupEvents.data.events);
            // console.log('meetupRawDataArray ------------------:', meetupRawDataArray);

            let meetupArray = [];
        
            
            // console.log(meetupEvents.data.events.map(event => event.name));
            const filteredArray = meetupEvents.data.events.map((event) => {

                let startDateString = event.local_date + 'T' + event.local_time;
                let addedTime = Number(new Date(startDateString)) + Number(event.duration);
                let locationData = ((event || {}).venue || {});
               
                let aMeetupObj = {
                    summary: event.name,
                    // apiID: event.id,
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

                meetupArray.push(aMeetupObj);
                // console.log('aMeetupObj :', aMeetupObj);
                
                // check events by name and start if mach not found do ->
                if()

                
                // cal.Events.insert('techcalendermia@gmail.com', aMeetupObj)
                // .then(resp => {
                //     // console.log('inserted event:');
                //     // console.log(resp);
                // })
                // .catch(err => {
                //     console.log('Error: insertEvent-' + err.message);
                // });
               

            });
                          
                
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
const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const axios = require('axios');

// const meetupAPI = axios.create({
//     baseURL: 'https://api.meetup.com/find/upcoming_events?',
// });
  


// gets all events
router.get('/events', (req, res, next) => {

    // https://api.meetup.com/find/upcoming_events?key=726f391116101c5b316166a3d4411e&zip=33130&category=34&radius=10&sign=true
        
    let userZipCode = '33130'; // Miami zip hard coded
    
    let userRadius = '10'; // 10 miles hard coded
    
    let meetupKey = '726f391116101c5b316166a3d4411e'; // meetup API key
    

    axios.get(`https://api.meetup.com/find/upcoming_events?key=${meetupKey}&zip=${userZipCode}&category=34&radius=${userRadius}&sign=true`)
    
        .then((meetupEvents) => {

            let meetupArray = [];
            // console.log(meetupEvents.data.events.map(event => event.name));
            const filteredArray = meetupEvents.data.events.map((event) => {

                let startDateString = event.local_date + 'T' + event.local_time;
                let addedTime = Number(new Date(startDateString)) + Number(event.duration);
                let locationData = ((event || {}).venue || {});
               
                let aMeetupObj = {
                    summary: event.name,
                    apiID: event.id,
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
                // console.log('meetupArray: ', meetupArray);
                 
            });
            return res.json(meetupArray);
        })
        .catch(err => console.log('Error finding Meetup events and creating JSON objects: ', err));
        
        // where to do this???
        // axios.post(` https://www.googleapis.com/calendar/v3/calendars/techcalendermia%40gmail.com/events?conferenceDataVersion=0&sendNotifications=true&supportsAttachments=true&key=${meetupKey}`)
        //     .then(() => {
        
            
        //     })
        //     .catch();
});




//gets ONE event
router.get('/events/details/:id', (req, res, next) => {
    const id = req.params.id;
    Event.findById(id)
        .then((theEvent) => {
            res.json(theEvent)
                .catch(err => console.log('Error while finding event by ID: ', err));
        });
});





module.exports = router;
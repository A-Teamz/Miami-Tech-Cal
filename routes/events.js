const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const axios = require('axios');

// const meetupAPI = axios.create({
//     baseURL: 'https://api.meetup.com/find/upcoming_events?',
//   });




//gets all events
router.get('/events', (req, res, next) => {
// console.log('hiiiiiiiiiiiiiii :');

    // Event.find()
    // .then((allTheEvents) => {
    // https://api.meetup.com/find/upcoming_events?key=726f391116101c5b316166a3d4411e&zip=33130&category=34&radius=10&sign=true
    
    let userZipCode = '33130'; // Miami zip hard coded

    let userRadius = '10'; // 10 miles hard coded

    let meetupKey = '726f391116101c5b316166a3d4411e'; // meetup API key
        
    axios.get(`https://api.meetup.com/find/upcoming_events?key=${meetupKey}&zip=${userRadius}&category=34&radius=${userRadius}&sign=true`)
            
        .then((meetupEvents) => {
            // console.log(meetupEvents.data.events.map(event => event.name));
            const filteredArray =  meetupEvents.data.events.map((event) => {
                return {
                    name: event.name,
                    apiID: event.id,
                    
                };
                


            });
            
            Event.create(filteredArray)
                .then(() => {
              
                    axios google cal api










            })
            
           

                
        })
        .catch(err => console.log('Error finding all the events', err));
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
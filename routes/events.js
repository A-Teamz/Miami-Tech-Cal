const express = require('express');
const router = express.Router();
const Event = require('../models/event');

//gets all events
router.get('/events', (req, res, next) => {

    Event.find()
        .then((allTheEvents) => {
            res.json(allTheEvents);
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

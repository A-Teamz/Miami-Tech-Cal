const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: String,
    apiID: String,
    location: String, // might need to be lon/lat instead
    time: String,
    date: Date,
    duration: String,
    venue: {},
    group: {},
    link: String,
    description: String

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;


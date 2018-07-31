const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Event = mongoose.model(eventSchema);   //<----- CAN I EVEN DO THIS???

const eventCardSchema = new Schema({
    event: {Event}, // RIGHT???
    hype: Number,
    likes: Number,
    tags: String

});

const eventCard = mongoose.model("EventCard", eventCardSchema);

module.exports = EventCard;


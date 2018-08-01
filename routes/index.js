const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;


// index.js
// https://api.meetup.com/find/upcoming_events?key=726f391116101c5b316166a3d4411e&zip=33130&category=34&radius=10&sign=true

 
// const meetupAPI = axios.create({
//   baseURL: 'https://api.meetup.com/find/upcoming_events?',
// });

// let userZipCode = '33130'; // Miami zip hard coded

// let userRadius = '10'; // 10 miles hard coded

// let meetupKey = '726f391116101c5b316166a3d4411e'; // meetup API key

// meetupAPI.get(`key=${meetupKey}&zip=${userRadius}&category=34&radius=${userRadius}&sign=true`)
// .then


//-----------------EXAMPLE-------------------
// const stockInfo  = axios.create({
//   baseURL: 'https://api.meetup.com/find/upcoming_events?key=726f391116101c5b316166a3d4411e&',
// });

// let stockTicket = "amzn";

// stockInfo.get(`${stockTicket}/chart`)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
// });



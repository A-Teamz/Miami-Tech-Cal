// Sample CalendarAPI settings


const SERVICE_ACCT_ID = 'api-data-transfer@miami-tech-calender.iam.gserviceaccount.com';
// don't think I'm using .pem - using json instead
// const KEYFILE = 'your-google-api-keyfile.pem';				//path to pem key
const TIMEZONE = 'UTC+08:00';
const CALENDAR_URL = 'https://calendar.google.com/calendar/embed?src=techcalendermia%40gmail.com&ctz=America%2FNew_York';
const CALENDAR_ID = {
	'primary': 'techCalenderMIA@gmail.com',
	// 'calendar-1': 'calendar1@group.calendar.google.com',
	// 'calendar-2': 'calendar2@group.calendar.google.com'
};
const key = require('../google_service_account_key').private_key; //not sure if locating the file correctly


module.exports.serviceAcctId = SERVICE_ACCT_ID;
// module.exports.keyFile = KEYFILE;  //or if using json keys - module.exports.key = key; 
module.exports.timezone = TIMEZONE;
module.exports.calendarUrl = CALENDAR_URL;
module.exports.calendarId = CALENDAR_ID;
module.exports.key = key;

// =========== Example for using json keys ================
// var key = require('./googleapi-key.json').private_key;
// module.exports.key = key;


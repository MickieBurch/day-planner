// create time declaration 
moment(Date); 
$("#currentDay").text(moment().format('dddd,MMMM,do YYYY, h:mm a'));
//current time 
var currentTime = moment();
// shows time closest to the nearest hour.
currentTime = currentTime.startOf("hour");
// creates the start of day return
var beforeTime = moment().startOf('day').add(9, "hours");



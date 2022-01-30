// create time declaration 
moment(Date); 
$("#currentDay").text(moment().format('dddd,MMMM,do YYYY, h:mm a'));
//current time 
var currentTime = moment();
// shows time closest to the nearest hour.
currentTime = currentTime.startOf("hour");
// creates the start of day return
var beforeTime = moment().startOf('day').add(9, "hours");


// TIME BLOCKS for the day
var time1 = beforeTime.add(0, "h");

time1 = time1.format('hh:mm A');
$(".block1").text(time1);
// 10 AM
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');
$(".block2").text(time2);
// 11 AM
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');
$(".block3").text(time3);
// 12 PM
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');
$(".block4").text(time4);
// 1 PM
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');
// Populates time formula into html
$(".block5").text(time5);
// 2 PM
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');
// Populates time formula into html
$(".block6").text(time6);
// 3 PM
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');
$(".block7").text(time7);
// 4 PM
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');
$(".block8").text(time8);
// 5 PM
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');
$(".block9").text(time9);


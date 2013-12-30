// set the date we're counting down to
var target_date = new Date("Jan 11, 2014").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById("countdowntext");
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown.innerHTML = "<table style='text-align:center;margin:0 auto;padding-top:20px'><tr style='font-size:48px; font-weight:500;'><td>" + days +
    "</td><td>" + hours + "</td><td>" + minutes + "</td><td>"
    + seconds + "</td></tr><tr style='font-size:24px;color:#333'><td>days</td><td>hours</td><td>minutes</td><td>seconds</td></table>";  
 
}, 1000);
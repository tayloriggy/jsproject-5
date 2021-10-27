/*
Project 5: Build a clock using JavaScript.

Requirements:
-Create a Github repository for this project. 
-Display the hours, minutes, and seconds.
-The clock should run by itself. (Hint: look at JavaScript setInterval function)


*/

//The date object methods return time in 24 hour format (military time)

function clock () { //defining our function named clock
    let date = new Date (); //use new Date() constructor to create date object of let date
    let hours = date.getHours(); //date object method of displaying current local hours
    let minutes = date.getMinutes(); //date object method of displaying current local minutes
    let seconds = date.getSeconds(); //date object method of displaying current local seconds
    let period = "AM"; //setting time to display as "AM" and storing it in a variable named period
    if (hours === 0) { //converting to standard time format for midnight hour
        hours = 12; //hour will display "12" instead of "0"(military format)
    }
    else if (hours > 12) { //converting to standard time again for PM (1300 = 1pm, 1400 = 2pm, etc.)
        hours = hours - 12;
        period = "PM"; //update period to "PM" if hour is greater than "12" (1300, 1400, etc.)
    }
    //ternary operation below to save from writing out 6 if else if conditionals
    hours = hours < 10 ? `${hours}`: hours; //ternary operation, if hrs is < 10, then print 0 value, otherwise print actual value
    minutes = minutes < 10 ? `0${minutes}`: minutes;
    seconds = seconds < 10 ? `0${seconds}`: seconds;

    let time = `${hours}:${minutes}:${seconds}${period}`; //displaying our clock in digital format and storing it in a variable named time, also using template literals for shorthand
    document.getElementById("clock").innerHTML = time; //using the DOM to access id of "clock" from html div element, & setting the time variable as the inner HTML
    setInterval(clock, 1000); //using setInterval() function to execute clock function after every 1000 milliseconds (i.e. 1 second), first parameter is clock and second parameter is 1000 milliseconds
};

clock(); //calling our clock() function to run the above code block
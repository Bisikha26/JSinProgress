<!-- Algorithm for Digital Clock using Vanilla JS -->

Step 1 : Create a function Clock
Step 2 : Create an instance of the Date Object
Step 3 : Using the methods of Date object get "hours" , "minutes" and "seconds"
Step 4 : Set AM/PM depending on the hour value. The Date object works on 24-hour format so we change hour back to 1 when it get’s larger than 12. The AM/PM also changes according to that.
Step 5 : Now make a string using the same HH:MM:SS format changing the hour, minute, and second value with the values, we get from Date object methods.
Step 6 : Now replace the string variable in the “div” using innerHTML property.
Step 7: To call the function every second use setInterval() method and set time-interval as 1000ms which is equal to 1s.
Step 8: Now call the function at the end to start function at exact reloading/rendering time as setInterval() will call first after 1s of rendering.
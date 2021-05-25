// setInterval and setTimeOut
// The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
var counter = 0;

var interval = setInterval(function() {
    console.log(counter);
    counter++;
}, 1000);

clearInterval(interval);

console.log(counter);

//The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
var timeout = setTimeout(function(){
    counter++;
    console.log(counter);
}, 1000);
console.log(counter);
clearTimeout(timeout);

// Note
// yeti time ma yo function repeat garna ko lagi setInterval() function ma duita parameter pass garne
// first parameter is function itself, as counter ko value 1 lay badhaune function
// second parameter is kati time ma tyo mathe ko function repeatdly call garne ? in milliseconds

// certain time pachhi ekota function run gara ani repeat chai nagarna ko lagi we use setTimeout()
// yesko pani duita parameter
// first is function, jasma eti time pachhi k garne define gareko hunchha
// second is kati time ma tyo function call garne, in milliseconds

// timeout ra interval set garepachhi always remember to clear them
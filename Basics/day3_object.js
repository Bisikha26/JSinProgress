// JavaScript objects are a bit different. You do not need to create classes in order to create objects.
// In JavaScript, an object can also contain a function. 
// we need to use person.greet() instead of person.greet to call the function inside the person object

// Object containing method, JS method is an object property that has a function value
// If you try to access the method with only person.greet, it will give you a function definition.
// person.greet; // ƒ () { console.log('hello'); }

const person = {
    name: 'Bisikha',
    greet: function() {
        console.log('hello');
    }
}

// parseInt() method of number object. Number bhanne object ko parseInt() bhanne method, array bhanne object ko slice() bhanne method
// slice() is a method of Array Object and String Object.
let number = '23.32';
let result = parseInt(number);


// To add method in an Object
// creating an object
let student = {};

// adding a property
student.name = 'Bisikha';

// adding a method
student.greeting = function() {
    console.log('hello');
}

// accessing a method
student.greeting();
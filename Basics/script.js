console.log('****************** Day 1 stuff - Variables ***********************')
var myNum = 10;
var myStr = 'Hello World';
var myBool = true;
var nextNum = '10';

console.log(myNum, typeof myNum);
console.log(myStr, typeof myStr);
console.log(myBool, typeof myBool);
console.log(nextNum, typeof nextNum);

console.log('Primitive data types- Number, Boolean, String, Null, Undefined')
console.log('Non Primitive data types- Object, Array')
console.log('*****************String Operations***************')

console.log(myStr.length);
console.log(myStr.indexOf('ell'), myStr.indexOf('www'));
console.log(myStr[0], myStr[myStr.length - 1]);
console.log(myStr.concat(' yo!'), myStr) // Concat gareko string naya string banne haina, myStr print garda purano nai string print hunchha
console.log(myStr.split('ll'));
console.log(typeof []); // Split method lay ll substring bata split garera naya array banaudo raichha. type of split gareko function ko result object hunchha just like array ko type is also object
console.log(myStr.toUpperCase())
console.log(myStr.substr(1, 5), typeof myStr.substr(1, 5), myStr) // substring lay naya string create garne ho but existing string lai change chai gardaina i.e after substr purano string lai print garda purano nai string print hunchha.

console.log('***************** Null and Undefined ********************')

var a;
console.log(a);
var b = null;
console.log(b)




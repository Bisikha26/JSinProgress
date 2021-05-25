// create an array with number, string, boolean, array
var array = [1,2,3, 'four', true, [1,2,3]]

// array methods: push(), pop(), length, indexOf, slice, splice, concat

console.log("pushed in the existing array", array.push(10), array);
console.log("popped from the existing array", array.pop(), array);
console.log("checking the length of the given array", array.length);
console.log("getting the index of any array element", array.indexOf(true), array)

// Slice is an array method 
var slicedArr = array.slice(1,4);
console.log("Slice returns new array:", slicedArr);

// The splice() method adds/removes items to/from an array, and returns the removed item(s).This method changes the original array.
console.log("Splice adds or removes array element and returns new array:", array.splice(3,0,'Bisikha', 'Subedi'), array);

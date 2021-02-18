const arr1 = [3,4,13,8,22]

const reducedValue = arr1.reduce((a,c) => a + c); 

console.log(reducedValue)
// a = accumulator
// c = current value 



// 1
const letters = ['h', 'e', 'l', 'l', 'o']
const greeting = letters.reduce((a,c) => a+c);
// The below line should console.log: "hello"
console.log(greeting) 

// 2 - uncomment lines 9 and 11
const numbers = [ 100, 3, 4, 1, 2];
//const total = 
// The below line should console.log: 2400
//console.log(total); 

//Bonus - uncomment lines 15 and 17
const arrays = [["how", "now"], ["brown", "cow"]];
//const flattenedArray = arrays.reduce((a,c)=> a+ c).Array.concat;
// The below line should console.log: ["how", "now", "brown", "cow"]
//console.log(flattenedArray);



//Use reduce to flatten this array of arrays (called a two-dimensional array) 
//by using the Array.concat() method inside the callback method for
// reduce.
const flattenedArray = [].concat(...arrays);
console.log(flattenedArray)


//extends → create a child class from a parent class, 
//constructor → 
//method where default properties are initialized inside a class, 
//property → a variable that belongs to an object, 
//method → a function that belongs to an object, 
//super → method used inside a child class's constructor to initialize properties inherited from the parent class, 
//new → create an object from a class
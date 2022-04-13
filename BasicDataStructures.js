let yourArray= ["one", false, true, 68, 76] 
// this is a one dimmensional array 
console.log(yourArray.length) // length is 5 elements. 
console.log(yourArray[3]) // index at 3 = 68 

// array bracket notation and mutation: 

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
// index 1 = "b"
myArray[1] = "redbull"
// Only change code above this line
console.log(myArray) // = [ 'a', 'redbull', 'c', 'd' ] this has mutated and changed items in the array. 

// adding to end and front of array 
    // .push() adds to end of the array 
        // .unshift() adds to the front of the array 

// adding elements to the beginning and ending of the array 
     function mixedNumbers(arr) {

arr.unshift('I', 2, 'three')
arr.push(7, 'VIII', 9)
 
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
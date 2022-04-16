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


// removing from beggining and end of array 
function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); 
//    return arr // = [ 'is', 'not' ]
   
// if we return this way 
   return ['challenge', 'complete'] //// = [ 'challenge', 'complete' ]
  }
  // we are telling it that we want to mutate the array prior to removal with pop and shift. 
  
  console.log(popShift(['challenge', 'is', 'not', 'complete'])); 


  // remove items in an array with splice to make the sum of the array add to 10 

  const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(1,4)

console.log(arr); // = [ 2, 5, 2, 1 ] (10)

// removing and adding to an array using splice and 3 params

  // you have your start index 
    // you have number of items to remove
      // 3rd can be what you want to add at the removal index point 

      function htmlColorNames(arr) {
      const startIndex = 0 
      const amountToDelete = 2
      //looks like start at index of 0 remove 2 items add these two in the place
      //       arr.splice(0, 2,'DarkSalmon','BlanchedAlmond' )
      arr.splice(startIndex, amountToDelete,'DarkSalmon','BlanchedAlmond' )
 
        return arr;
      }
      
      console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
      // this returns ['DarkSalmon','BlanchedAlmond','LavenderBlush','PaleTurquoise','FireBrick']
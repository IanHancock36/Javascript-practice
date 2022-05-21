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

      // slice the middle of an array and return the values 
        // the 1st param starts on where removal takes place, second param on where to stop removal
          // this does not mutate the original array but makes a copy of it with the update. 
        function forecast(arr) {
         return arr.slice(2, 4);
        
        }
        console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


        // Using spread operator 
        function copyMachine(arr, num) {
          let newArr = [];
          while (num >= 1) {
          newArr.push([...arr])
          // this pushes the changes to the end of the array. 
          num--;
          }
          return newArr;
        }
        
        console.log(copyMachine([true, false, true], 2));

// using spread to add in an index of another array. 

function spreadOut() {
  let fragment = ['to', 'code'];

  let sentence =["learning",...fragment,'is', 'fun']
  return sentence;
}
console.log(spreadOut()); 
// result [ 'learning', 'to', 'code', 'is', 'fun' ]
  // taking the fragment and putting it in the index of 1 will create this sentence


  // indexOf 
  function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true: false
    // in these two parameters taking the index
      // off the arr which is the array of diff elements
        // the amount of elem is the parameter for indexOf()
          // you are checking does is the element 0 - whatever if the element is not in the array that is a -1 in the array(the end)
  // and this will return false. 
    // Only change code above this line
  }
  console.log(quickCheck(['candy', 'breakfast', 'hamburger'], 'coffee'));
// this first param in the console.log is the array of arr 
  // second is the element you are checking to see if its in there 
    // is coffee there ? no its -1 in the array. 


    // Iterate through array 
    function filteredArray(arr, elem) {
      let newArr = [];
   
    
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
          //Checks every parameter for the element and if is NOT there continues the code
          newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
        }
      }
    
      // change code above this line
      return newArr;
    }
    console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
    console.log(arr)





    "Nothing is cooler and more attractive than a big comeback, and that'll be me."


function reverseThisQuote(string) {
    return string.split("").reverse().join("")
}
console.log(reverseThisQuote("Nothing is cooler and more attractive than a big comeback, and that'll be me."))


// Very modern solution here

// const chunkArrayInGroups = (arr,  size) =>
//   arr.flatMap((_, i, a) =>
// **** modulus returns the remainder when one is divided into the other one.
//       i % size === 0 ? [ a.slice(i, i + size) ]
//       : []
//   )

// Here is the original
// Write a function that splits an array
// (first argument) into groups the length of size
// (second argument) and returns them as a two-dimensional array.

// function chunkArrayInGroups(arr, size) {
//     return arr;
//   }

//   chunkArrayInGroups(["a", "b", "c", "d"], 2);

// need splice and slice

// JS splice

//   const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
// this removes 'mandrin' from index of 3 and removes one element
//  const removeFish = myFish.splice(3,1)
// const addFish = myFish.splice(3,1,'trout')
//  console.log(myFish)
// this removes 'mandrin' from index of 3 and removes one element

// the while loop is simplest solution

const chunkArrayInGroups =(array, size)=> {
  // gives empty array to split the content of array in
  let monkeyArray = [];
  // you want to select first two then .push() to the
  // new array monkeyArray []
  // this while loop will operate only while conditions are met. 
  while (array.length) {
    // this will start at 0 and select until size argument is fullfilled
    // in this case its 2
    monkeyArray.push(array.splice(0, size));
  }
  return monkeyArray;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));




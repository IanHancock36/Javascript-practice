// Convert to Celcius

function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertToF(30);
//   console.log(convertToF(30))

// reversing a sting
//
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
  // Its basically saying

  //5*4 = 20  4-1 = 3 3*20 = 60 3-1= 2 2* 60 = 120 2-1 = 1 1 *120 = 120
}

factorialize(5);
//   console.log(factorialize(5))

// the num could be a loop decrementing or subtracting 1 at a time and
// when num hits 0 stop the loop?
// takes num as a parameter then decrements stops at 0
// all pos integers less than or === to the number
// this provides a starting point
// Its basically saying
//5*4 = 20  4-1 = 3 3*20 = 60 3-1= 2 2* 60 = 120 2-1 = 1 1 *120 = 120

// sorting longest word in sentence
// doing the .split method (" ") with the space creates an array of every word
// compare length by each index side by side a and b
// return word that is longer set param
// a.length or b.length > than other return that word
// create a new array and then the larger length words will be from largest to smallest
// index 0 or word[0] should contain the longest number.

function findLongestWord(str) {
  // Step 1. Split the string into an array of strings
  let strSplit = str.split(" ");
  // let strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
  // let strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

  // Step 2. Sort the elements in the array this switches the position
  let longestWord = strSplit.sort(function (a, b) {
    return b.length - a.length;
  });
  /* Sorting process
                  a           b            b.length     a.length     var longestWord
                "The"      "quick"            5            3         ["quick", "The"]
                "quick"    "brown"            5            5         ["quick", "brown", "The"]  
                "brown"    "fox"              3            5         ["quick", "brown", "The", "fox"]
                "fox"      "jumped"           6            3         ["jumped", quick", "brown", "The", "fox"]
                "jumped"   "over"             4            6         ["jumped", quick", "brown", "over", "The", "fox"]
                "over"     "the"              3            4         ["jumped", quick", "brown", "over", "The", "fox", "the"]
                "the"      "lazy"             4            3         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the"]
                "lazy"     "dog"              3            4         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the", "dog"]
                */

  // Step 3. Return the length of the first element of the array
  return longestWord[0].length; // let longestWord = ["jumped", "quick", "brown", "over", "lazy", "The", "fox", "the", "dog"];
  // longestWord[0]="jumped" => jumped".length => 6
}

findLongestWord("The quick brown fox jumped over the lazy dog");
//  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

// using map method
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

//We provide Math.max with the length of each word as argument, and it will simply return the highest of all.

//Let’s analyze everything inside the Math.max parenthesees to understand how we do that.

//str.split(" ") splits the string into an array, taking spaces as separators. It returns this array: [“The”,"quick,“brown”,“fox”,“jumped”,“over”,“the”,“lazy”,“dog”].

//Then, we will make another array, made from the lengths of each element of the str.split(" ") array with map().

//str.split(" ").map(word => word.length) returns [3, 5, 5, 3, 6, 4, 3, 4, 3]

//Finally, we pass the array as argument for the Math.max function with the spread operator ...

//***************************************Confirm Ending of String***********************************************************\\

// The .substring() method returns the part of the string between the start and end indexes, or to the end of the string.
// example const hello ="hello" hello.substring(0,3) would return "l" gives a starting to end poing
// string.substr(-target.length) will get the last index of the string
const cool = "hello";
console.log(cool.substring(0, 2));

function confirmEnding(str, target) {
  return str.substring(-target.length) === target ? true : false;
}
confirmEnding("Sweet Deal", "n");

// console.log(confirmEnding("Sweet Deal", "n"))

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

//**** TIP start at the middle of the array because if in the middle of ascending order 9 is not equal
// we can eliminate the previous numbers and it is faster run time */
// on every iteration we will cut the input down by half

// you are going to loop until the left and right meet with each other
// subtracting the array condenscing down until they meet
// then I belive you do the final check what is bigger than the other
// then you would return -1 if its not the target

const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (mid < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};

//Input: nums = [-1,0,3,5,9,12], target = 9
//Output: 4
//Explanation: 9 exists in nums and its index is 4

// **************************************find largerst word in string ************************************** \\

// need to split the string in an array.
// const strArray = string.split(" ")
//result
// console.log(strArray)
// result [
//  'the',    'quick',
//  'brown',  'fox',
//  'jumped', 'over',
//  'the',    'lazy',
//  'dog'
//]

// sort the array for largest length of string in the array
// const sortedArray = strArray.sort((stringA, stringB)=>{
// if the 2nd string is larger it will move it up the array to get the larger strings to the front of the array
//   return stringB.length - stringA.length
// })
// console.log("SORTED ARRAY", sortedArray)
// result
// [
// 'jumped', 'quick',
// 'brown',  'over',
// 'lazy',   'the',
// 'fox',    'the',
// 'dog'
// ]
// now look up the first index of the array the largest one should be at the front or 0 index
// console.log(sortedArray[0])
// result will be jumped as looking above

// function to be reuseable
const str = "the quick brown fox jumped over the lazy dog";
const longestWord = (str) => {
  const strArray = str.split(" ");
  const sortedStringArray = strArray.sort((stringA, stringB) => {
    return stringB.length - stringA.length;
  });
  // return sortedStringArray[0]
};
// console.log(longestWord(str))

// this will return the largest word which is jumped

// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  // loop through all the arrays
  // need two loops

  for (let i = 0; i < arr.length; i++) {
    let largeNumberArray = [];

    // i is the indivdual arrays the sub arrays
    // j is the itmes inside the array

    let largestNumber = arr[i][0]; // --- this here is giving the starting value for each array giving index of 0 inside each sub array
    for (j = 0; j < arr.length; j++) {
      // logging like this now brings all individual values of the array and the items inside sub array
      // breaks them out into one list
      console.log(arr[i][j]);
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    largeNumberArray.push(largestNumber)
  }
  return largeNumberArray
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

//if (arr[i][j] > largestNumber){largestNumber = arr[i][j]} gives us largest number for each sub array.
//    let largeNumberArray = []; giving a new array 
//  largeNumberArray.push(largestNumber) now that we have all largest numbers need to pushing to the end of the array 
// Convert to Celcius

function convertToF(celsius) {
    let fahrenheit  = celsius*(9/5)+ 32 
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
                let strSplit = str.split(' ');
                // let strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
                // let strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
                
                // Step 2. Sort the elements in the array this switches the position
                let longestWord = strSplit.sort(function(a, b) { 
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
              
          findLongestWord("The quick brown fox jumped over the lazy dog")
//  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

// using map method 
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

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
  const cool = "hello"
  console.log(cool.substring(0,2))
  
  function confirmEnding(str, target) {
  return (str.substring(-target.length) === target) ? true : false 


}
confirmEnding("Sweet Deal", "n")

console.log(confirmEnding("Sweet Deal", "n"))
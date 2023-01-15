let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result)


// this allows you to throw an OR in your regex search 
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result2 = petRegex.test(petString);

// match all lower case and upper case letters in a sentence
// this will take the range of the alphabet in this particular 
// sentence and check whether lower or uppercase 
// globally 

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let resultzz = quoteSample.match(alphabetRegex);

//The g and i modifiers have these meanings:

// g = global, match all instances of the pattern in a string, not just one
// i = case-insensitive (so, for example, /a/i will match the string "a" or "A".

// this matches all global instances of a work in the string as well 
// as is case insensitve 
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi 
let resultzzz = twinkleStar.match(starRegex); 


// This below will match using the "wildcard" so if you want to match something fun , sun run you can use the wildcard with this syntax
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let resultzzzz = unRegex.test(exampleStr);
// this allows you to search for the middle charactures in a word 
let quoteSamplez =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let resultz = quoteSample.match(vowelRegex); // Change this line

// This below matches a range of letters h-s and numbers 2-6 and is global  
// and case insensitive
let quoteSample1 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result1 = quoteSample.match(myRegex); // Change this line
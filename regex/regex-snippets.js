let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result)


// this allows you to throw an OR in your regex search 
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result2 = petRegex.test(petString);


// this matches all global instances of a work in the string as well 
// as is case insensitve 
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi 
let result = twinkleStar.match(starRegex); 


// This below will match using the "wildcard" so if you want to match something fun , sun run you can use the wildcard with this syntax
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result = unRegex.test(exampleStr);
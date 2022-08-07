// I will need to truncate string if the length of the string is too long
// then you will have to add the "..." at the end of it.
// This is something that is used for something like a thumbnail.

//this will take the parameter of the string. and the length
// the arguments that are passed are the string in variable form
// and the max length of the string before the "..." are added to it
// We want to use a slice() method that will slice the string down and add the
// "..." to the string.
// slice takes the start and an end index
// string1.slice(0,2) would start at 0 and slice the last two letters of the string
const string1 = "Mary had a little lamb";
const string2 = "I like turtles";

const truncateThisString =(string, number) =>  {
    if (string.length <= number) {
      return string
    }else{
    return string.slice(0, number) + '...'
    }
  }
  
console.log(truncateThisString(string2,6))
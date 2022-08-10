// capatalizing every first letter in a string. 
    // 



function titleCase(str) {
    return str;
  }
  
  titleCase("I'm a little tea pot");


  const coolVariable = "i like turtles"
  // this will return only the "F"
 //******* const iLikeTurtles = coolVariable[0].toLocaleUpperCase() 
  // if we concatinate + coolVariable.substring(1)
    // this will give us the full sentence. you are combining 
    // "I" + "like turtles"
  const iLikeTurtles=  coolVariable[0].toLocaleUpperCase() + coolVariable.substring(1)
  console.log(iLikeTurtles)

  // Now we must take the string and split them into individual pieces
const individualWords = coolVariable.split(" ")
console.log(words)
// this will result in ["i", "like", "turtles" ]
  // now we need to iterate over them now they are insisde the array
    // iterate the index of 0 of every word the first letter
 individualWords.map((word)=>{
        return word[0].toLocaleUpperCase() + word.substring(1)
    }).join(" ")

    // this will iterate over every word in this array and capatalize first letter
        // then it will concatinate (joining two things) rest of the word with the first word of the sentence
            // this will return and array we want a sentence
                // .join provides it to become a sentence. 

  //another solution is....
  // taking every letter and converting to lowercase 
  //then while iterating using .replace() the characture at 0 in each word from lowercase to val.charAt(0).toUpperCase()
    // then using the join method to create a sentence. 

  function titleCase(str) {
    return str.toLowerCase().split(" ").map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ");
  }
  
  titleCase("I'm a little tea pot");

  
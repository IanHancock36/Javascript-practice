// Recursive functions 
 // function that calls itself

 function Cars (){
     Cars()
 }

// a recursive function always has a condition to stop calling itself so no infinte loop.

function Cars (){
    if (condition){

    } else {
        Cars()
    }
}

// Countdown recursive function : 
    // this will create an infinte loop 

// function countDown(fromNumber){
//     // console.log(fromNumber);
//     countDown(fromNumber-1);
// }
// countDown(3)


// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(3);


// function countDown(num){
//     if (num <= 0){
//         console.log("All Done")
//         return
//     } 
//     console.log(num)
//     num--
//     countDown(num)
// }
// countDown(4)
// the result will be 4, 3 , 2 , 1 
// the return statement made under  console.log("All Done")
 // is to stop the count down. if return is not present it will do an infinite loop. 
  

 // Other Recursive Function 
     function sumRange(num){
         if(num === 1) return 1 
         return num + sumRange(num - 1) 
        
     }
sumRange(3)
    

// Recursive function

function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }


// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    // this loops through all the contacts 
    for (let i = 0 ; i< contacts.length ; i++ )
    // this checks if the contacts at any position in the index first name === the name that we pass in as an argument
  if(contacts[i]["firstName"] === name){
   if(contacts[i].hasOwnProperty(prop)){
     return contacts[i][prop]
   }else {
     return "No such property"
   }
  }
  // exit the loop 
  return 'No such contact'
   
  }
  
   console.log(lookUpProfile("Akira", "likes"));
  
  
  
  // IF the name prop we have we pass as an argument is true return something
    // IF the prop we pass is true return something
      // I think I have to loop over the contacts array for name 
        // then loop over for contacts[arr].likes
          // then return something
          //


// * recursive function with math.random 
function randomFraction() {
  // use the assignment operator below: 
  let result = 0;
  // Math.random() can generate 0. We don't want to     return a 0,
  // so keep generating random numbers until we get one     that isn't 0
if (result === 0){
  result= Math.random()
}

  return result;
  // Only change code above this line.
}

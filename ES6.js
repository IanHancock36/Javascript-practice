// Js object Freeze
    // JavaScript provides a function Object.freeze to prevent data mutation.

   // Object.freeze(obj)
  // Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.

   function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };

  
  Object.freeze(MATH_CONSTANTS)

    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  // functions 
  // When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
  const magic = () => {
    return new Date()
  }

  // old function 
//   const myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
//   };
  
//   console.log(myConcat([1, 2], [3, 4, 5]));

  // Es6 function if there is two args you keep the paranthens 
  // if 1 arg you can take away inline style
  const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));

  // default parameters when there is not a one set out side te default kicks is 

  const increment = (number, value=1) => number + value;


  
// rest operator = ... (similar to spread)
  // same type of syntax but is used inside the functions parameters
    // condense indefinate # of args into a type of array 
    

    const sum = (...args) => {
      return args.reduce((a, b) => a + b, 0);
      }

// Use Destructuring Assignment to Assign Variables from Objects

      // Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

      const user = { name: 'John Doe', age: 34 };
    //  Here's how you can give new variable names in the assignment:
      
      const { name: userName, age: userAge } = user;

      // Here we can sub in new variable names in an assignment
      const HIGH_TEMPERATURES = {
        yesterday: 75,
        today: 77,
        tomorrow: 80
      };
      
// assigning a new variable name for today and tomorrow
        
      const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
      
  // result { yesterday: 75, today: 77, tomorrow: 80 }

  // Array Destructuring 

      const [a, b] = [1,2,3,4,5,6]
       console.log (a,b)
       // a,b will be assigned to 1 and 2 

       // destructuring with commas 

       const [f,g,,,c] = [1,2,3,4,5,6,7,8]
       console.log(a,b,c)
       // now c will be assinged to unmber 5 in the array 

       // reassiging variable and values

       let z= 8, j = 6 

       // I want to reassign the values to flip 
        // I want z to = 6 and vice versa
        [z,j] =[j,z]

        // Destructure Assignment with rest parameter 

        // Some situations we might want to collect the rest of the elements
          // 




          // Use Destructuring Assignment to Pass an Object as a Function's Parameters
          const stats = {
            max: 56.78,
            standard_deviation: 4.34,
            median: 34.54,
            mode: 23.87,
            min: -0.75,
            average: 35.85
          };
    
          const half = ({max, min}) => (max + min) / 2.0; 
          // this takes the max and min in the object passes it as a parameter shorthand handling of 
            // of the function 
     
           // Use getters and setters to Control Access to an Object

       //    Create the class, Thermostat. You’re going to put your constructor, getter, and setter in here.


//Give the constructor a parameter (which you can name anything you want). Set the parameter to an attribute of the same name. Remember, you are initially setting things in Fahrenheit temperature.


//Create a get method that converts the Fahrenheit attribute to Celsius. Use the formula given to you.


//Create a set method of the same name as the get method. It should have a parameter that accepts celsius temperature. Convert it to fahrenheit, and set it to the attribute.


class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

// Reuse Code 

import { add, subtract } from './math_functions.js';

// Promise 
const makeServerRequest  = new Promise((resolve, reject) => {

});

// Promise 
const makeMyServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
   resolve("We got data ")
  } else {  
    reject("Data not recived")
  }
});
// Promises are most useful when you have a process that takes an unknown amount of time in your code 
// (i.e. something asynchronous), often a server request. When you make a server request it takes 
// some amount of time, and after it completes you usually want to do something with the response 
// from the server. This can be achieved
//  by using the then method. The then method is executed immediately after your promise 
//  is fulfilled with resolve

const makeMyMyServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }

})
makeMyMyServerRequest.then(result => {
  console.log(result);
  })
  // this is usually chained inside a try catch this is the error so you can get a response from the server 
    // on what exactly the error is. 
  makeMyMyServerRequest.catch(error => {
    console.log(error);
  });
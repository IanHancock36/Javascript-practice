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

  
  

  
  
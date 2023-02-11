const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let copy = [...arr];
  copy.sort((a, b) => {
    return a - b;
  });
  return copy;
}

nonMutatingSort(globalArray);

// This will sort the array and return a copy of it 
// using spread operator this will not mutate the original array


function concat(a1: number[], a2: number | number[]) {
  /* Wrap a2 in an array if it's not one already. */
  let a2Array = Array.isArray(a2) ? a2 : [a2];
  return [...a1, ...a2Array];
}


function stringify(inputVar :number | boolean | string ){
  return inputVar.toString()
  }

  

  function addOrSubtract(
    number: number,
    choice: "add" | "subtract" | "leave-alone"
  ) {
    if (choice === "add") {
      return number + 1;
    }
    if (choice === "subtract") {
      return number - 1;
    }
    if (choice === "leave-alone") {
      return number;
    }
    return number //origin Not all code paths return a value
  }



  let rickyAndCal = "Cal Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(result)

// this matches the first word in the string 
//if the sentence was "Ricky Cal both like racing."
// it would return false since first words or letters in string do not match Cal
  

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

// searches for the end of the string



function first<T>(elements: Array<T>): T {
  return elements[0];
}
//first<boolean>([true, false]);
//RESULT:
//true
// We fill the type hole when we call the function. For example, first<boolean> fills the type hole with boolean. Let's trace the boolean type's path through the function, imagining what the compiler is doing. At each step, it replaces the T type parameter with the actual type.//



function last<T>(elements: Array<T>): T {
  return elements[elements.length - 1];
}
let results: [string, number] = [last<string>(['a', 'b', 'c']),last<number>([1, 2, 3]),];
results;
RESULT:
['c', 3]

// elements.length - 1 gives the index length of 2 for each array 
// you want to return last letter in array and return it 
// return last number in array 
// put both into the array because results is looking for an array with [string,number]

// result would be ['c',3]

type User = {
  name: string
};

function nameOrLength(userOrUsers: User | User[]) {
  if (Array.isArray(userOrUsers)) {
    // Inside this side of the if, userOrUsers' type is User[].
    return userOrUsers.length;
  } else {
    // Inside this side of the if, userOrUsers' type is User.
    return userOrUsers.name;
  }
}



function hasLoggedIn(times:number | true ){
  return (typeof times === 'boolean') ? true : times >0 
}
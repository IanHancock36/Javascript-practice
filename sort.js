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
  
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
// Spread Operator
// allows us to quickly copy all or part of an 
// existing array or object into another array or object.

// javascript slice starts on a index number and ends on an index number 

const drinks = ["beer", "tea", "soda", "water"]
const sliceDrinks = drinks.slice(1, 3)
console.log(sliceDrinks)
// this would result in returning in a new array 
// ["tea","soda"]

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined)

function frankenSplice(arr1, arr2, n) {
    let result = []
    // have empty array to place the new items 
    // result.push() pushes to the end of     
    // the array

    // this starts on the second array 
    // at index of 0 stops at 1 
    // so removes 5 returns only 4
    result.push(...arr2.slice(0, n))
    result.push(...arr1)
    result.push(...arr2.slice(n, arr2.length))
    return result;
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));



const array2 = [4, 5, 6]
const localArr = array2.slice();
console.log(localArr)

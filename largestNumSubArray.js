
// take a list of items iterate over them and compute a single value 
// It is a loop with a memory

// the accumulator is the last value you return in the function 
// the accumulator is the previous state
// the 2ns argument is the current value in the loop
// to make one value you add the accumulator or "accumulated value with the current value"
const orders = [
    {id:1 , total: 10.00},
    {id:2 , total: 20.00},
    {id:3 , total: 30.00},
    {id:4 , total: 40.00}
]
let total = orders.reduce((accumulator, currentOrder)=> {
    return accumulator + currentOrder.total

},0)
// the 0 here is the default value to start with 
// console.log(total) // this === 100 
// the 0 here is the default value to start with 

// to start at the end of the array. 

const order2 = [
    {id:1 , total2: 10.00},
    {id:2 , total2: 20.00},
    {id:3 , total2: 30.00},
    {id:4 , total2: 40.00}
]
let total2 = order2.reduceRight((accumulator, currentOrder2)=> {
    return accumulator + currentOrder2.total

},0)
console.log(total2)

function largestOfFour(mainArray) {
    return mainArray.map(function (subArray){
      return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
        return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
      }, 0);
    });
  }
//   console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

  // this finds the highest number inside each sub array and returns one array with the largest numbers
// [5,27,39,1001]
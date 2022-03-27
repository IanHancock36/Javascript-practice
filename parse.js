
// convertin string into number
function convertToInteger(str) {
    return parseInt(str)
    }
    
    convertToInteger("56")


    // countdown 
    function countdown(n){
        return n < 1 ? [] : [n, ...countdown(n - 1)];
     }
     console.log(countdown(3))


     // range of numbers 

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      let numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
  console.log(rangeOfNumbers(3,6))
  
  // if 6-3 return 3 else
    // numbers 3 , 6 -1 
      // this loops through all cases and decrements the numbers down
        // numnbers.push(endNum) pushes all the numbers in between 3 and 6 
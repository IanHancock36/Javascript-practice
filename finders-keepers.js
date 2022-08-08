function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      // If the value of the expression func(arr[i]))
      // evaluates to true, then return arr[i].
        if (func(arr[i])) {
          return arr[i]
        }
    //  if (func(1))       evaluates to false, so we move onto the next number
    //  if (func(2)) {     evaluates to true, so we return 2
    //    return 2
    //  }
    }
    // If after the for loop is done running and no element
    // in arr run through func evaluates to true, then we
    // implicitly return undefined. We don't actually have to
    // write out "Return undefined."
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
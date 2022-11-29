function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 1; i <= len; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive(4);
  // this loop will skip one index dude to the index rule 

  // this solves the problem, here 
  
  function correctFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  // starting at 0 will allow all numbers in the length since index starts at 0 length and index are off by 1 
  // also will increase until i is greater than len 
  

// returns 3 rows of zeros
  function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  



// returns 3 rows of 2 rows each. 

  function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
  
    for (let i = 0; i < m; i++) {
       let row = [];
      // Adds the m-th row into newArray
  
      for (let j = 0; j <n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  
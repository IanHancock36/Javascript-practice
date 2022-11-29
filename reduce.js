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
  
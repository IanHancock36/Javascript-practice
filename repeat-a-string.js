//*********** Key Factors of this function ***********\\
// 1. addition assignment operator += adds the value to the right operand to the variable
    // and assigns the result to the variable

// 2. the for loop is usually broken down into 3 statements
    // a. #1 Statement sets the variable before the loop starts (i=0)
    // b. #2 Statement defines the condition for the loop to run (i < num)
        // i is less than num 
    // c. #3 Statement increases the value (i++) for each time the code block in the loop is executed. 

function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}

repeatStringNumTimes("I like turtles", 3);

console.log(repeatStringNumTimes("I like turtles, ", 3));

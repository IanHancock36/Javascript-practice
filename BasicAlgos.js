// Convert to Celcius

function convertToF(celsius) {
    let fahrenheit  = celsius*(9/5)+ 32 
    return fahrenheit;
  }
  
  convertToF(30);
  console.log(convertToF(30))


  // reversing a sting 
    //
    function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("hello");


function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
    // Its basically saying
    
    //5*4 = 20  4-1 = 3 3*20 = 60 3-1= 2 2* 60 = 120 2-1 = 1 1 *120 = 120
  }
  
  factorialize(5);
  console.log(factorialize(5))
  
  // the num could be a loop decrementing or subtracting 1 at a time and 
  // when num hits 0 stop the loop? 
  // takes num as a parameter then decrements stops at 0 
  // all pos integers less than or === to the number 
  // this provides a starting point 
  // Its basically saying
  //5*4 = 20  4-1 = 3 3*20 = 60 3-1= 2 2* 60 = 120 2-1 = 1 1 *120 = 120
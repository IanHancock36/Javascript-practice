// generating whole number 
// function randomWholeNum() {
//     // Only change code below this line.
//     return Math.floor(Math.random() * 10);
//   }
//   // generating whole number in range 
//   Math.floor(Math.random() * (max - min + 1)) + min

  // function for range 
const randomRange = (myMin, myMax) => {
   
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);


  }
 randomRange(9,12)
 console.log(randomRange)


// const random = Math.floor(Math.random()*10)
// console.log(random)
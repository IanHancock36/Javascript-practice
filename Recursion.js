// Recursive functions 
 // function that calls itself

 function Cars (){
     Cars()
 }

// a recursive function always has a condition to stop calling itself so no infinte loop.

function Cars (){
    if (condition){

    } else {
        Cars()
    }
}

// Countdown recursive function : 
    // this will create an infinte loop 

// function countDown(fromNumber){
//     // console.log(fromNumber);
//     countDown(fromNumber-1);
// }
// countDown(3)


// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(3);


// function countDown(num){
//     if (num <= 0){
//         console.log("All Done")
//         return
//     } 
//     console.log(num)
//     num--
//     countDown(num)
// }
// countDown(4)
// the result will be 4, 3 , 2 , 1 
// the return statement made under  console.log("All Done")
 // is to stop the count down. if return is not present it will do an infinite loop. 
  

 // Other Recursive Function 
     function sumRange(num){
         if(num === 1) return 1 
         return num + sumRange(num - 1) 
        
     }
sumRange(3)
    

// Recursive function

function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }


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

function countDown(fromNumber){
    console.log(fromNumber);
    countDown(fromNumber-1);
}

countDown(3)


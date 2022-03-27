
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
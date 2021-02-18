// while loops 
const name = ['jake','richard','steve'];
//let i =0;

//while (i<5){
//i++
//}
//console.log('in loop ' , i )

let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++
}


// do while loops 
// useful in running a code once. runs the code inside a loop 
// at least once whether it is true or false. 


let i = 5 ; 

do{
    console.log('val of i is:', i);
    i++; } while(i<5); 


    const age = 25 ;

    if(age >20){
        console.log('you are over 20 ')
    
    }
else{
    console.log('you are under 20')
}

// else if statements 


const password = 'password123455'
if(password.length >=12){
    console.log('that password is mighty strong')
} else if (password.length >= 8 ){
    console.log('Hey there this password works')
} else{
    console.log ("this password does not work. ")
}


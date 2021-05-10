const form = document.querySelector('.signup-form')
// const username= document.querySelector('#username')
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', event =>{
    event.preventDefault();
   
   

    //validation
    const username = form.username.value; 


    if(usernamePattern.test(username)){
        //feedback good info 
        feedback.textContent ='that username is valid'

    } else{
        // feedback info 
        feedback.textContent='username must contain letters only 6-12 charactures long'
    }
})

//live feedback 
 form.username.addEventListener('keyup', event => {
    console.log(event)
    if(usernamePattern.test(event.target.value)){
        form.username.setAttribute('class','success')
    } else{
       form.username.setAttribute('class','error')
    }
 });



// this live feed back is so on the event of every key strike up
// it is constantly checking values. 

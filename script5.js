
// HTTP requests: 
    //XMLHTTP will send a request to the browser
const request = new XMLHttpRequest(); 
request.addEventListener('readystatechange', ()=>{
    // 
    if (request.readyState === 4 && request.status === 200){
        console.log(request.responseText)
    }else if(request.readyState === 4 ){
        console.log('could not fetch data')
    }
});
request.open('GET','https://jsonplaceholder.typicode.com/todoss/')

// get data is a get request

request.send()
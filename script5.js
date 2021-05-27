
// HTTP requests: 
    //XMLHTTP will send a request to the browser
const request = new XMLHttpRequest(); 
request.addEventListener('readystatechange', ()=>{
    // 
    if (request.readyState === 4){
        console.log(request.responseText)
    }
});
request.open('GET','https://jsonplaceholder.typicode.com/todos/')

// get data is a get request

request.send()
const ul = document.querySelector('.people');

const people = ['jim','joe','ron','shawn','dave']

let html =``

people.forEach(person =>{
// create Html template for 
html+= `<li style="color: purple>${person}</li>`
});

console.log(html)
ul.innerHTML = html;
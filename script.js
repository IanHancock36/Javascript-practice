// const article = document.querySelector('article');

// console.log(article.children)

// making an array from html collection converting it then cycling throught the classes 

// console.log(Array.from(article.children))

// Array.from(article.children).forEach( child =>{
//      child.classList.add('article-element')
// })
    

// Array from returns a new value as an array now you can attach forEach to it 

// const title = document.querySelector('h2')


// console.log(title.parentElement)
// console.log(title.parentElement.parentElement)
// console.log(title.nextElementSibling)
// console.log(title.previousSibling)


// Event listener!

// const button = document.querySelector('button')
// button.addEventListener('click', ()=>{
//     console.log('you clicked me dude ')
// })

const button = document.querySelector('button');
const ul = document.querySelector('ul')

button.addEventListener('click', ()=> {
 const li = document.createElement('li'); 
 li.textContent = 'something new to do '
 ul.prepend(li)
})



//  const items = document.querySelectorAll('li')
//    items.forEach(item => {
    
  
//        item.addEventListener('click', event => {
//         event.stopPropagation()
//         console.log('event in LI')
//         // event.target.style.textDecoration = 'line-through'
//          event.target.remove()
//        })
//    })

   ul.addEventListener('click', event => {
    //  console.log('event in UL')
    if(event.target.tagName === 'LI'){
      event.target.remove()
    }
    

   
    
   })


   // Stop propagation.........
   // event delegation 
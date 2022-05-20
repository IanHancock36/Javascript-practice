const posts = [
  { title: "Post One", body: "this is post 1" },
  { title: "Post Two", body: "this is post 2" },
];

// function getPosts(){
//     setTimeout(()=> {
// let output = ''
// posts.forEach((post, index) =>{
// output += `<li>${post.title}</li>`;
// });
// document.body.innerHTML = output;
//     },1000)
// }

// getPosts();
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}


function createPost(post, callback) {
    setTimeout(()=> {
        posts.push(post)
        callback()
    },2000)
}
// getPosts();
createPost({title:'Post 3', body:'this is post 3'}, getPosts);

// this callback of get posts can be placed in the create posts so it all runs in succession 
// A JavaScript callback is a function which is to be executed after another function has finished execution. 
// A more formal definition would be - Any function that is passed as an argument to another function so that 
// it can be executed in that other function is called as a callback function
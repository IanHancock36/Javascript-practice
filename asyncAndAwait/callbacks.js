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

getPosts();


function createPost(post) {
    setTimeout(()=> {
        posts.push(post)
    },2000)
}

createPost({title:'Post 3', body:'this is post 3'});
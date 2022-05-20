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

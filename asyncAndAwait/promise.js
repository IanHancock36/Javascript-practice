const posts = [
  { title: "Post One", body: "this is post 1" },
  { title: "Post Two", body: "this is post 2" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  // a promise takes a callback function
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
        posts.push(post);
        const error = true
        console.log(error)
        if(!error){
            resolve()
        }else {
            reject('error: something went wrong')
        }
      }, 2000);
  });

}
createPost({title: "Post Three", body: "this is post #3"}).then(getPosts).catch(error => console.log (error))
// A JavaScript callback is a function which is to be executed after another function has finished execution.
// A more formal definition would be - Any function that is passed as an argument to another function so that
// it can be executed in that other function is called as a callback function

// promise resolve, reject 
// resolve a promise successfully
// reject when you are rejecting the promise due to a error. 

// basically we are telling function to run at 2 seconds and push a new post onto the post array
// using promise if not error run the resolve function to post it
// if its an error then reject it and throw the error code
// no need to use a call back because we can put it in the .then syntax at the end of the post. 




// Promise.all 

const promise1 = Promise.resolve("Hello")
const promise2 = 10
const promise3 = new Promise((resolve,reject)=> 
    setTimeout(resolve,2000, 'Goodbye'))

    Promise.all([promise1,promise2,promise3]).then((values)=>console.log(values))

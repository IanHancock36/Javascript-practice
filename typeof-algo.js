// You can use the typeof 
// operator to find the data type
// of a JavaScript variable. 
 
 function booWho(bool) {
 return typeof bool === "boolean"
}

booWho(null);


const testVariable1 = "I like turtles"
const testVariable2 = 486
const testVariable3 = null

console.log("#1",typeof testVariable1)
console.log("#2",typeof testVariable2)
console.log("#3",typeof testVariable3)

// #1 = string 
// #2 = number 
// #3 = object 
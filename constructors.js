function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  let hound = new Dog()
  

  function Dog(name,color) {
    this.name = name,
    this.color = color
   this.numLegs = 4 
  
  
  }
  let terrier = new Dog()
  terrier.name = "steve",
  terrier.color = "black"



  let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(7)
console.log(myHouse instanceof House)
  

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps, canary);
 


// Prototyping 
// adding The JavaScript prototype property allows you to add new properties to object constructors:

function Dog(name) {
  this.name = name;
}


 Dog.prototype.numLegs = 4
// Only change code above this line
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs)

// now beagle.numlegs will = 4 


// iterating over 
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property)
  }else{
    prototypeProps.push(property)
  }
}
console.log(ownProps)
console.log(prototypeProps)




function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
 if(candidate.constructor === Dog){
   return true 
 } return false 
}

// setting the prototype with an object to write all your additions
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
numLegs: 4, 
eat: function(){
  console.log("woof, woof, woof")
},
describe: function(){
   console.log("My name is " + this.name);
}
};
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
console.log(Object.prototype.isPrototypeOf(Dog.prototype));




function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,

};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
 
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
   eat: function() {
    console.log("nom nom nom");
  }

};
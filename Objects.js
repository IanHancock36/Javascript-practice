function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck = Object.create(Animal.prototype) // Change 
duck.eat()
console.log(duck instanceof Animal)
let beagle = Object.create(Animal.prototype) // Change 
beagle.eat()
console.log(beagle instanceof Animal)

// Object.create(obj) - creates a new object and sets obj as a new projects prototype
// prototype is a recipe for creating an object setting prototype of duck to being the prototype 
// of Animal above you are giving the instance of Animal to the duck or "recipe" to any thing else you 
// assign the prototype to. 

// prototype is a recipe for creating an object 



function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype)
let boston = new Dog("steve")

// this makes dog inherit from Animal 


function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

let duck = new Bird();
Bird.prototype.constructor = Bird
console.log(duck.constructor)
let beagle = new Dog();
Dog.prototype.constructor = Dog
console.log(beagle.constructor)

// this gives the inhertiece or refernce to the constructors of the individual animals
// while still living in the Animal Object. 

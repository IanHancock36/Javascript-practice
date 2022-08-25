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
  
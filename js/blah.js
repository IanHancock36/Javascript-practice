class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.color} ${this.type} howls loudly.`);
    }
}

const woodDragon = new Dragon("dragon", "brown", "wood");

//woodDragon.fly();
//woodDragon.roar();

const werewolf1 = new Werewolf ('werewolf','grey',)
werewolf1.howl()

class Cyclopse extends Monster{
    constructor (color,type,superpower){
    super (type,color);
    this.superpower = superpower
}
    laser(){
        console.log(` The ${this.color} ${this.type} shoots a ${this.superpower} from his eye destroying all foes in its path`)
    }
}

const cyclopse = new Cyclopse ("green","cyclopse","laser")

cyclopse.laser()
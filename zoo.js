// function sleep(name){
//     console.log(name + "sleeps for 8 hours.");
// }


//runs the zookeeper
function run(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    var stinger = new Bee("Stinger");
    stinger.eat("meat");
    stinger.eat("pollen");
    var zoebot = new Zookeeper("Zoebot");
    zoebot.feedAnimal([tigger, pooh, rarity, ], "pizza");
    //console.log(Animal.getPopulation());
}



// function eat (name, food){
//     console.log(name + " eats " + food);
//     favoriteFood == food ? console.log("YUM!!! " + name + " wants more " + favoriteFood): sleep(name);
// }
// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }
//
//
// class Polygon extends Shape {
//
//     constructor(height, width) {
//         super('Polygon');
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//
//     //method #2
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
// }

animalPopulation = 0;

class Animal {
    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation ++;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours.");

    }

    eat(food) {
        console.log(this.name + " eats " + food);
        this.favoriteFood == food ? console.log("YUM!!! " + this.name + " wants more " + this.favoriteFood) : this.sleep(this.name);
    }

    static getPopulation() {
        return animalPopulation;
    }

}

class Tiger extends Animal {
    constructor(name) {
        super(name, "meat");
    }
}

class Bear extends Animal{
    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal{
    constructor(name) {
        super(name, "marshmallows");
    }

    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super(name, "leaves");
    }

    eat(food){
        if(this.favoriteFood == food) {
            super.eat("leaves");
            this.sleep();
        }else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

class Bee extends Animal {
    constructor(name){
        super(name, "pollen");
    }

    sleep() {
        console.log(this.name + " never sleeps");
    }

    eat(food){
        if(this.favoriteFood == food) {
            super.eat("pollen");
            this.sleep();
        }else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

class Zookeeper {
    constructor(name){
        this.name = name;
    }

    feedAnimal(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() + " total animals.");
        for(var i = 0; i < animals.length; i++){
            animals[i].eat(food);
        }
    }
}

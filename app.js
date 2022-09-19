//Exercises 1, 2, and 3

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(hobby) {
        let index = this.hobbies.indexOf(hobby);
        this.hobbies.splice(index, 1);
    }

    greeting() {
        console.log(`Hello fellow person, my name is ${this.name}! I live in ${this.residence}.`);
    }
}

class Coder extends Person {
    constructor (name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }
    
    greeting() {
        console.log(`Hello, I am a coder and my name is ${this.name}! I live in ${this.residence}.`);
    }
}

let Teddi = new Person("Teddi", ["Blizzard", "Klondike"], "Colorado", ["hiking", "cooking"]);

console.log(Teddi.greeting());
console.log(Teddi.hobbies);

let Marika = new Coder("Marika", ["Butterscotch", "Sprite"], "Connecticut", ["coding", "playing violin"]);

console.log(Marika.pets);
console.log(Marika.occupation);
console.log(Marika.greeting());
Marika.removeHobby("coding");
Marika.addHobby("debugging");
console.log(Marika.hobbies);

//Exercise 4

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(x, y) {
        if (y === undefined) {
            this.result += x;
            return this.result;
        }
        this.result = x + y;
        return this.result;
    }

    subtract(x, y) {
        if (y === undefined) {
            this.result -= x;
            return this.result;
        }
        this.result = x - y;
        return this.result;
    }

    multiply(x, y) {
        if (y === undefined) {
            this.result *= x;
            return this.result;
        }
        this.result = x * y;
        return this.result;
    }

    divide(x, y) {
        if (y === undefined) {
            this.result /= x;
            return this.result;
        }
        this.result = x / y;
        return this.result;
    }

    displayResult() {
        console.log(this.result);
    }
}

let myCalc = new Calculator;

myCalc.multiply(2, 6);
myCalc.add(4);
myCalc.divide(2);
myCalc.subtract(1);
myCalc.displayResult();

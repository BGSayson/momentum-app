class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound) { 
        console.log(sound)
    }

    get metaData() {// see note below
        return `Type: ${this.type}, legs: ${this.legs}`;
    }

    static apir() {//static, use on functions and make it only work with the class name (i.e. Animal.apir())
        return 'APIR';
    }
}

let cade = new Animal ('feline', 4)
console.log(cade.metaData)//methods defined by get must be accessed like a property

class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);//super makes sure it inherits the traits/properties of its parent class
        this.tail = tail;
    }
}
//////////////////////////////
class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
    playerIntro1() {
        console.log(`${this.name} was born in ${this.country}.`);
    }
}

//////////////////POSSIBLE
class BasketballPlayer extends Player {
        constructor(name, country, age) {
            super(name, country);
            this.age = age;
        }
        playerIntro2() {
            console.log(`${this.name} is ${this.age} years old and knows how to play basketball.`);
    }
}

// const { name, type, level } = tami;

// const adventurers = [
//     {name: "Wis'adel", country: "Kazdel", archetype: "Flinger Sniper"},
//     {name: 'Ulpianus', country: "Aegir", archetype: "Crusher Guard"},
//     {name: 'Shu', country: "Yan", archetype: "Guardian Defender"}
// ];

// const {name, country, archetype} = adventurer

// const operators = [
//     new Player(name: "Wis'adel", country: "Kazdel", archetype: "Flinger Sniper"),
//     new Player(name: 'Ulpianus', country: "Aegir", archetype: "Crusher Guard"),
//     new Player(name: 'Shu', country: "Yan", archetype: "Guardian Defender");
// ]

// let roster = document.getElementById('roster')

// function renderRoster() {
//     for (const adventurer of adventurers) {
//         const { name, country, archetype} = adventurer
//         roster.textContent = `name: ${name}, country: ${country}, archetype: ${archetype}`
// }
// }

const Messi = new Player('Lionel Messi', 'Argentina');
const Lebron = new BasketballPlayer('LeBron James', 'USA', 38);
Messi.playerIntro1();
Lebron.playerIntro2();



//////////////////////////////////

function addressMaker(address) {
    const newAddress = {
        city: address.city,
        street: address.street,
        country: `Philippines`
    };
    console.log(newAddress);
}

addressMaker({city: 'Quezon', street: 'Ortigas Avenue'})

function addressMaker(city, street) {
    const newAddress = { city, street, country: 'Philippines' };
    console.log(newAddress)
}

const {city, street,} = 
addressMaker('Quezon','Ortigas Avenue')
///////////////////////////////////////

function addressMaker(city, street, country = 'Philippines') {
    const newAddress = { city, street, country};
    console.log(newAddress)
}

// const {city, street, country} = 
// addressMaker('Quezon','Ortigas Avenue')

/////////////////////////////////

const students =  [
    { name: "Manny", city: "Manila"}, 
    { name: "Jose", city: "Intramuros"}, 
    { name: "Ana", city: "Mandaluyong"}, 
]

for (const student of students) {
    const { name, city } = student
    console.log(`${name} lives in ${city}`);
}

////////////////////////////

function buyFood(food = 'something') { //placeholder by assigning the argument a value, if no value is passed in the function, it will default to a value
    console.log(`I'm going to buy ${food} from the sari-sari store.`);
}

buyFood()
buyFood('c2 na red')

const mmmFood = (food = 'something') => {
    console.log(`I'm going to buy ${food} from the sari-sari store.`);
}

mmmFood()


// let incomes = [ 11000, 15000, 25000]
// let anotherIncome = 5000
// let total = 0;

// for (const income of incomes) {
//     total += income + anotherIncome;
// }

// console.log(total);
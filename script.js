// JAVASCRIPT //

// QUESTION NO 1 //

function Player(name , price) {

    this.name = name;
    this.price = price;

};

let players = [new Player("Basic" , 1000) , new Player("Premium" , 2000) , new Player("Gold" , 5000)];

players.push(new Player("Diamond" , 10000));

console.log(players);

// QUESTION NO 2 //

// OBJECT //

let student = {

    name: "Areeb",
    course: "Web Development"

};

let objectData = `My name is ${student.name}
I am learning ${student.course}`;

console.log(objectData);

// ARRAY //


let arr = ["Areeb" , 14 , "Web Development"];

let arrData = `My name is ${arr[0]}
My age is ${arr[1]}
I am learning ${arr[2]}`;

console.log(arrData);


// QUESTION NO 3 //

// 1. Why do we need Prototype? //

// Hum Prototype ka use isliye karte hain taake multiple objects ek hi property ya method share kar saken. Isse har object ke liye same method ki separate copy banane ki zaroorat nahi hoti aur memory save hoti hai. //


// 2. Constructor mein Prototype kaise use karte hain? //

// Jab hum Constructor Function banate hain, toh uske prototype ke saath dot notation use karke method add kar sakte hain. //

// EXAMPLE //

function Name(name , age) {

    this.name = name;
    this.age = age;

};

Name.prototype.showDetail = function() {

    console.log(`User Name: ${this.name}`);
    console.log(`User Age: ${this.age}`);
    
};

let nameOne = new Name("Areeb" , 14);
let nameTwo = new Name("Umer" , 15);

nameOne.showDetail();
nameTwo.showDetail();


// SHUKAR HE ASSIGNMENT MILA TO //
// Functions in JS

function firstFunction(){
    // console.log("niraj");
    
}
firstFunction()

function loginCheck(userLoggedIn, userName){
    if(userLoggedIn === false){
        console.log(`${userName} Please login first`);
        return
    }
    return `${userName} logged in just now`
}
// console.log(loginCheck(false, "Krishna"))


function twoNumberAddition(num1, num2){
    let total = num1 + num2
    return total
}
const total = twoNumberAddition(15, 30)
// console.log(total);


const objectAndFunction = {
    name: "Rohit",
    userId: "rohit45",
    age: 37,
    carrier: "Cricketer"
}

function functionWithObject(anyObject){
    return anyObject.userId
}
// console.log(functionWithObject(objectAndFunction));


const functionAndArray = [100, 200, 300, 400]

function functionWithArra(anyArray){
    return anyArray[2]
}
// console.log(functionWithArra(functionAndArray));

function calculateCartPrise(var1 , var2, ...val1){
    return val1
}
// console.log(calculateCartPrise(45, 65, 25, 95));

const names = {
    firstName: "Hanuman",
    secondName: "Ram"
}

function nameOfHero(anyName){
    // console.log(`${anyName.firstName} and ${anyName.secondName} are best friends forever...`);
    
}
nameOfHero(names)


// ++++++++++ Some Examples ++++++++++

const animalName = ["Elepant", "Tiger", "Lion", "Cheeta", "Dear", "Bear", "Fox",  "Snek",]

function animalNameCheck(animal){
    if(animal[2] === "Lion"){
        console.log(`I fond it`);
        return
    }
    return animal
}
// animalNameCheck(animalName)

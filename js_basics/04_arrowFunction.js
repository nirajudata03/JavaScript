// ++++++++++ Arrow Function ++++++++++


const chai = () => {
   console.log(`This is Arrow Function`);
   
}
// chai() // arrow funtion defining method



// const arrowFunction = (num1, num2) => {
//    let numTotal = num1 - num2
//    return numTotal 
// }
// const numTotal = arrowFunction(10,5)
// console.log(numTotal);


function one(){
   let name = "niraj"
   console.log(this);
}
// one()



// const addtwo = (num1, num2) => {
//    return num1 + num2
// }

// const addtwo = (num1, num2) =>  num1 + num2

// const addtwo = (num1, num2) =>  (num1 + num2)

const addtwo = (num1, num2) =>  { return num1 + num2}

// const addtwo = (num1, num2) => ({username: "hitesh"})


console.log(addtwo(40,5));
// scopes in JS

function one(num){
    return num + 5
}
// console.log(one(40))

function two(num1, num2){
    const total = num1 + num2
    function three(num1, num2){
        // console.log(total)
         const anotherTotal = num1 / num2
        //  console.log(anotherTotal);
    }
    three(25, 5)
    // console.log(anotherTotal);
    
}
two(10, 8)



let name = "niraj"
if(true){
    console.log(`Hello from ${name}`);
    let anotherName = "Earth"
}

// console.log(`This is ${anotherName}`);

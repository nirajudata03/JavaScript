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

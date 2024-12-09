// singleton
// object.create


// object literals

const mysym = Symbol("key1")

const jsUser = {
    name : "Niraj",
    email : "niraj@google.com",
    age : 20,
    loggedIn : false,
    activeUser : true,
    lastLoggedInDate : ["Mon", "Wed"],
    "fullName": "Niraj Ambadas Udata",
    mysym: "key2"
}

// console.log(jsUser.name);
// console.log(jsUser["age"]);
// console.log(jsUser);
// console.log(typeof mysym);
// Object.freeze(jsUser)


jsUser.newObject = function(){
    console.log(`Hello Js user:`);
    
}

jsUser.anotherNewObject = function(){
    console.log(`Hello JS user: ${this.name}`);
    
}

console.log(jsUser.newObject());
console.log(jsUser.anotherNewObject());


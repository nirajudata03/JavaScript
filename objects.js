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

// console.log(jsUser.newObject());
// console.log(jsUser.anotherNewObject());

// ++++++++++++++Another Example & Topic+++++++++++++

const tinderUser = {
    id : "123abc",
    name: "niraj",
    isLoggedIn: true
}

// console.log(tinderUser);

const newobject = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            fristName: "niraj",
            lastName: "udata"
        }
    }
}

// console.log(newobject.fullName.userFullName.fristName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2, obj3}

// console.log(obj4);

// const obj4 = Object.assign({}, obj1, obj2, obj3)

// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);


// ++++++++++Objects in Array++++++++++

const arrayObject = [
    {
        id: "001"
    },
    {
        id: "002"
    },
    {
        id: "003"
    },
    {
        id: "004"
    }
]

// console.log(arrayObject);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(`isLoggedIn`));

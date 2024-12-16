// For of Loop
// ["", "", ""]
// [{}, {}, {}]



const myArray = ["apple", "ball", "cat", "dog", "elepent", "fish", "god", "high", "image", "jack", "king", "lion", "moon", "niraj"]

for (const key of myArray) {
    // console.log(key);
    
}


const alpa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"]

for (const item of alpa) {
    // console.log(item);
    
}



const myName = "Krishnadevray"

for (const key of myName) {
    // console.log(key);
    if (key == "n") {
        // console.log(`Letter N spotted`);
        continue
    }
    
}


// map


const map = new Map()

map.set("firstName", "niraj")
map.set("name", "krishna")
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    console.log(`${key} is ${value}`);
    
}

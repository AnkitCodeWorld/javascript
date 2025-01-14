//Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const myName = "Ankit"
const score = 100
const scoreValue = 100.05
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId)

const bigNumber = 46464644664n

// console.log(typeof scoreValue)

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]

let myObj = {
    name: "Ankit",
    age: 27,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myObj)

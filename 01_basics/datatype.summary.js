// primitive



// 7 type : string, Number, boolean, null, undefined, symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn  = false
const outsideTemp  = null
let userEmail;
const id = symbol('123')
const anotherId  = Symbol('123')

console.log(id === anotherId);


 const bigNumber  = 34565666445565n

// reference type(non primitive) 

// Array , objects , function

const heros = ["shaktiman", "naagraj", "doga"]
 let myObj = {
    name: "hitesh",
    age: 22,


}

const myfunction = function (){
    console.log("Hello world");

}

console.log(typeof heros);

 //https:262.ecma-international.org/5.1/#sec-11.4.3


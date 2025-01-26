//primitives 

//7 types :String,Number,boolean,null,undefined,symbol,BigInt

const score=100
const scorevalue=100.3

const isLoggedIn= false;
const outsideTemp= null
let userEmail;//undefined

//declare Symbol
const id= Symbol('123')
const anotherId= Symbol('123')
console.log(id=== anotherId);//to check if both are same 
//output is false

const bigNumber = 34567890245566n;//so now its save as bigInt

//reference (Non primitive)

//Array ,Objects,Functions
const hero = ["shaktiman","naagraj","doga"];
let myObj={
    name:"aviral",
    age:22,
}
//function as variable
const myFunction=function(){
    console.log("hello World");
}
console.log(typeof bigNumber);//undefined
console.log(typeof scoreValue)//number
console.log(typeof outsideTemp)//object
console.log(typeof myFunction)//function(isko bola jata hai object function)(function object)
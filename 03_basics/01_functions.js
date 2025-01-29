
function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}
// sayMyName//function reference
//sayMyName()//function execution

// function addTwoNumber(number1,number1){
//     console.log(number1 + number2);
    
// }

function addTwoNumber(number1,number2){
//   let result = number1 + number2;
//   return result  
  return number1 + number2
}
const result = addTwoNumber(3,4);
console.log("Result: ",result);


function loginUserMessage(username){//or pass default value if user dont pass any value (username="Sam")
    if(!username){//or use this(username === undefined) is same as this !username
        console.log("Please enter a username");
        return 
        
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Aviral"))
console.log(loginUserMessage());//if you dont pass any value it give undefined as output

function calculateCartPrice(val1,val2,...num1){//rest operator is passed
 return num1
}
console.log(calculateCartPrice(200,300,400,2000));//[200,300,400,2000] without val1 and 2

const user ={
    username: "Aviral",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username:"sam",
    price: 399
})//you can also pass the object directly by use this approach

//array in fucntion
const myNewArray =[200,300,400,700]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));//300

console.log(returnSecondValue([200,300,400,500,1000]));//also directly pass the array as arugument (o/p ans=300)


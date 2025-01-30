const user = {
    username:"hitesh",
    price:999,
//this keyword current context ko refer karta hai buss itna hei hai
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
        //this keyword referce to the current context (current context(means value (uske andar jo jo apke variable hai vo kya kya value hold kr rhe hai) ) ko refere karta hai)
        
          }
}
// user.welcomeMessage()//hitesh, welcome to website (here we give the default username value="hitesh")
// user.username ="sam"//here context has been changed
// user.welcomeMessage()//sam, welcome to website

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//give output undefined
//    // ye jo hamra context hai vo hamra buss object ke andar kaam kr rha hai 
//    //ye function ke andar kam nhi karta
// }
// chai()

// const chai = function() {
//     let username= "hitesh"
//     console.log(this.username);//int his function defination also give undefined
    
// }



//Arrow Function

const chai = () =>{
    let username = "hitesh"
    console.log(this.username);
    console.log(this);//{}
      
}
// chai()

//Basic arrow function
// const addTwo=(num1,num2) =>{
//   return num1+ num2
// }

//implicit return (arrow function) 
// const addTwo=(num1,num2) => num1+ num2//it run successfulluy

// const addTwo=(num1,num2) => (num1+ num2)//implicit return
  
//above we are returning the number
//what to do if we wanted to return a object
const addTwo=(num1,num2) => ({username:"hitesh"})//you cant return the object as this so to return it you needed to rapp it with paranthesis
console.log(addTwo(3,4))

const myArray =[2,4,5,5,6]
// myArray.forEach(()=>{})
//myarray.forEach()

// If an arrow function immediately returns a value, we don’t need to write the return keyword. The return is implied if the only statement in the function is a value. If that value is an object, we need to wrap that object in parentheses for the implicit return to work.
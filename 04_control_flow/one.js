//if
if(true){
    //it exectue this phasee of if condition is true
}
//     const isUserloggedIn = true
//     if(isUserloggedIn){

// }
// = (aasigment operator)
//== it means we are checking if two variable are equal or not
// 3!=2(true)
// <,><=,>=,==,!=,===
// (triple equal type bhi  check karta hai apka )
// if(2 === "2"){//fasle not run this log 
//     console.log("executed");
    
// }
// if(3!=2){// this log successfully
//     console.log("executed");
    
// }

// const isUserloggedIn =true
// const temperature =41
// if(temperature === 41){
//     console.log("less than 50");
    
// }else{
// console.log("temperature is greater than 50"); 
// }

// console.log("Executed");//it always execute beacause its outside of if

// const score = 200
// if(score >100){
//     let power ="fly"
//     console.log(`user Power: ${power}`);
    
// }
// console.log(`User power: ${power}`);//power is not defined here

// const balance =1000
// //implicit scope (it has scope hamne maan liya)
// // ye ak line me hei execute hota hai 
// if(balance > 500) console.log("test"),console.log("test2")//it not a good practice to use this syntax of comma(ye bhaut  immature code hai koi apko recommend nhi karega ayesa syntax use krne ko )
//company will give back this code to you and tell you to rewrite this code

//Nesting if else
//  const balance=1000;
//  if(balance < 500){
//     console.log("less than 500");
    
//  }else if(balance < 750){
//     console.log("less than 750");
    
//  }else if(balance < 900){
//     console.log("less than 900");
    
//  }else{
//     console.log("less than 1200");
    
//  }

 const isUserloggedIn =true
 const debitCard = true
 const loggedInFromGoogle = false 
 const loggedInFromEmail = true

 if(isUserloggedIn && debitCard){
    console.log("Allow to buy courses");
    
 }
if(loggedInFromGoogle ||loggedInFromEmail){
    console.log("User logged in");
    
}
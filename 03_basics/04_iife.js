// Immediately Invoked Function Expressions (IIFE)

// (function chai(){
//     console.log(`DB CONNECTED`);
    
// })()//it run successfully

//()()//1st is paranctesis is for function defination  and 2nd () is for function execution

(function chai (){//this chai function call as named iife
  console.log(`DB CONNECTED`);
  
})();
//yha par function ko end karne ke liye explicitily hamko semicolon laga na padha ki ye end ho paye or further code execute hopye

((name) =>{
    //its a simple iffe
  console.log(`DB CONNECTED TWO ${name}`);
  
})('Aviral')
// global scope ke pollution se problem hoti hai, kayi bar to us global scope ke, jo variables hai ya jo bhi waha declaration hai, usko hatane ke liyeh hamne iife ka use kiya
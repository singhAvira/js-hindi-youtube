//singleton
//Object.create(used to create singleton object)

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Aviral",
    "full name": "Aviral Singh",
    // mySym:"mykey1",//not good practice
    [mySym]:"mykey1",
    age:15,
    location:"jaipur",
    email:"aviral@123.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser["mySym"]);//string as output but we wanted symbol as a datatype

// console.log(JsUser[mySym]);

JsUser.email = "AViral@chatpt.com"
//we can also lock the value in the object by use of freez
// Object.freeze(JsUser)
JsUser.email = "aviral@microsocft.com"//these values do not propogate kyuki hamne value me freeze kar diya hai
// console.log(JsUser);

//function in Object
JsUser.greeting = function(){
    console.log("hello Js user");
    
}
JsUser.greeting2 =function(){
    console.log(`Hello Js user, ${this.name}`);
    
    //to reference the name in the object of Jsuser(to get this we covert it from string to backtiks)its called a string interpulation
    
}
// console.log(JsUser.greeting);

// console.log(JsUser.greeting());
console.log(JsUser.greeting2());

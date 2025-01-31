//truthy and falsy values concept
// const userEmail ="Aviral@gmail.com"
// const userEmail =""//dont have user email
const userEmail =[]//empty array (it bhave as true)
if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
    
}

//falsy values(means kin kin values ko false hei assume kiya jata hai)there are different falsy values

//in saari values ko false hei mana jata hai
// false,0,-0,BigInt 0n,"",null,undefined,NaN


//truthy values(diff truthy values)
// "0",'false'," ",[],{},function(){},

// if(userEmail.length === 0 ){
//     console.log("Array is empty");
    
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
    
// }

//Nullish Coalescing Operator (??): null undefined
//this operator is mainly used for null and undefined
//ye basically kam kya karta hai = ki agr null value aayi hai too uski safety check krde
let val1;
//val1 = 5 ?? 10 print 5
// val1= null ?? 10 //print 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);
//it is basically a fallback hai agr error aye to ham usko kis trah se handle karre ya fir error ki jagh ham koi value assign karna chahye to vo value kaise assign hoo


//terniary operator 
//condition ? true : false

const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");
;

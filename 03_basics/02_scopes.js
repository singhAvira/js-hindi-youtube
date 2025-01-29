//var c=300
let a=300

if(true){
    let a=10
    const b=20
    console.log("Inner: ",a);
    
}
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// console.log(a);
// console.log(b);
// console.log(c);


//Nested Scope
function one(){
    const username = "hitesh"

    function two(){
        const website ="youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username ="Aviral"
    if(username ==="Aviral"){
        const website = " youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
}
// console.log(username);(not in scope)


//+++++++++++++++++ Interesting ++++++++++++
console.log(addone(5))
function addone(num){
    return num +1
}

// addone(5)

addTwo(5)//it gives error (cannot access addtwo before intialization)
const addTwo = function(num){
    return num2 +1
}
// addTwo(5)

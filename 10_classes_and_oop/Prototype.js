// let myName = "hitesh   "
// let mychannel = "chai    "

// console.log(myName.trueLength);

let myHero=["thor","spiderman"]

let heroPower ={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

//hiteshPower.hitesh()
myHero.hitesh();
myHero.heyHitesh();
//heroPower.heyHitesh()//it dont have the access to heyHitesh because it declare in array

//inheritance 

const User ={
    name:"chai",
    email:"chai@gmail.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport ={
    isAvailable: false
}
const TASupport={
  makeAssigment:'Js assignment',
  fullTime:true,
  __proto__:TeachingSupport
}

Teacher.__proto__= User//outdated approach

//modren Syntax
Object.setPrototypeOf(TeachingSupport,Teacher);//now Teachingsupport access the propeerties of teacher

let anotherUsername = "chaiaurcode   "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"AViral".trueLength()
"ChandKiran".trueLength()
const name="aviral"
const repoCount=80;

// console.log(name+repoCount+ " value");not recommened to use this syntax(becasuse its outdated)
//string is a object
console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`);//always use this approach to add two string 
const gamename = new String('hetechh-hc-com');

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);//8

//all prototype methods or function
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(indexOf('t'));

const newString = gamename.substring(0,4);
console.log(newString);//if you give the negative value to substring it will ignore it and start from zero

const anotherString = gamename.slice(-8,4)//we so give negative value in slice
console.log(anotherString);

const newStringOne= "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https:hitesh.com/hitesh%20choudhry"

console.log(url.replace('20%', '-'))

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))//false

console.log(gamename.split('-'));//split the string in subarray form



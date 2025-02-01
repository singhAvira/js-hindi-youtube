//for of loop

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
    
}

const greeting = "Hello world"
for (const greet of greet//console.log(`Each char is ${greet}`);
    
}

//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('FR', "France")

// console.log(map);

for (const [key,value] of map ) {
  //console.log(key,':-',value); 
}

const myObject = {
    game1:'Nfs',
    game2:'Spiderman'
}

//this above object is not iterable
// for (const [key,value] of map) {
//    console.log(key,':-',value);
    
// }


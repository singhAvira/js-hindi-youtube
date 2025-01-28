const marvel_heros= ["thor","ironMan","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//to accesss flash value

// const allHeros = marvel_heros.concat(dc_heros)//concat return the new array which has all heros in it
// console.log(allHeros);

//spread operator
//spread(some pepole used spread to merge two array  )
 const all_new_heros = [...marvel_heros,...dc_heros]
//  console.log(all_new_heros);
 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);//all values are spread out 


console.log(Array.isArray("Hitesh"))//check if hitesh is array it reply with false(its not an array)
console.log(Array.from("Hitesh"))//use from to convert it into array
console.log(Array.from({name: "hitesh"}))//interesting case for onterview(it gives you empty array )because you need to tell to make array of keys or values of given object

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
//[ 100, 200, 300 ]
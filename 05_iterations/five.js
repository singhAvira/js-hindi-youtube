const coding =["js","ruby","java","c++"]
// coding.forEach(function (val){
//     console.log(val);
    
// })

//arrow function in forEach
// coding.forEach( (item) =>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

coding.forEach( (item,index,arr) =>{
    console.log(item,index,arr);
    
})

const myCodig =[
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"jv"
    },
]
myCodig.forEach( (item) =>{
    console.log(item.languageName);
    
})
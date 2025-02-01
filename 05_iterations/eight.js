//reduce in javascipt

const myNums = [1,2,3]

//reduce by using simple function
// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
    
// },0)

//Now by use of arrow function

// const myTotal = myNums.reduce( (acc,curr) => acc+ curr,0)

// console.log(myTotal);

const shoopingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price: 5999
    },
    {
        itemName:"data science course",
        price: 13000
    },
]
const priceTopay = shoopingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceTopay);


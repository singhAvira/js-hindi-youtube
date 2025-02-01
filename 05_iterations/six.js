//const coding =["js","ruby","java","c++"]

// coding.forEach( ()=>{
//     //console.log(item);
//     return item
// })//gives undefined as o/p
//console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) => num >4)//parentthesis hai to return likhne ki koi jarurat nhii


// const newNums = myNums.filter( (num)=>{
//    return  num > 4
// })//currely braces(scope open karte hai tab apko return likhna padega ) me apko return keyword usse krna padega

// const newNums = []

// myNums.forEach( (nums) =>{
//     if (num >4) {
//        newNums.push(num) 
//     }
// })

// console.log(newNums);

const books =[
    { title:'Book One',genre:'Fiction',publish:'1981',edition:2004

    },
    { title:'Book Two',genre:'Non-Fiction',publish:'1992',edition:2008

    },
    { title:'Book three',genre:'History',publish:'1999',edition:2007

    },
    { title:'Book four',genre:'Non-Fiction',publish:'1989',edition:2010

    },
    { title:'Book five',genre:'Science',publish:'2009',edition:2014

    },
    { title:'Book Six',genre:'Fiction',publish:'1987',edition:2010

    },
    { title:'Book seven',genre:'History',publish:'1986',edition:1996

    },
    { title:'Book Eight',genre:'Science',publish:'2011',edition:2016

    },
    { title:'Book Nine',genre:'Non-fiction',publish:'1981',edition:1989

    },
    
];

let  userBooks = books.filter( (bk)=> bk.genre =='History')

 userBooks = books.filter( (bk)=>{
    return bk.publish >=1995 && bk.genre ==="Histroy"
})
 
console.log(userBooks);

let myDate = new Date()
console.log(myDate.toString());//here myDate is a object
// console.log(typeof myDate);//object

// console.log(myDate.toDateString());//print the current date Mon Jan 27 2025
// console.log(myDate.toISOString());//2025-01-27T16:42:45.393Z
// console.log(myDate.toJSON());//2025-01-27T16:42:45.393Z
// console.log(myDate.toLocaleDateString());//1/27/2025
// console.log(myDate.toLocaleString());//1/27/2025, 4:42:45 PM
// console.log(myDate.toLocaleTimeString());//4:42:45 PM
// let myCreatedDate = new Date(2025,0, 25)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2025,0, 25 , 5 , 3)
// console.log(myCreatedDate.toLocaleString());//1/25/2025, 5:03:00 AM
// let myCreatedDate = new Date("2025-01-23")//yy-mm-dd
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("01-12-2025")
console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

//time stamp in javascript
//always make comparison in millisecond
let myTimeStamp = Date.now()//also used this new Date()
// console.log(myTimeStamp);//1737997656589
// console.log( myCreatedDate.getTime());//1736640000000

// console.log(Date.now()/1000);//it give the decimal value of Seconds Date.now()/1000
//so we used Math.floor
// console.log(Math.floor(Date.now()/1000));//give value in second 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:
})//use to customize the format of locale string (bhaut jagah kaam aata hai or bhaut interesting hai)
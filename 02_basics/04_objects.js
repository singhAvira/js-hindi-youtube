//const tinderUser = new Object(); //its a singleton(constructor) Object

const tinderUser = {}//its a non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Aviral",
            lastname: "Singh"
        }
    }
}
//how to access these value

// console.log(regularUser.fullname.userfullname.firstname);

//to combine two or more objects in single objects(use assign)
const obj1= {1:"a", 2:"b"}
const obj2= {3:"a", 4:"b"}
const obj4= {5:"a", 6:"b"}
//const obj3={obj1,obj2}not used this because it save it as an new objects has another obejct obj1 and obj 2
// const obj3 = Object.assign({},obj1,obj2,obj4)

//3rd approach used spread
const obj3 = {...obj1,...obj2}
// console.log(obj3);

//array of object
const users = [
   {
    id: 1,
    email:"h@gnail.com"
   },
   {
    id: 1,
    email:"h@gnail.com"
   },
   {
    id: 1,
    email:"h@gnail.com"
   },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//it gives keys o/p in array form
//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true (its their in the tinderuser)
// console.log(tinderUser.hasOwnProperty('isLogged'));//false

//object de structure 
const course = {
    courname: "js in hindi",
    prize: "999",
    courseInstructor:"hitesh"
}
//course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor}= course;//also change the name of courseintsructor to instructor
console.log(instructor);

//it just a seintatical sugar(to extract value from object)
//console.log(courseInstructor);


//APi in javascript
//jab bhi apko apna kam kisi or ke sar par daal dena hai too usko Api's kehte hai

// {
//     "name":"Aviral",
//     "courname":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]
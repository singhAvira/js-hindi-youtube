// //ES6

// class User{
//    constructor(username,email,password){
//     this.username = username;
//     this.email =  email;
//     this.password = password
//    }
//    encryptPassword(){
//     return `${this.password}abcd`
//    } 
//    changeUsername(){
//     return `${this.username.toUpperCase()}`
//    }
// }
// const chai = new User("chai","chai@gamil.com","1234")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//bheind the scene
function User1(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User1.prototype.encryptPassword = function(){
    return `${this.password}acdv`
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1("tea","tea@gamil.com","1234");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
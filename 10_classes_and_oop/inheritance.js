class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNMAE is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email= email
        this.password =password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai","chai@gmail.com","123")
chai.addCourse();
chai.logMe();//it has this function access
const masalChai = new User("masalaChai")
masalChai.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
class User{
    construtor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `1234`;
    }
}

//const Aviral = new User("Aviral");
//console.log(Aviral.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}
const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe();
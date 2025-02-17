const user ={
    username:"aviral",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        //console.log("Got user details from database")
        //console.log(`Username: ${this.username}`);
        //console.log(this)//give the current context as o/p
    }
}
//console.log(user.username)
//console.log(user.getUserDetails())
//console.log(this)//{}

function User(username,loginCount,isLoggedIn){
    this.username = this.username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}
const userOne = new User("aviral",12,true)
const userTwo = new User("chaiaurcode",11,false)
console.log(userOne);
console.log(userTwo);

// note :ap jab new keyword use karenge to sabse phele ak empty object creat hota hai jsiko instance bola jata hai
//2step iss step me apka ak constructor function call hota hai new keyword ke karan ab ye kya karta hai ki jinte bhi uske andar arguments wagera hai vo uske andar pack krta hai or apko de deta hai

//3 step jo apka ye this keyword hai matlb jo bhi apne arrguments likhe hai vo uske andar inject ho jata hai 
//4step me apko mil jata hai fucntion ke andar
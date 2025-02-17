const User ={
    _email:'h@hc.com',
    _password:"acds",

    get email(){
        return this._email.toUpperCase()
    },
    set emial(value){
        this._email = value
    }
}
const tea = Object.create(User)
console.log(tea.email);
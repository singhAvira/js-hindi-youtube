const promiseOne = new Promise(function(resolve,reject){
    //DO an async task
    //DB calls ,cryptography,network
    setTimeout(function(){
        console.log('Asyn task is complete')
        resolve()
    },1000)

})

//promise consumed
promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,rejcet){
    setTimeout(function(){
        console.log("Asyn tast 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Aysn 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"Avieal@singh.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    console.log(user.email);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Aviral",password:"1234"})
        }else{
            reject('ERROR:SOmething went wrong')
        }
    },1000)
})

promiseFour.
then((user)=> {
  console.log(user);
  return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("this promise is either resolved or rejected"))

const promiseFive =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
           resolve({username:"javscipt",password:"1234"})
        }else{
            reject('ERROR:js went wrong');
        }
    },1000)
 });

//promise consume using asyn await
async function consumePromiseFive(){

    try {
      const response = await promiseFive
      console.log(response)  
    } catch (error) {
      console.log(error);  
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/users')
//        const data = await response.json()
//        console.log(data)
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=> {
    return response.json()
})
.then((data)=>{
 console.log(data);
})
.catch((error)=>console.log(error))
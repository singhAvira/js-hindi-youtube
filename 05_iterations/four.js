const myObject = {
    js: 'javascript',
    cpp:'C++',
    rb:"ruby",
    swift: "swift by apple"
}
//to iterate we use forin loop
for (const key in myObject) {
    //console.log(key);
    console.log(`${key} shorcut is for ${myObject[key]}`);
    
}
const programming = ["js","rb","py","java","cpp"]
for(const key in programming) {
 console.log(programming[key]);
 //to rpint the value of array 
 //console.log(key);//it print o 1 2 3(keys of array)
 
}
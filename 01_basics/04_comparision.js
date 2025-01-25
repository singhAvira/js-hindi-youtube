// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2 != 1);

// console.log("2"> 1);//true (convert "2" into number )
// console.log("02" >1);//true;
//iss tarh ke conversion(comparison) apko kabhi bhi confusion me daal sakte hai and we always avoid these types of comparisonso we can write clean code
console.log(null >0);//false
console.log(null == 0);//false
console.log(null >=0);//true 
//the reason is that an equality check == and comparisons ><>=<= work differently 
// comparison convert null to a number ,treating it as 0 thats why null>=0 is true;

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

//strict check:IT does not convert the (the given no.) also check its datatypes 
//===
console.log("2" === 2);
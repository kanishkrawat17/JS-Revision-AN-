// setTimeout() , setInterval(), 

const { fstat } = require("fs");


// setTimeout(()=> {
//     console.log("this will run after 2 sec")
// }, 2000);

// let id = setInterval(()=>{
//     console.log("This will run continuously");
// }, 2000);

// setTimeout(()=>{
//     clearInterval(id);
// }, 4000);




// try and catch block
let fs = require("fs");
try{
    fs.readFileSync("a.txt");
} catch (error){ // error is an object  .. ENOENT: no such file or directory, open 'a.txt'
    console.log(error.message)
}

// -------------------------------------------------------------------

// Array Prototype

Array.prototype.myFunction = function(){
    console.log(this); //[ 1, 2, 3, 4, 5 ]
    let sum = 0 ;
    for(let i = 0 ; i < this.length ; i++){
        sum += this[i];
    }
    console.log(sum);
}

let array = [1,2,3,4,5];
array.myFunction();


// ------------- map,filter,reduce--------------
// reduce :
let ansReduce = array.reduce(function(acc , curr){
    acc += curr;
    return acc;
}, 0);

console.log(ansReduce);

// map :
let ansMap = array.map((x)=>{
    return 2*x;
})
console.log(ansMap);

// filter:
console.log(array.filter ((val)=>{
    return val > 3;
}))


// ------------------Polyfill---------------------

// Implementation of filter function :
Array.prototype.isEven = function (isEvenFilter) {
  console.log(this);
  let ans = [];
  for(let i  = 0 ; i < this.length ; i++){
    if(isEvenFilter(this[i])){
        ans.push(this[i])
    }
  }
  console.log("myFilter");
  console.log(ans);
    
}

array.isEven(function(elt){
    return elt % 2 == 0;
});
// -------------------------------------------------------

// let ans = [];
// function isEven( array){
//     for(let i = 0 ; i < array.length ; i++){
//         if(array[i] % 2 == 0){
//             ans.push(array[i]);
//         }
//     }
//     console.log(ans);
// }

// isEven(array);



// ---------------------null vs undefined vs undeclared------------------------------
let a ;
console.log(a) // undefined


let b  = null;
console.log(b); // null is a value which has nothing
console.log(typeof b); //   null is an object 

c = 4;
console.log(c); // this is present in global space , its attached to global object 
//  at global level this points to window object.


// -------------------------Shallow Copy vs Deep Copy----------------------------------

// check the github repo





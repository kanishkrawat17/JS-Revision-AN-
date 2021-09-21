// this keyword is used in 4 different ways :


// ----------------- Way-1 ------------node.js non-strict mode ------------------

// console.log(this); // at global level , this = empty object {}

// function f(){
//     console.log(this);  // at functional level in global area , this = global object
// } f()

// let obj = {
//     name : " rahul ",
//     f : function (){
//         console.log(this); // direct function in an object , this =  obj
//     }
// }
// obj.f();

// let obj1 = {
//     name :"rahul",
//     f : function (){
//         function f1(){
//             console.log(this); // indirect function in an object , this = global object
//         }
//         f1();
//     }
// }
// obj1.f(); 


// ----------------- Way-2------------node.js strict mode ------------------

// "use strict"; // this is to be used to use in strict mode in node.js

// console.log(this); // this = {}

// function f1(){
//     console.log(this); // this = undefined
// }
// f1();

// let object = {
//     name  : "rahul",
//     fun : function (){
//         console.log(this); // this = object
//     }
// }
// object.fun();

// let object2 = {
//     name  : "rahul",
//     fun : function (){
//         function x(){
//             console.log(this); // this = undefined
//         }
//         x();
//     }
// }
// object2.fun();

// ----------------- Way-3------------browser non-strict mode ------------------

// console.log(this); // this = window(global object)

// function fun2 (){
//     console.log(this); // this = window(global object)
// }
// fun2();

// let object3  =  {
//     name : "rahul",
//     fun : function (){
//         console.log(this); // this = object3
//     }
// }
// object3.fun();

// let object4  =  {
//     name : "rahul",
//     fun : function (){
//         function y (){
//             console.log(this); // this = window(global object)
//         }
//         y();
//     }
// }
// object4.fun(); 

// ----------------- Way-4------------browser strict mode ------------------

"use strict;"  // this is to be used to use in strict mode in browser

console.log(this); // this = window (global object)

function fun(){
    console.log(this); // this = window (global object)
}
fun();

let obj = {
    name : " rahul",
    f : function(){
        console.log(this); // this = obj
    }
}
obj.f(); 

let object = {
    name : " rahul",
    f : function(){
        function y (){
            console.log(this); // this = window(global object)
        }
        y();
    }
}
object.f(); 
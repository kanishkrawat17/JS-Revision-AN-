// Concept of Argument
// ex-1
function f1(a,b){
    console.log(arguments); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
    return a+b;
}
console.log(f1(1,2,3,4,5,6)); //3


// ex-2
// function f (flag){
//     // console.log(arguments); //[Arguments] { '0': 'a', '1': 2, '2': 4, '3': 3 }, will give array like object on which length property can be applied unlike proper js obj
//    if(flag  === "m"){
//        let mul = 1;
//     for(let i = 1 ; i < arguments.length; i++){
//         // console.log(arguments[i]);
//         mul *= arguments[i];
//     }
//     return mul;
//    } else {
//     let sum = 0;
//     for(let i = 1 ; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum;
//    }
// }
// console.log(f("a",2,4,3));

// -----------------------------------------------------------------------------------------

// replace: it starts from starting from the string and replace the first occurence of the word
// and does not change the original string
// ex-1
let str = "new moon is good";
let newStr = str.replace("moon", "sugar");
console.log(newStr);// new sugar is good 
// ex-2
let str1 = "new moon is good moon" ;
let newStr1 = str1.replace("moon", "sugar");
console.log(newStr1); // new sugar is good moon    

// --------------------------------------------------------------------------------------

// String cant be changed hence immutable
let s = "abc";
let s1= "ABCF";
let s3 = "       kuch hai bc    ";
s[1] = "m";
console.log(s); //abc ,  String cant be changed hence immutable
console.log(s.charCodeAt(0)); // 97 -> ASCII code can be find using charCodeAt(idx) 
console.log(s.toUpperCase()); // ABC 
console.log(s1.toLowerCase()); // abcf
console.log(s3); //       kuch hai bc
console.log(s3.trim()); //kuch hai bc -> will remove spaces from string s3

// ---------------------------------------------------------------------------------------

// split -> use to convert a string into an array
let names = "rahul ramesh raju babuRao";
let namesArr = names.split(" ");
console.log(namesArr);


// ---------------------------------------------------------------------------------------

// ArrayMethods:
// * push() & pop() - > this changes the original array
let arr = [1,2,3,4];
arr.push(4);
console.log(arr); //[ 1, 2, 3, 4, 4 ]
arr.pop();
console.log(arr);//[ 1, 2, 3, 4 ]

// join() -> its the opposite of split() -> converts an array to a string based onjoining string
let i = arr.join(1); 
console.log(i);//1121314
console.log(arr); // [ 1, 2, 3, 4 ] -> doesn't chamge the original array

// shift()-> removes one elt from start of an array & changes the original array.
arr.shift();
console.log(arr); // [2, 3, 4 ]
// unshift()-> add ans elt in start of array & changes the original array.
arr.unshift(3);
console.log(arr);//[ 3, 2, 3, 4 ]

// slice




// create a function which has a local array in closure , this function will return another function, which will take 2 arguments 
// 2nd being optional such that if returned function is f -> f("insert", num)


let array = [1,2,3,4];
function f1(){
    function f2(operation, val){
        if(operation === "insert"){
            array.push(val);
            return array;
        } else if(operation === "remove"){
            array.shift();
            return array;
        } else {
            return array;
        }
    }
    return f2;
}

console.log(f1()("insert", 45));
console.log(f1()("remove"));
console.log(f1()("show"));



// Read article truthy and falsy values : https://developer.mozilla.org/en-US/docs/Glossary/Truthy



// JSON.stringify(JSobject) -> it converts the JS object into a string 
// JSON.parse(stringWhichContainsObject) -> it converts a string which contains JS object back into JS object

let object = {
    name : "rahul",
    age: 30,
}
console.log(object); // { name: 'rahul', age: 30 }
let stringifyObj  = JSON.stringify(object); 
console.log(stringifyObj); // {"name":"rahul","age":30}
console.log(JSON.parse(stringifyObj)); // { name: 'rahul', age: 30 }

let fs = require("fs");
fs.writeFileSync("test.txt", JSON.stringify(object)); // data will go into file after getting converted into string
let buffer = fs.readFileSync("test.txt");
let stringValue = buffer.toString();
console.log(JSON.parse(stringValue));



// --------------------------------------------------------

// Flatten an object -> asked in 8-12 lakhs

// Falttened object-> no nesting                            //Normal Object
{                                                        let obj =  {         
    Company: 'GeeksforGeeks',                               Company: 'GeeksforGeeks',  
    Address: 'Noida',                                       Address: 'Noida',
    contact: -999999908,                                    contact: -999999908,
    'mentor.HTML': 'GFG',                                   mentor :{ 
    'mentor.CSS': 'GFG',                                            HTML : 'GFG',
    'mentor.JavaScript': 'GFG'                                       //CSS : 'GFG'
                                                                    //JavaScript  : "GFG"
}                                                                }                                            
                                                            }


// In javascript 5/2 = 2.5, so to convert it into a Number value we can do parseInt(5/2), this will be 2;


    
 
 



// //  promises - it's a wrapper around a task which on completition gives a value.
// or  in Javascript, a Promise is an object used as a proxy for a value not yet known.

// // let promiseObj = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve("work is done");
// //         reject("kaam nai hua")
// //     }, 3000);
// // })
// // .then(function(resolve){
// //     console.log(resolve);
// // }).catch(function(err){
// //     console(err)
// // });





// async function f () {
   
//     let promiseObj = new Promise( (resolve, reject)=> {
//         setTimeout(() => { 
//             resolve("work is done");
//             reject("kaam nai hua")
//             }, -1);
//     })
//     let pr = await promiseObj;
//     console.log(pr);

// }f()
// console.log(2);


// // async function f () {
// //     console.log(1);
// // }
// // f()
  
// ---------------------------------------------------------------------------------

// let promise1 = fetch("https://jsonplaceholder.typicode.com/posts");
// let promise2 = fetch("https://jsonplaceholder.typicode.com/users");

// // Promise.all -> takes an array of promises
// //gives back a promise
// //which resolves when all the promises in the array resolves

// let promiseAll = Promise.all([promise1, promise2]);
// promiseAll.then(function(arrrayVal) {
//     console.log(arrrayVal);
// })
//when the returned promise from promise.all resolves it
// contains an array with values of the promises passed to promise.all

// ---------------------------------------------------------------------------------


let promise = new Promise(  (resolve, reject) => {
    setTimeout(function () {
        resolve("value aagyi");
        reject("error");
        // console.log("okay")
    }, -1);
   }
)

promise.finally(()=>{
    console.log("finally before thens")
})
promise
.then(res=>console.log(res))
.then(res=>console.log(res))
.catch(err=>console.log(err))
.finally(()=>{
    console.log("finally after thens")
})
//consumer => then; catch; finally
// Reference Article on promises : https://lucymarmitchell.medium.com/using-then-catch-finally-to-handle-errors-in-javascript-promises-6de92bce3afc



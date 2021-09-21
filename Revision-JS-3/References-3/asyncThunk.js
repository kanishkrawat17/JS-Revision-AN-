
// A thunk is just a function which delays the evaluation of the value.
// The thunk function doesn’t take any arguments and gives the value whenever you invoke the thunk.

// function subtract (x, y){
//     return x-y;
// }

// // console.log(subtract(3,2));

// const thunk = function (){
//      return subtract(3,2);
// }
// console.log(thunk())

// -----------------------------------------------------------------------------------------------------
// Async Thunk -> Sometimes we need to make network requests in such case we need to use asynchronous thunks.
// If you know about redux state management library which uses 
// the asynchronous thunks to delay the actions to dispatch.
// In the below code we are not calling the getData function immediately we only 
// call the getData function whenever the data is available from the API endpoint.

// function fetchData (getData){
//     let data = fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(json){
//          getData(json);
//     })
// }

// let asyncThunk = function(){
//     return fetchData(function getData(data){  // // if we put return before fetchData or not it works fine
//         console.log(data);
//     });
// }

// asyncThunk();
// -----------------------------------------------------------------------------------------------------

// let rooElt = document.querySelector(".root");
// let btn = document.createElement("button");
// btn.classList.add = "btn";
// btn.innerHTML = " Fetch data";
// rooElt.append(btn);
// console.log(btn)


// btn.addEventListener("click", function () {
//     asyncThunk();
// })

// function fetchData (showData){
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(function(res){
//         return res.json();
//     })
//     .then(function (json) {
//         showData(json);
//     })
// }
// let asyncThunk  = function () {
//      fetchData (function showData (data){ // if we put return before fetchData or not it works fine
//         rooElt.innerHTML += `<div> 
//             <h2> ID : ${data.id}</h2>
//             <h1> Title : ${data.title }</h1>
//             <div> UserID : ${data.userId}</div>
//         </div>`;
//         console.log(data);
//     })
// }






// a small example to tell how this big code is working above 

 function x ( y ) {
        let a  = [1,2,3];
        y(a);
    }

    

let thunkTest = function(){
    x ( function y(data) {   // y is call back function
        console.log(data)
    }) 
}

thunkTest()





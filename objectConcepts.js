// Js objects

const person = {
    "firstName": "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  let key = Object.keys(person);
  console.log(key) ; // will give an array of keys : [ 'firstName', 'lastName', 'age', 'eyeColor' ]
  for(let i = 0 ; i < key.length ;i++){
      console.log(person[key[i]]);
  }
  console.log(Object.keys(person).length); // 4

  console.log(person.firstName); //4
  console.log(person["firstName"]); // John is output , can't use person[firstName]
  console.log(person.age); //50 is output , 

  for(let key in person){
      console.log(key +" : "+person[key]); // we cant use person.key bcs it will search for key in object like for particular name as key hich uit willl not find

  }


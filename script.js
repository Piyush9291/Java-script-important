// Question

//What are the differences between var, let, and const?

// var a = 10;
// a =  "piyush";
// console.log(a)

// if(true){
//     var a = 10;
// }
// console.log(a)


// let b = 10;
// c = 20;
// console.log(c)

// if (true) {
//     let y = 20;
//   }
//   console.log(y); 
  

// const a = 15;
// a = 20
// console.log(a)


// if (true) {
//     const z = 30;
//   }
//   console.log(z); 


//Question 2
// What is the difference between undefined and null?

// let x;                              {isma hum varible to pass karte hai likin usma koy value pass nhi karte hai isliye ya undefined hota hai}
// console.log(x) // undefined

// let b = null
// console.log(b)  // null            {ism hum varible pass karte hai likin varible ki value hoti hai empty}

// let z;
// console.log( typeof z) // undefined

// let a = null; 
// console.log(typeof a)// object


// Question 3
// How can you check if a variable is an array in JavaScript?

// let arr = [1, 2, 4, 5];
// console.log(Array.isArray(arr)); true 

// let notarry = "piyush";
// console.log(Array.isArray(notarry))  false


// Question 4
// What are template literals, and how do they differ from regular strings?

// let name = "piyush"
// let age = "21"
// // console.log("my name is" + (name + age))
// console.log (`my name is ${name} and my age is ${age}`)

//  Question 5
// How do you convert a string to a number in JavaScript?

// let str =  "10"
// //let num = Number(str)   {the number fuction convert the string to a number}
// console.log(num)


// let str2 = "20"
// let num2 = +str2   {the unary plus ( +) opertor is a shoorthand way to convert a string to a number it work similarly to number but is shorter and faster}
// console.log(num2)

// Question 6
// What’s the difference between == and ===?

// == (Loose Equality)

// console.log(5 =="5");   
// console.log(null == undefined);
// console.log(0 == false);    

// === (Strict Equality

// console.log(5 === "5");   (diffrent types : number vs string)
// console.log(null === undefined); (different types)
// console.log(0 === false);  (different types : number vs boolean)


//Question 7
//How can you swap two variables without using a third variable?

//1. Using Arithmetic Operations

// let a = 3
// let b = 2;

// a = a + b; 
// console.log(a)  // (3 + 2)

// b = a - b;         
// console.log(b)  // (5 - 2)

// a = a - b;            
// console.log(a) // (5 - 3)

// console.log(a)
// console.log(b)


// Question 8
// What is the use of the typeof operator in JavaScript?

// let name = "piyush"
// console.log(typeof name)

// var age = 21;
// console.log(typeof age)

//Question 9
//How does JavaScript handle type coercion?

//When a non-string value is added to a string, JavaScript converts the non-string value to a string.

// let name = "my name is piyush  my age is " + 20;
// console.log(name)

// let result = "200" - 100;
// console.log(result);

// Question 10
// What are falsy values in JavaScript?

// 1 false
// 2 0
// 3 -0
// 4 ""
// 5 null
// 6 nan

//What is a higher-order function in JavaScript?
// How do closures work in JavaScript?

//Question 11

1 //Takes one or more functions as arguments, or
2 //Returns a function as its result

// map fumction

// const number = [2,4,6,8]

// const double = number.map(function(num){   // map is higher order function that takes a function as an arrgument
//     return num * 7                        // map function array ke andar loop karta hai or ek new array banata hai 
// })

// console.log(double)

// filter function
// const numbers = [ 1,2,3,4,5]

// const evennumber =  numbers.filter((num) => {
//        return num % 2 === 0;
// })

// console.log(evennumber);


// const numbers = [1,2,3,4,5,6]

// let ans = numbers.find((num) => num === 4);
// console.log(ans);

// const numbers = [1,2,3,4,5,6]

// let ans = numbers.findIndex((num) => num === 4);
// console.log(ans);


// const numbers = [1,2,3,4,5]
// let ans = numbers.forEach((num) => console.log(num))


// const number = [ 1,2,3,4,5]
// const newarry = []
// let ans = number.forEach((num) =>{
//      newarry.push(num * 2)
// })

// console.log(newarry);
 

// let ans = numbers.map((num) =>{
//     return num * 3  
// })
// console.log(ans)

// Question 12
// How do closures work in JavaScript?

// function main () {
//     const name = "piyush"

//     function callmyname () {
//              console.log(name)
//     }
//     callmyname();
// }
// main();

// function adder(num){
//           function add(b){
//               console.log(num + b)
//           }
//           return add;
// }

// const add = adder(5)
// add(10)
// add(15)


// object & Array

// How can you copy an object in JavaScript without referencing the original object?
// What is destructuring, and how is it used with arrays and objects?

// Question 13
// How can you copy an object in JavaScript without referencing the original object?

//Spread Syntex

// const details = {
//     nmae : 'piyush' ,
//     lastname : 'bora',
//     age : 20 ,
// }
// const copy = {...details}


// Question 14
// // What is destructuring, and how is it used with arrays and objects?
                             
                     //Destructuring with Arrays

//You can skip elements by leaving blank spaces in the destructuring assignment.

// const number = [10,20,30,40]
// const [ first,second, third,four] = number

// console.log(first)
// console.log(third)


//   You can use the rest operator (...) to gather the remaining elements into a new array.

// const number = [10,20,30,40]

// const [first , second , ...rest] = number
// console.log(first)

 
                       //Destructuring with Objects

// const person  = {
//      name : 'piyush' ,
//      age : 20 ,
//      city : "New delhi" 
// };

// const{name ,age , city} = person;
// console.log(name)
// console.log(age)
// console.log(city)


//You can rename variables while destructuring an object by using the syntax propertyName: newVariableName.

// const person = { name: 'Alice', age: 25, city: 'Wonderland' };

// const { name: personName, age: personAge, city: personCity } = person;

// console.log(personName);  
// console.log(personAge);  
// console.log(personCity);  



// const person = {
//     name: 'piyush',
//     address: {
//       city: 'newdelhi',
//       zip: '11043'
//     }
//   };
  
//   // Destructure nested object
//   const { name, address: { city, zip } } = person;
  
//   console.log(name)
//   console.log(city); 
//   console.log(zip);  
  
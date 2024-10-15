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
  

// Question 15
// How do you add a method to an object in JavaScript?  

// ==> You can add a method directly as a property when defining the object using the object literal syntax.

// const person = {
//     name : "piyush",
//     lastname : "singh",
//     age : 20 ,
//     add : function(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`)
//     }
// }
// person.add()

        //    object constructor function

// function student(first , last , age , cls) {
//        this.firstname =  first ;
//        this.lastname = last;
//        this.age = age;
//        this.class = cls;
// }

// var student1 = new student("piyush" , "singh" , 20 , "collage")

// student1.address = "new delhi"

// student1.name = function(){
//     return this.firstname + " " +  this.lastname
// }

// console.log(student1.name())



//  Question 16
//How can you merge two or more arrays in JavaScript?

//Using the Spread Operator (...)

// const array1 = [1,2,3,4,5];
// const array2 = [6,7,8,9,10];

// console.log(...array1 , ...array2)

//1. Using the concat() Method

// const array1 = [1,2,3,4,5];
// const array2 = [6,7,8,9,10];

// const add = array1.concat(array2)
// console.log(add)


// Question 17
 //How do you loop through an object’s properties in JavaScript?

 // object key

//  const person = {
//     name: 'piyush',
//     age: 20,
//     city: 'NewDelhi'
//   };

//   Object.keys(person).forEach((i) => {
//     console.log(person[i])
//   })

// object value

// const person = {
//     name: 'piyush',
//     age: 20,
//     city: 'NewDelhi'
//   };

// let value = Object.values(person);
// console.log(value)


// Question 18
// Explain the concept of prototypes in JavaScript.

// function student(first,last,age){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
// }

// student.prototype.city = "New delhi"

// var student = new student('piysuh' , 'singh' , 20)
// console.log(student)

// Questiion 19
//What is the difference between for, for...in, and for...of loops?


//Question 20
//What is the difference between Array.prototype.map() and Array.prototype.forEach()?

// const arry = [1,2,3,4]

// const arry2 = arry.map( (num) =>{
//         return num * 2
// })

// console.log(arry2);

// const arry = [1,2,3,4]

// // arry.forEach((num) =>{
// //     console.log(num * num)
// // })


// const arry = [1,2,3,4]
// arry.forEach((num,index,array) =>{
//         array[index] = num*2;
// })

// console.log(arry);

//      Question 21
//What is the difference between for, for...in, and for...of loops?

// let arr = [2,3 ,4,5]

// for(let i=0; i<arr.length; i++){
//      console.log(arr * [i])
// }

// for(let x of arr){
//         console.log(x)
// }

// for( let x in arr){
//         console.log(x)
// }

// Quesdtion 22
// How does the switch statement work in JavaScript?

// let x = '2';

// switch(x){
//         case 2: 
//         console.log('number 2')
//         break;
//         case '2':
//         console.log('string "2"');
//         break;
// }

// let gread = 'A'

// switch(gread){
//         case 'A':
//         case 'B':
//         case 'C':
//                 console.log('pass')
//         break;
//         case 'D' :
//         case 'F' :
//         console.log('fail')
//         break;
//         default:
//         console.log('invalid grade')
// }


//Question 23
//how many typs of loops in javascript
// 1 while loop
// 2 do while loop
// 3 for loop

// while loop

// let counter = 1;

// while(counter <= 10){
//      document.write("piyush")
//      counter++;
// }

// let counter = 1;
// let sum = 0
// while(counter <= 100){
//      if(counter % 2 === 0){
//         sum = sum + counter
//      }
//      counter++;
// }

// document.write(sum)

// dowhile

// let counter = 1;

// do{
// document.write("piyush")
//   counter++;
// }while(counter <= 10)


// For loop

// for(let i=0; i<=10; i++){
//    document.write("piyush")
// }


// 24 Array destructuring

// let arry = ["piyush" , "singh" , "20"]

// let[name , lastname , age]=arry

// console.log(name);

// function arry(){
//         return ["piyush","singh",20]
// }

// let[name , lastname , age] = arry();
// console.log(age)


// 25 object destructuring

// let info = {
//         name : "piyush",
//         lastname : "singh ",
//         age : 20
// }

// let{name, lastname, age} = info;
// console.log(name)


// 26 set timeout 

//  let timeout = setTimeout(book , 5000)

// function book(){
//         alert("hi baby")
// }

// 27 set interval


// let timeout = setInterval(alarm , 1000)

// function alarm(){
//        console.log(" goodn moring")
// }

// let btn = document.getElementById("btn")
// btn.addEventListener("click" , () =>{
//     clearInterval(timeout);
// })


// 28 asyncronous event

// 1 callback
// 2 callbackhall
// 3 promises 
// 4   promises api


// callback 

// function fun (val){
//   console.log("RAM RAM ")
// }

// function fun2(){
//   console.log("KYA HAL CHAL")
// }

// function add(a,b,callback){
//        console.log(a + b)
//        callback();
// }
// add(2,2,fun)
// add(10 , 20,fun2)

// promises

// two types of promises
// 1 state
// 2 result

// let promise = new Promise((resolve, reject) => {
//         alert("hellow")
//         resolve(20)
// })
// console.log(" piyush")

// setTimeout(() =>{
//         console.log("bora")
// } ,2000)

// console.log("singh")
// console.log(promise)


// most important topics .then and .catch

// let p1 = new Promise((resolve, reject) => {
//         console.log("promise is pendding")

//         setTimeout(() =>{
//                 console.log("i am a promise and i am a resolved")
//                 resolve(true)
//         } , 5000)
// })

// let p2 = new Promise((resolve, reject) => {
//         console.log("promise is pendding")

//         setTimeout(() =>{
//                 // console.log("i am a promise and i am a rejected")
//                 resolve(new Error("i am error"))
//         } , 5000)
// })

// p1.then((value) =>{
//         console.log(value)
// })

// p2.catch((error) =>{
//         console.log("some error accured in p2")
// })


// 29 async and await

// async await return promise
// async print also promise without using .then() and cathch()
// also using async for delaying time 


// await wait for promise to return
// await not working without async

// let api = "https://jsonplaceholder.typicode.com/comments"

// let getdata = async () =>{
//         let res = await fetch("https://jsonplaceholder.typicode.com/comments")
//         let data = await res.json()
//         console.log(data)
// }
// getdata();



// reduce function

// let arr = [1,2,3,4,44,,55,57,77]

// let arr1 = arr.filter( (val) => val > 10)
// console.log(arr1);


// Question: Write a function that takes a string as input and returns it reversed.


// function reverce(ele){
//    return ele.split('').reverce().join();
// }
// console.log(reverce("hellow"));


// Question: Write a function that finds the maximum number in an array.

// let arr = [1,2,3,4,5,6]

// function findMax(arr) {
//         return Math.max(...arr);
//     }
    
//     console.log(findMax([3, 5, 1, 8, 2])); // Output: 8
    


// 31 What is the this keyword in JavaScript, and how does it work?

// const obj = {
//         name : "piyush" ,
//         lastname : "bora ",
//         greet : function (){
//                 console.log(this.name);
//         }
// }
// obj.greet();


//32  Asynchronous JavaScript:

// setTimeout(() =>{
//     console.log("i my name is piyush")

// },2000)

// console.log("end");


// 33 What is the difference between var, let, and const?


// . var is function scope , can be re-decleard and update;
// . let is block-scoped , can be upadte but not re-decleard in the same scope;
// .const is blocl-scoped , cannot be update or re-declerd . variable decleard with \;
// . const must be initialized during decleartion .


// map
// const numbers = [1, 2, 3, 4, 5];

// const dobule = numbers.map(num => num *2)
// console.log(dobule)

// filter
// const numberss = [1, 2, 3, 4, 5];
// const even = numberss.filter(num => num % 2 === 0);
// console.log(even)

// Destructuring

// const array = [1,"piyush",3]
// const [first, second , thired] = array

// console.log(first)
// console.log(second)
// console.log(thired)

// let obj = {
//         name : "piyush",
//         lastname : "bora",
//         age : 20
// }

// let {name , lastname ,age} = obj;

// console.log(name)
// console.log(lastname)
// console.log(age)



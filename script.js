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
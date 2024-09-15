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
// console.log("my name is" + (name + age))
// console.log (`my name is ${name} and my age is ${age}`)

//  Question 5
// How do you convert a string to a number in JavaScript?

// let str =  "10"
// //let num = Number(str)   {the number fuction convert the string to a number}
// console.log(num)


// let str2 = "20"
// let num2 = +str2   {the unary plus ( +) opertor is a shoorthand way to convert a string to a number it work similarly to number but is shorter and faster}
// console.log(num2)
// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x){
//   return x*2;
// }

// const newNumbers = numbers.map(double)
// console.log(newNumbers)

// var newNumbers = [];
// numbers.forEach(function (x){
//   newNumbers.push(x*2);
// })

// console.log(newNumbers)


//Filter - Create a new array by keeping the items that return true.


// const newNumbers = numbers.filter(function (num){
//   return num < 10
// })

// console.log(newNumbers)

// var newNumbers = [];
// numbers.forEach(function(num){
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// })

// console.log(newNumbers)


//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = 0;
// numbers.forEach(function (currentNumber){
//   console.log("newNumber = " + newNumber)
//   console.log("currentNumber = " + currentNumber)
//   newNumber += currentNumber
// })

// console.log(newNumber)

// var newNumber = numbers.reduce(function(accumulator, currentNumber){
//   console.log("accumulator = " + accumulator)
//   console.log("currentNumber = " + currentNumber)
//   return accumulator + currentNumber;
// })

// console.log(newNumber)

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num){
//   return num > 10;
// })

// console.log(newNumber)

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num){
//   return num > 10;
// })

// console.log(newNumber)

import emojipedia from "./emojipedia";

let meaningEmoji = emojipedia.map(function(element){
  return element.meaning.substring(0,100)
})

console.log(meaningEmoji)

// emojipedia.forEach(function(element){
//   var str = element.meaning

//   console.log(str.substring(0,100))
// })


// function double(x){
//   return x*2;
// }

// const newNumbers = numbers.map(double)


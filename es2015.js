
/*Convert the following es5 code blocks into es2015 code: */
/* 1. 
var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(function(){
            console.log("Your name is " + this.fullName)
        }.bind(this),1000)
    }
}
*/

var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(function(){
            console.log(`Your name is ${this.fullName}`);
        }.bind(this),1000)
    }
}


/* 2. 
var name = "Josie"
console.log("When " + name + " comes home, so good")
*/

var name = "Josie"
console.log(`When ${name} comes home, so good`);


/*3. var DO_NOT_CHANGE = 42;
   DO_NOT_CHANGE = 50; // stop me from doing this!*/

const doNotChange=42;
  


//  4. 
   var arr = [1,2]
   var temp = arr[0]
   arr[0] = arr[1]
   arr[1] = temp;


/* 5. 

function double(arr){
      return arr.map(function(val){
        return val*2
      });
     } */

function  double(arr){
    return arr.map(val => val*2)
};
   

/* 6. 
var obj = {
     numbers: {
        a: 1,
        b: 2
    } 
  }

var a = obj.numbers.a;
var b = obj.numbers.b;*/
var {a,b} = obj.numbers; // a; // 1 b; //2

// 7.
 function add(a,b){
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
  }

function add(a=10, b=10){
    return a+b; 
}    


//  ===============Part 2++++++++++++++++++++++++++++
/*
Research the following functions - what do they do?
1.	Array.from: Array.from() lets you create Arrays from:
•	array-like objects (objects with a length property and indexed elements); or
•	iterable objects (objects such as Map and Set).
Array.from() has an optional parameter mapFn, which allows you to execute a map() function on each element of the array being created.

The Syntax is shown below:

Array.from(arrayLike [, mapFn [, thisArg]])
Example:
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

2.	Object.assign: The Object.assign() method only copies enumerable and own properties from a source object to a target object. It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it assigns properties, versus copying or defining new properties. This may make it unsuitable for merging new properties into a prototype if the merge sources contain getters.
3.	Array.from(arrayLike [, mapFn [, thisArg]])

Example:
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }
3.	Array.includes: The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
arr.includes(valueToFind[, fromIndex])

Example:
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

4.	String.startsWith: The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
str.startsWith(searchString[, position])

Example:
const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
// expected output: true
*/
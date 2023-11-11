const myArray = [0,1,2,3,4,5,true]

const friends =["kunal", "sam", "dev","shubh", "anna"]

friends[7]  = "heet"

// friends.map((ele,i)=> console.log(`${ele} at index ${i}`))

// console.log(friends); 
 

/**********methods **************** */ 
const myArr2 = new Array(1,2,3,4)
myArr2.push(1)
// console.log(myArr2)


/*  slice and splice 
slice - simple it find the substring from i to j-1 but does not affected original array
splice -simple it fine the substring from i to j but it also affect original array

let see an example 
*/

const arr = new Array(1,2,3,4,5,6)



// slice opration
const myn1 = arr.slice(1,3);
console.log("original Array",arr)
console.log("my1 ", myn1)



// splice opration 
const myn2 = arr.splice(1,3)
console.log("original Array",arr)
console.log("myn2 ",myn2)















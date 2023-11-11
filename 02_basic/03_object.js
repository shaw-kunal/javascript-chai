// singleton - 
/* 
 notes:
*/
// using  object literal
const user = {
    name:"kunal",
    age :"22"
}

const mySml = Symbol("Key1")


const anotherUser ={
    name:"kunal",
    age:"22",
    [mySml]:"my Symbol"
}

// console.log(typeof anotherUser[mySml])

// console.log(anotherUser)

// we can also freez the object such that no one can change the object
// Object.freeze(anotherUser)
// anotherUser.age = 12;
// console.log(anotherUser)

// console.log(anotherUser["name"])





 /* add a function in data script in object */

 anotherUser.greeting = ()=>{
    console.log("hello another user")
 }
 console.log(anotherUser)
anotherUser.greeting();
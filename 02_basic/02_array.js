const marvel_heros =["Thor","Iron man","spiderman"]
const  dc_hero =["superMan","flash","batman"]

// push 
// marvel_heros.push(dc_hero)
// console.log(marvel_heros)


//concat- it merge second element 
// marvel_heros.concat(dc_hero)
// console.log(marvel_heros.concat(dc_hero))

// spred operator - used for merge two array
const all_new_hero = [...marvel_heros, ...dc_hero]
console.log(all_new_hero)


// flat function
const arr2 = [1,2,3,[4,5,6,7],8,[4,5,6,[4,5,10]]]
const flatArray = arr2.flat(Infinity)
console.log(flatArray)


// isArrray method
console.log(Array.isArray("hidlkdfk"))

// fromm method - it is used to convert itratble object into array
console.log(Array.from("hitesh"))

console.log(Array.from({name:"kunal"},))

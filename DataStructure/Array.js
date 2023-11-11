// traversal 
const array = [1,2,3,4,5,6,7,8,9];
/* for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
}
 */

// accesing

const getElement = ()=>{
    let index = Number(document.getElementById('element').value);
        if(!isNaN(index))
         { 
            console.log(array[index])
            document.getElementById('answer').textContent = array[index]
         }else
        {
            console.log("not a valid index")
            document.getElementById('answer').textContent = "not a valid index"
        }

           
}

console.log(array[1])


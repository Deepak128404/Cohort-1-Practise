
function increment(){
    let count = 0; //not accessible from outside 
    // closure function {function binded by it's lexical scope}
    
    return function(){
        count ++;
        return count;
    }
}

let x = increment()// x == function ,, since count is in scope of x it's accessible from x and same with y
let y = increment()//different user different counter we've solved that usedcase

console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());


console.log(y()); 
console.log(y());
console.log(y());
console.log(y());
console.log(y());
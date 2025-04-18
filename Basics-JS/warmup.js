Function.prototype.desc = function (){
    console.log(`function name is ${this.name}`);
}

const funcObj = function greet(name){
        console.log(`Greeting ${name}`);
}

funcObj.desc();


function counter(){ // Tiffin Concept (Functions has access to everything their parent function has  
    let count;
    return function () {
        count ++;
        return count;
    }
}
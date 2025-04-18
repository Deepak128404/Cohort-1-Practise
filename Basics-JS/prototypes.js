class Prototypes {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname
    }
    
    greet(fname, lname){
        console.log(`welcome ${this.fname}, ${this.lname}`);    
    }
}

const deepak = new Prototypes("Deepak", "Thakur")

deepak.greet()
// ################## Prototype Chaining ################
// const obj1 = {
//     fname: "Don't know",
//     lname: undefined,
//     greet(fname, lname){
//         console.log(`welcome ${this.fname}, ${this.lname}`);    
//     }
// }

// const obj2 = {
//     fname: "Whatever",
//     lname: "know",
// }

// obj2.__proto__ = obj1;

// obj2.greet()
//this is called protype inheritence or chaining
// ############### inheritance without extends keyword
class PrototypesB {
    PrototypesB () {     
    }
}
// PrototypesB.prototype = Prototypes.prototype
// PrototypesB = Prototypes

// const prototypesBObject = new PrototypesB;

// prototypesBObject.greet()

// ################# Arrow Function #####################
const arrorFunction = (a,b) => a*b;

console.log(arrorFunction(3,4))

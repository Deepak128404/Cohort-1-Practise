let array = [1,2,3,4,5,6,7,8,9]


if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFun){
        for (let index = 0; index < this.length; index++) {
        userFun(this[index], index)
        }
    }
}

const ret = array.myForEach(function (value, index) {
    console.log(`This is the ${value} at ${index}`); 
})

const map1 = array.map((x) => x * 2);

console.log(map1);


//    if(!Array.prototype.myMap){
//         Array.prototype.myMap = function(userFun){
//             const result = []
//                 for (let index = 0; index < this.length; index++) {
//                     const userValue = userFun(this[index],index) //expect that the userFunction will return some values and save it in variable and then push it to the return
//                     result.push(userValue)
                    
//                 }
//             return result
//         }
//    }



// const map2 = array.myMap((x) => x * 3);
// console.log(map2);

const filterResult = array.filter((index) => index > 2);
console.log(filterResult);

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function (userFun){
        const result = []

        for (let index = 0; index < this.length; index++) {
            if(userFun(this[index],index)){
                result.push(this[index])
            }
        }
        return result;
    }
}

const myFilterResult = array.filter((index) => index > 7);
console.log(myFilterResult);
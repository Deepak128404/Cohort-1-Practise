 const user = {
   name: "deepak",
   age: 23,
   password: "456",
};

const proxyUser = new Proxy(user,{
    get(target, prop){
            
        if(prop === 'password'){
            return Error("cannot access password")
        }
        
        return target[prop]
    },

    set(target, prop, value){
        target[prop] = value
        return true
    }
})

// console.log(user.password);

// proxyUser.password = '1234'

// console.log(user.password);





const array = [1,2,3,4,5,6,7,8,9]

function negativeIndex(array) {
    return new Proxy(array, {
        get(target, prop){
            const index = Number(prop)
            if( index < 0 ){
                return target[target.length + index] // 9 + (-1)
            }

        },

        set(target, prop, value){
            const index = Number(prop)
            if(index < 0){
                target[target.length + index] = value
            }else 
            {
                target[index] = value
            }
            return true
        }
    })
    
}

let newArray = negativeIndex(array);

console.log(newArray[-1]);

newArray[-1] = 85

console.log(newArray);

console.log(newArray[-1]);




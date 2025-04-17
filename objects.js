const teas = {
    tea: "black",
    favTea: "white",
    hateTea: "All",
    nestedObjectTea: {
        favNestedTea: 1,
        favNestedTea2: 2,
    }
}

// console.log(teas.hateTea);
// console.log(teas["favTea"]);

// teas.origin = "India"

// console.log(teas);
// teas.favTea = "newTea"

// delete teas.hateTea


// console.log("favTea" in teas);



const newMyNestedTEas = {
    nestedTea:  {},
    nestedTea2:{}
    
}

newCopyTea = {...teas}

newCopyTea.favTea = 'copyFromTea'
newcopyTea2 = teas //deep copy

newcopyTea2.favTea = "copy form newfavtea 2"

console.log(newCopyTea); //shallow copy
console.log(teas);
console.log(newcopyTea2);



function PrintHello(){
    console.log("Hello World");   
}

function PrintBrush(itne){
    console.log(`itne brush leke aaya ${itne}`);
    
}
// PrintHello();
// PrintBrush(14)

const number = "23abc";
// convertedNum = Number(number) // mostly used
// convertedNum = +number //different techniques for conversion
// convertedNum = parseInt(number) 

// console.log(typeof convertedNum);
// console.log(convertedNum); //response (Not A Number)


// console.log((Math.random() * 6)) // 1-6 

// let fName = "Deepak"
// let lName = "Singh"
// console.log(fName.concat(lName))
// console.log(fName.toUpperCase())
// console.log(lName.toLowerCase());
// console.log(fName.slice(0,3));

// console.log(fName.indexOf("e"))

// let greetings = `Hell0 ${fName}`
// console.log(greetings);


// const teas = ["masalaTea", "GingerTea" ]

// newTeas = [...teas, "oolongTea"] // Spread Operator
// console.log(newTeas);

const Recipie = {
    name: "Tearecepie",
    ingredients: ["milk", "water", "tealeaves"],
    place: {
        leavesFrom: "Assam",
        leavesCountry: "India"
    },
    Instruction: "Follow the Original Recepie"
}

let {name, place, later} = Recipie // "Object Destructuring"
console.log(place);
// console.log(later);

function trafficFlow(color){
    switch (color) {
        case "red":
            console.log("Stop");
            break;
        case "yellow":
            console.log("SlowDown");
            break;
        case "green":
            console.log("Run");
            break;
        default: 
        break;
    }

}

// const value = -0;

// if (value) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy"); // This will log because an empty string is falsy.
// }

let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800 },
    { product: "Headphones", price: 150 },
    { product: "Keyboard", price: 80 },
  ];
  
  let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
  // console.log(totalSales);
  
  // Items less than 50
  let inventory = [
    { name: "Widget A", stock: 30 },
    { name: "Widget B", stock: 120 },
    { name: "Widget C", stock: 45 },
    { name: "Widget D", stock: 70 },
  ];
  
  let lowStockItems = inventory.filter((item) => {
    return item.stock < 50;
  });
  // console.log(lowStockItems);
  
  let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 12 },
    { user: "Charlie", activityCount: 33 },
  ];
  // find most active user
  
  let mostActiveUser = userActivity.reduce((maxUser, user) =>
    user.activityCount > maxUser.activityCount ? user : maxUser
  );
//   console.log(mostActiveUser);
  

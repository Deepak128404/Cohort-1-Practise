let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
  ]; //category wise show expances

  let categoryExpences = expenses.reduce(
    (report, expense) => {
    // report[expense.category] += expense.amount
    report[expense.category] = (report[expense.category] || 0) + expense.amount 
    return report
  }, {Food: 0, Utilities: 0})

//   console.log(categoryExpences);
  

  let tasks = [
    { description: "Write report", completed: false, priority: 2 },
    { description: "Send email", completed: true, priority: 3 },
    { description: "Prepare presentation", completed: false, priority: 1 },
  ]; // show pending tasks 

  let sortedPendingTasks = tasks
  .filter((tasks) => !tasks.completed )
  .sort((a,b) => a.priority - b.priority)

  // console.log(sortedPendingTasks);
  

  let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] },
  ];

  let averageMovieRatings = movieRatings.map((movie) => {

    let total = movie.ratings.reduce((sum, ratings) => sum + ratings, 0) //for total ratings
    let average = total / movie.ratings.length

    return { title: movie.title, ratings: average.toFixed(2)}
  }
)

// console.log(averageMovieRatings);

let person1 = {
  name: "deepak",
  greet: function(){
      console.log(`hello ${this.name}`);
          
  }
}

let person2 = { // call greet with context of person 2
  name: "person2"
}

// person1.greet.call(person2) //one way is to use call

let bindGreet = person1.greet.bind(person2)
// bind returns a new function 
// that's why we stored it in an object 
bindGreet()  //function call

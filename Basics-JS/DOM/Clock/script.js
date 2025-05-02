const time = document.getElementById('time')
const date = document.getElementById('date')


function clock () {
const dateTime = new Date()
const currentHours =  (dateTime.getHours() % 12 || 12).toString().padStart(2,"0")
const currentMinutes = dateTime.getMinutes().toString().padStart(2,"0")
const currentSeconds = dateTime.getSeconds().toString().padStart(2,"0")
const ampm = dateTime.getHours() >= 12 ? "AM":"PM"
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

time.innerText = (`${currentHours}:${currentMinutes}:${currentSeconds}:${ampm}`)
date.innerText = dateTime.toLocaleDateString(undefined, options)

}
setInterval(clock, 1000);
clock()  
const changeBAckgroundColor = function (color){
    document.body.style.backgroundColor = color;
}
     
const toggleButton = document.getElementById("theme-button");
const h1Text = document.getElementById("h1-text")

toggleButton.addEventListener("click", () => {
    const currColor = document.body.style.backgroundColor;
    if(!currColor || currColor == "white" ){
        changeBAckgroundColor("Black")
        toggleButton.innerText = "light Mode"
    }
    else{
        changeBAckgroundColor("white")
        toggleButton.innerText = "dark Mode"
        h1Text.style.color = "white"
    }
})

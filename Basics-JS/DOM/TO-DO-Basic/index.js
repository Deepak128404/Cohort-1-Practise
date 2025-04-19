const inputText = document.getElementById("input-text")
const addButton = document.getElementById("add-button")
const liChild = document.getElementById("task-list")

addButton.addEventListener('click', () => {
   const Inputvalue = inputText.value;

   const li = document.createElement("li")
   li.innerText = Inputvalue
   liChild.append(li)
   inputText.value = "";

   const delButton = document.createElement("button")
   delButton.innerText = "Delete";
      delButton.addEventListener("click", () => {
        li.remove()
      } )
   li.appendChild(delButton);

} )
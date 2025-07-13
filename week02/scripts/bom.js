const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("");
const li = document.createElement("li");
const deleteButton = document.createElement("button");
const message = document.getElementById("message");


li.textContent = input.value;
deleteButton.textContent = "❌";
li.append(deleteButton);
list.append(li);

button.addEventListener("click", function () {
    if (input.value.trim() === '') { 
        message.textContent = "Please fill out this field.";
        message
        input.focus();
        return;
}
});
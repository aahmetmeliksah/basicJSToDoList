"strict";

let taskDOM = document.querySelector("#task");               // This is where you type a new task
let btnDOM = document.getElementById("liveToastBtn");        // This is where you add what you've typed
let toDoListDOM = document.querySelector("#list");

function addTaskRemoveTask() {
    let createLi = document.createElement("LI");
    createLi.innerHTML = taskDOM.value;
    toDoListDOM.appendChild(createLi);
    taskDOM.value = "";
    createLi.addEventListener("click", function(){
        createLi.style.textDecoration = "line-through";
        createLi.style.backgroundColor = "#00802b";
    })
    createLi.addEventListener("dblclick", function(){
        toDoListDOM.removeChild(createLi);
    })
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTaskRemoveTask();
        // let createLi = document.createElement("LI");
        // createLi.innerText = taskDOM.value;             ------ We can call addTask function for this :)
        // toDoListDOM.appendChild(createLi);
    }
})

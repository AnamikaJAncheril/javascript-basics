
const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Enter some data");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value.trim();
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveTask();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
});

function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    let data = localStorage.getItem("data");
    if (data) {
        listContainer.innerHTML = data;
    }
}

function clearAll() {
    if (confirm("Are you sure you want to clear all tasks?")) {
        listContainer.innerHTML = '';
        saveTask();
    }
}


function markAllDone() {
    const allTasks = listContainer.querySelectorAll("li");
    allTasks.forEach(task => {
        task.classList.add("checked");
    });
    saveTask();
}

showTask();

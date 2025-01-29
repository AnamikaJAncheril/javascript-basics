const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
    if (inputBox.value === '') {
        alert("Enter some data");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 
    }

    inputBox.value = "";
    saveTask();
}

listContainer.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        e.taget.classList.toggle("checked");
        saveTask();
    }
        
});

function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();
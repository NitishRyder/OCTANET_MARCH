const todoValue = document.getElementById("todoText"),
listItems = document.getElementById("list-items"),
addUpdateClick = document.getElementById("AddUpdateClick")
let updateText;
let todoData = JSON.parse(localStorage.getItem("todoData"));
if(!todoData){
    todoData=[];
}

todoValue.addEventListener("keypress", function(e){
    if(e.key=="Enter"){
        addUpdateClick.click();
    }
});

function CreateToDoData(){
    if(todoValue.value === ""){
        alert("Please Enter your todo text!");
        todoValue.focus();
    }
    let li=document.createElement("li");
    const todoItems = `<div ondblclick="CompleteTodoItem(this)">${todoValue.value}</div><div><img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="../Task-2/images/pencil.png"/><img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="../Task-2/images/delete.png" /><div>`;

    li.innerHTML=todoItems;
    listItems.appendChild(li);
    todoValue.value="";

    if(!todoData){
        todoData=[];
    }
    let dataItem = {item: todoData.value, status:false};
    todoData.push(dataItem);
}

function CompleteTodoItem(e) {
    if(e.parentElement.querySelector("div").style.textDecoration === ""){
        e.parentElement.querySelector("div").style.textDecoration="line-through";
    }
}

function UpdateOnSelectionItems(){
    updateText.innerText = todoValue.value;
    addUpdateClick.setAttribute("onclick","CompleteTodoItem");
    addUpdateClick.setAttribute("src","../Task-2/images/plus.png");
    todoValue.value="";
}

function UpdateToDoItems(e){
    if(e.parentElement.parentElement.querySelector("div").style.textDecoration === ""){
        todoValue.value= e.parentElement.parentElement.querySelector("div").innerText;
        addUpdateClick.setAttribute("onclick","UpdateOnSelectionItems()");
        addUpdateClick.setAttribute("src","../Task-2/images/refresh.png");
        updateText = e.parentElement.parentElement.querySelector("div");
    }
    
}
function DeleteToDoItems(e){
    let deleteValue = e.parentElement.parentElement.querySelector("div").innerText;
    if(confirm(`Are you sure?. Do you want to delete this ${deleteValue}!`));{
        e.parentElement.parentElement.parentElement.querySelector("li").remove();
    }
}
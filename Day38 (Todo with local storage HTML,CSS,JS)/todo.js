//*****************getting values from local storage */
window.onload = loadTasks;
// **************Selecting items
const alert = document.querySelector(".alert"),
  form = document.querySelector(".TodoListForm"),
  subbtn = document.querySelector(".submit-btn"),
  inp = document.querySelector("form input"),
  list = document.querySelector("ul");

// **************event Listner
//submit form
form.addEventListener("submit", addItem);
function addItem(e) {
  e.preventDefault();
  addingTasks()
}
function loadTasks() {
  // check if localStorage has any tasks
  // if not then return
  if (localStorage.getItem("tasks") == null) return;

  // Get the tasks from localStorage and convert it to an array
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  // Loop through the tasks and add them to the list
  tasks.forEach(task => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" class="check" name="check-complet" id="check-complet"
        onclick="complete(this)" ${task.completed ? 'checked' : ''} >
    <input type="text" class="task-text ${task.completed ? 'completed' : ''}" value='${task.task}'  onfocusout="updateVal(this)"  readonly="readonly"/>
    <div class="icons">
        <i class="fa fa-pen-to-square"  onclick="edit(this)" ></i>
        <i class="fa fa-trash-alt" onclick="trash(this)" ></i>
    </div>`;
    list.insertBefore(li, list.children[0]);
  });
}
function addingTasks() {
  if (inp.value === "") {
    alert("Please add some task!");
    return false;
  }
  localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: inp.value, completed: false }]));

  const li = document.createElement("li");
  li.innerHTML = ` <input type="checkbox" class="check" name="check-complet" id="check-complet"
    onclick="complete(this)">
    <input type="text" class="task-text" value='${inp.value}' onfocusout="updateVal(this)" readonly="readonly"/>
<div class="icons">
    <i class="fa fa-pen-to-square" onclick="edit(this)" ></i>
    <i class="fa fa-trash-alt" onclick="trash(this)"></i>
</div>`;
  list.insertBefore(li, list.children[0]);
  inp.value = "";
}

  function complete(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
 let btns=event.nextElementSibling.nextElementSibling;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].task === event.nextElementSibling.value){
        tasks[i].completed = !tasks[i].completed;
     
}
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.nextElementSibling.classList.toggle("completed");
  }


var currentTask = null;
// get current task
function edit(event) {
  currentTask = event.parentElement.previousElementSibling.value;
  let par = event.parentElement.previousElementSibling;
  let hope = event.parentElement.parentElement;
 let pa=hope.querySelector('.task-text')
 pa.readOnly = false;
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  if (par.value === "") {
    alert("Task is empty!");
    par.value = currentTask;
    return;
  }
  // update task
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task === currentTask){
      tasks[i].task=par.value
    }
  }
  // update local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function updateVal(event){
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  let par = event.value;
  let hope = event.parentElement;
 let pa=hope.querySelector('.task-text')
 pa.readOnly = true;
   for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task == currentTask){
      tasks[i].task=par
    }
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
 }

function trash(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task === event.parentElement.previousElementSibling.value) {
      tasks.splice(tasks.indexOf(tasks[i]), 1);
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.parentElement.parentElement.remove();
}

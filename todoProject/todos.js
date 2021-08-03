const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
//console.log(toDoForm);
//console.log(toDoList);

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  //console.log("i will paint" + newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = " ❌ ";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  //console.log(li);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  //console.log(toDoInput);
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  //console.log(newTodo);
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //console.log(parsedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

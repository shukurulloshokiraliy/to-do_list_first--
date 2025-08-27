let todoForm = document.getElementById("todo-form");

let todoListContainer = document.querySelector(".todo-list");

let todoInput = document.getElementById("todo-input");
let todos = [];

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!todoInput.value.trim()) return;
  let newTodoText = todoInput.value;
  addTodo(newTodoText);
  todoInput.value = "";
});

function addTodo(todoText) {
  let todoObj = {
    id: Date.now(), //323232323
    title: todoText,
  };
  todos.push(todoObj);
  renderUi(todos);
  console.log(todos);
}

function deleteTodo(id) {
  todos = todos.filter((obj) => obj.id !== id);
  renderUi(todos);
}

function renderUi(todosArr) {
  todoListContainer.innerHTML = "";
  todosArr.forEach((todo) => {
    // [ {} ,{} ,{} ]
    todoListContainer.innerHTML += `
             <li class="todo-item border  p-2 border-[aqua-marine] w-full flex items-center justify-between rounded-xl">
                    <input type="checkbox">
                    <span>${todo.title}</span>
                    <button onclick="deleteTodo(${todo.id})" class="text-[red] cursor-pointer "> <i class="fa-solid fa-trash-can"></i></button>
                </li> 
        `;
  });
}

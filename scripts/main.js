//Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Events Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);



//Function

function addTodo(event)
{
  //Prevent form from submmiting 
  event.preventDefault();

  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<h2 class="done-icon">DONE</h2>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //CHECK trast BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<h2 class="trash-icon">X</h2>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //APPEND TO LIST
  if(todoInput.value!=''){
  todoList.appendChild(todoDiv);
  }

  todoInput.value="";

}

//DELETE
function deleteTodo(event){
  
  //DELETE TODO
  const item  = event.target;
  if(item.classList[0] === 'trash-btn')
  {
    const todo = item.parentElement;
    todo.remove();
    console.log('DELETED');

  }

  //CHECK MARK
  if(item.classList[0] === 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
    console.log('COMPLETED');
  }

}



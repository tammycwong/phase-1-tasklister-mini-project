document.addEventListener("DOMContentLoaded"() => {
  const todoListForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById("new-task-description");
  const listItem = document.getElementById("tasks");

  todoListForm.addEventListener("submit", createNewTask);

  function createNewTask(e){
    e.preventDefault();
    const newTask = document.createElement("li";)
    listItem.innerText = newTaskDescription.value;

    append(listItem);
  }
  });

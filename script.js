const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
        `;
    taskList.appendChild(li);
    taskInput.value = "";

    const editButton = li.querySelector(".editButton");
    editButton.addEventListener("click", () => {
      editTask(li);
    });

    const deleteButton = li.querySelector(".deleteButton");
    deleteButton.addEventListener("click", () => {
      deleteTask(li);
    });
  }
}

function editTask(taskItem) {
  const taskTextElement = taskItem.querySelector(".task-text");
  const newText = prompt("Edit task:", taskTextElement.textContent);
  if (newText !== null) {
    taskTextElement.textContent = newText;
  }
}

function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}

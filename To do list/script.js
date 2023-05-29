let tasks = [];

// Function to add a new task
const addTask = () => {
  const titleInput = document.getElementById("title-input");
  const descriptionInput = document.getElementById("description-input");
  const dateInput = document.getElementById("date-input");
  const statusInput = document.getElementById("status-input");

  const task = {
    title: titleInput.value,
    description: descriptionInput.value,
    dueDate: dateInput.value,
    status: statusInput.value,
  };

  tasks.push(task);

  renderTasks();

  // Reset input fields
  titleInput.value = "";
  descriptionInput.value = "";
  dateInput.value = "";
  statusInput.value = "pending";
};

// Function to edit a task
function editTask(index) {
  const task = tasks[index];
  const newTitle = prompt("Enter the new title", task.title);
  const newDescription = prompt("Enter the new description", task.description);
  const newDueDate = prompt("Enter the new due date", task.dueDate);
  const newStatus = prompt("Enter the new status", task.status);

  if (newTitle && newDescription && newDueDate && newStatus) {
    tasks[index] = {
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate,
      status: newStatus,
    };

    renderTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Function to render the list of tasks
function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const titleElement = document.createElement("div");
    titleElement.classList.add("task-title");
    titleElement.innerText = task.title;

    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("task-description");
    descriptionElement.innerText = task.description;

    const dueDateElement = document.createElement("div");
    dueDateElement.classList.add("task-due-date");
    dueDateElement.innerText = "Due Date: " + task.dueDate;

    const statusElement = document.createElement("div");
    statusElement.classList.add("task-status");
    statusElement.innerText = "Status: " + task.status;

    const actionsElement = document.createElement("div");
    actionsElement.classList.add("task-actions");

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => editTask(index));
    actionsElement.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(index));
    actionsElement.appendChild(deleteButton);

    if (task.status === "complete") {
      editButton.disabled = true;
    }

    taskElement.appendChild(titleElement);
    taskElement.appendChild(descriptionElement);
    taskElement.appendChild(dueDateElement);
    taskElement.appendChild(statusElement);
    taskElement.appendChild(actionsElement);

    taskList.appendChild(taskElement);
  });
}

// Event listener
document.getElementById("add-task-btn").addEventListener("click", addTask);

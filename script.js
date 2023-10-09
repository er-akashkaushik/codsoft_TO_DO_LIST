function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const todoList = document.getElementById("todo-list");
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");
        taskItem.innerHTML = `
            <input type="checkbox" onclick="toggleTask(this)">
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        todoList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function toggleTask(checkbox) {
    const task = checkbox.parentNode;
    task.classList.toggle("completed");
}

function deleteTask(button) {
    const task = button.parentNode;
    const todoList = document.getElementById("todo-list");
    todoList.removeChild(task);
}

const taskInput = document.getElementById("task-input");
taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

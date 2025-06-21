// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create task list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Add event listener for removing task
        removeButton.onclick = () => taskList.removeChild(li);

        // Append elements
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for button click
    addButton.addEventListener("click", addTask);

    // Event listener for pressing "Enter" in input field
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
    function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't re-save to storage
}
    document.addEventListener("DOMContentLoaded", () => {
    addTask(); // Call the function when the DOM is fully loaded
});
document.addEventListener("DOMContentLoaded", () => { 
    loadTaasks(); // Call the function to load tasks when the DOM is fully loaded
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task list item
    const li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add("task-item"); // Add a class for styling

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn"); // Add class using classList

    // Add event listener for removing task
    removeButton.onclick = () => taskList.removeChild(li);

    // Append elements
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}
});

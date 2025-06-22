document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            if (taskText.trim() !== "") {
                createTaskElement(taskText);
            }
        });
    }

    // Helper function to create a task element
    function createTaskElement(taskText) {
        // Create task list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Add event listener for removing task
        removeButton.onclick = () => {
            taskList.removeChild(li);
            saveTasksToStorage();
        };

        // Append elements
        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    // Function to save tasks to localStorage
    function saveTasksToStorage() {
        const tasks = [];
        document.querySelectorAll("#task-list li").forEach(li => {
            tasks.push(li.textContent.replace("Remove", "").trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        createTaskElement(taskText);
        saveTasksToStorage();

        // Clear input field
        taskInput.value = "";
    }

    // Load tasks when page loads
    loadTasks();

    // Event listener for button click
    addButton.addEventListener("click", addTask);

    // Event listener for pressing "Enter" in input field
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
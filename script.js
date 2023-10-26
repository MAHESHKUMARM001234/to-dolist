document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task">${taskText}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        
        // Edit task
        li.querySelector(".edit").addEventListener("click", function() {
            const newText = prompt("Edit the task:", taskText);
            if (newText !== null) {
                li.querySelector("span").textContent = newText;
            }
        });

        // Delete task
        li.querySelector(".delete").addEventListener("click", function() {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }

    // Add task when the "Add" button is clicked
    addTaskButton.addEventListener("click", addTask);

    // Add task when the "Enter" key is pressed in the input field
    taskInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

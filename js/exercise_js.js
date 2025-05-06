function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
      ${taskText}
      <button class="remove-btn" onclick="removeTask(this)">X</button>
    `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}

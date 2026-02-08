let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  tasks.forEach((t, i) => {
    list.innerHTML += `
      <div class="todo">
        <span>${t}</span>
        <button onclick="editTask(${i})">Sửa</button>
        <button onclick="deleteTask(${i})">Xóa</button>
      </div>`;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const val = document.getElementById("taskInput").value.trim();
  if (val) { tasks.push(val); render(); }
}
function deleteTask(i) { tasks.splice(i,1); render(); }
function editTask(i) {
  const newVal = prompt("Sửa công việc:", tasks[i]);
  if (newVal) { tasks[i] = newVal; render(); }
}
render();
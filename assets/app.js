import "./styles/app.scss";

import "./bootstrap";
require("bootstrap");

// Message Flash

const sidebar = document.getElementById("sidebar");
const TopNavbar = document.getElementById("topNavbar");

function updateSidebarClasses() {
  if (window.innerWidth < 768) {
    sidebar.classList.remove("collapse", "collapse-horizontal", "show");
    sidebar.classList.add("offcanvas", "offcanvas-end", "w-50");
    TopNavbar.style.display = "block";
  } else {
    sidebar.classList.remove("offcanvas", "offcanvas-end", "w-50");
    sidebar.classList.add("collapse", "collapse-horizontal", "show");
    TopNavbar.style.display = "none";
  }
}

updateSidebarClasses();

window.addEventListener("resize", updateSidebarClasses);

setTimeout(function () {
  var flashMessage = document.querySelector("div.alert");
  if (flashMessage) {
    flashMessage.remove();
  }
}, 5000);

const displayTodoHigh = document.getElementById("displayTodoHigh");
const todoHighSidebar = document.getElementById("todoHighSidebar");

displayTodoHigh.addEventListener("click", function () {
  if (todoHighSidebar.style.display === "none") {
    todoHighSidebar.style.display = "block";
    displayTodoHigh.innerHTML =
      '<i class="bi bi-caret-down-fill fs-3"></i> High Priority';
  } else {
    todoHighSidebar.style.display = "none";
    displayTodoHigh.innerHTML =
      '<i class="bi bi-caret-right-fill fs-3"></i> High Priority';
  }
});

const displayTodoMedium = document.getElementById("displayTodoMedium");
const todoMediumSidebar = document.getElementById("todoMediumSidebar");

displayTodoMedium.addEventListener("click", function () {
  if (todoMediumSidebar.style.display === "none") {
    todoMediumSidebar.style.display = "block";
    displayTodoMedium.innerHTML =
      '<i class="bi bi-caret-down-fill fs-3"></i> Medium Priority';
  } else {
    todoMediumSidebar.style.display = "none";
    displayTodoMedium.innerHTML =
      '<i class="bi bi-caret-right-fill fs-3"></i> Medium Priority';
  }
});

const displayTodoLow = document.getElementById("displayTodoLow");
const todoLowSidebar = document.getElementById("todoLowSidebar");

displayTodoLow.addEventListener("click", function () {
  if (todoLowSidebar.style.display === "none") {
    todoLowSidebar.style.display = "block";
    displayTodoLow.innerHTML =
      '<i class="bi bi-caret-down-fill fs-3"></i> Low Priority';
  } else {
    todoLowSidebar.style.display = "none";
    displayTodoLow.innerHTML =
      '<i class="bi bi-caret-right-fill fs-3"></i> Low Priority';
  }
});

const newTaskBtn = document.getElementById("newTaskBtn");
const taskForm = document.getElementById("taskForm");

newTaskBtn.addEventListener("click", function () {
  if (taskForm.style.display === "none") {
    taskForm.style.display = "block";
    newTaskBtn.innerHTML = '<i class="bi bi-eye-slash fs-3"></i>';
  } else {
    taskForm.style.display = "none";
    newTaskBtn.innerHTML = "Add Task";
  }
});

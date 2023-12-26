import { createElementWithClass } from "./elementCreate";

export function createTask(name, description, dueDate, priority) {
  return { name, description, dueDate, priority };
}

export function getUserTaskInput() {
  const name = document.getElementById("taskName").value;
  console.log(name);
  const description = document.getElementById("taskDescription").value;
  const dueDate = document.getElementById("taskDueDate").value.split("T");
  const priority = document.getElementById("taskPriority").value;

  return { name, description, dueDate, priority };
}

export function generateTaskDOM(taskObject) {
  const allTaskElements = document.getElementById("tasks");

  const taskWrapper = createElementWithClass("div", "taskWrapper");

  const taskName = createElementWithClass("p", "taskName");
  taskName.textContent = taskObject.name;
  const taskDescription = createElementWithClass("p", "taskDescription");
  taskDescription.textContent = taskObject.description;
  const taskDueDate = createElementWithClass("p", "taskDueDate");
  taskDueDate.textContent = taskObject.dueDate;
  const taskPriority = createElementWithClass("p", "taskPriority");
  taskPriority.textContent = taskObject.priority;

  taskWrapper.append(taskName, taskDescription, taskDueDate, taskPriority);

  allTaskElements.appendChild(taskWrapper);
}

// TD have a color indicator to go with priority, red yellow green for instance

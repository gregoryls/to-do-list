import { createElementWithClass } from "./elementCreate";

export default function createTask(name, description, dueDate, priority) {
  return { name, description, dueDate, priority };
}

export function generateTaskDOM(taskObject) {
  const allTaskElements = document.getElementById("tasks");

  const taskWrapper = createElementWithClass("div", "taskWrapper");
  const taskName = createElementWithClass("p", "taskName");
  taskName.textContent = taskObject.name;
  taskWrapper.append(taskName);

  allTaskElements.appendChild(taskWrapper);
}
// TODO project logic

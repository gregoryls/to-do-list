import createElementWithId from "./elementCreate";

function contentDOM() {
  // TODO make an overall content wrap
  const taskLabels = createElementWithId("div", "labels");
  const taskName = createElementWithId("p");
  taskName.textContent = "test";

  taskLabels.append(taskName);

  return taskLabels;
}

export function taskModalDOM() {
  const modal = createElementWithId("div", "taskModal");

  return modal;
}
export default function contentCreation() {
  return contentDOM();
}

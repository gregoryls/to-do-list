import createElementWithId from "./elementCreate";

function contentDOM() {
  const taskLabels = createElementWithId("div", "labels");
  const taskName = createElementWithId("p");
  taskName.textContent = "test";

  taskLabels.append(taskName);

  return taskLabels;
}

export default function contentCreation() {
  return contentDOM();
}

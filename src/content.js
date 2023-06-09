import createElementWithId, { createInputElement } from "./elementCreate";

function taskModalDOM() {
  const modal = createElementWithId("div", "taskModal");
  const form = createElementWithId("form", "taskForm");
  const nameInput = createInputElement("text", "nameInput", "nameInput");

  form.append(nameInput);

  modal.append(form);
  return modal;
}

function contentDOM() {
  const content = createElementWithId("section", "taskContent");

  const taskLabels = createElementWithId("div", "labels");
  const taskName = createElementWithId("p");
  taskName.textContent = "test label";

  taskLabels.append(taskName);

  content.append(taskModalDOM(), taskLabels);

  return content;
}

export default function contentCreation() {
  return contentDOM();
}

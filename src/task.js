import createElementWithId, { createElementWithClass } from "./elementCreate";

export default function createTask(name, description, dueDate, priority) {
  return { name, description, dueDate, priority };
}

export function generateTaskDOM(taskObject) {
  // const taskWrapper = createElementWithId('div',)
}
// TODO project logic

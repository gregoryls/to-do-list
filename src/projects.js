export function createProject(projectName) {
  const tasks = [];
  return { projectName, tasks };
}

export function addTasktoProject(taskObject, project) {
  project.tasks.push(taskObject);

  return project;
}

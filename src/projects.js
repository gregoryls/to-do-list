export function createProject(projectName) {
  const tasks = [];
  return { projectName, tasks };
}

export function addTasktoProject(taskObject, project) {
  project.tasks.push(taskObject);

  return project;
}

export function getNewProjectName() {
  const name = document.getElementById("newProjectInput").value;

  return name;
}

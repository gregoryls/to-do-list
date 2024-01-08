export function createProject(projectName, projectList) {
  const obj = {};
  obj.projectName = projectName;
  obj.tasks = [];

  projectList.push(obj);
  return obj;
}

export function addTasktoProject(taskObject, project) {
  project.tasks.push(taskObject);

  return project;
}

export function getNewProjectName() {
  const name = document.getElementById("newProjectInput").value;

  return name;
}

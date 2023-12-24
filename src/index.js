import "./style.css";
// import createElementWithId from "./elementCreate";

import * as task from "./task";
import * as project from "./projects";
import * as utils from "./utils";

// TODO make a notes tab
// investigate disappearing image problem with sidebar icon
// temp bookmarks for html loader caching for asset issue
// project button change > to V
// need way to store projects, probably an array
// use ...args and loop to do multiple elements for add/remove class

const projectList = [];

const sampleObject = task.createTask(
  "nametest",
  "desctest",
  "datetest",
  "lowtest"
);

const sampleProject = project.createProject("sample project");
projectList.push(sampleProject);

console.log(project.addTasktoProject(sampleObject, sampleProject));
console.log(projectList);

task.generateTaskDOM(sampleObject);

const newTaskButton = document.getElementById("newTaskButton");
const newProjectButton = document.getElementById("newProjectButton");
const addProjectButton = document.getElementById("addProjectButton");
const modal = document.getElementById("taskModal");
const overlay = document.getElementById("overlay");

overlay.addEventListener("click", () => {
  utils.addClass("hidden", "taskModal", "overlay");
});

newTaskButton.addEventListener("click", () => {
  const newTask = document.getElementById("taskModal");

  utils.removeClass("hidden", "taskModal", "overlay");
});

const taskSubmit = document.getElementById("taskSubmit");
taskSubmit.addEventListener("click", () => {
  // console.log(createTask());
  console.log(task.getUserTaskInput());

  utils.addClass("hidden", "taskModal", "overlay");
});

newProjectButton.addEventListener("click", () => {
  const buttonText = newProjectButton.textContent;

  if (buttonText === ">") {
    newProjectButton.textContent = "V";
    utils.removeClass("hidden", "newProjectWrap");
  }
  if (buttonText === "V") {
    newProjectButton.textContent = ">";
    utils.addClass("hidden", "newProjectWrap");
  }
});

addProjectButton.addEventListener("click", () => {
  const projectName = project.getNewProjectName();
  const newProject = project.createProject(projectName);

  projectList.push(newProject);
  console.log(projectList);
});

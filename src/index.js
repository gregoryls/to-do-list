import "./style.css";
// import createElementWithId from "./elementCreate";
// import headerCreation from "./header";
// import { sidebarIcon } from "./sidebar";
// import contentCreation from "./content";
import * as task from "./task";
import * as project from "./projects";
import * as utils from "./utils";

// document.body.appendChild(createElementWithId("div", "test"));

// document.body.append(headerCreation(), sidebarCreation(), contentCreation());
// sidebarIcon();

// TODO make a notes tab
// investigate disappearing image problem with sidebar icon
// temp bookmarks for html loader caching for asset issue
// project button change > to V
// need way to store projects, probably an array

// make modal overlay

const testObject = task.createTask(
  "nametest",
  "desctest",
  "datetest",
  "lowtest"
);

const testProject = project.createProject("test project");

console.log(project.addTasktoProject(testObject, testProject));

task.generateTaskDOM(testObject);

const newTaskButton = document.getElementById("newTaskButton");
const modal = document.getElementById("taskModal");
const overlay = document.getElementById("overlay");

overlay.addEventListener("click", () => {
  utils.hideModal();
});

newTaskButton.addEventListener("click", () => {
  const newTask = document.getElementById("taskModal");

  utils.showModal();

  // if (newTask.style.display === "none" || newTask.style.display === "") {
  //   newTask.style.display = "block";
  // } else {
  //   newTask.style.display = "none";
  // }
});

const taskSubmit = document.getElementById("taskSubmit");
taskSubmit.addEventListener("click", () => {
  // console.log(createTask());
  console.log(task.getUserTaskInput());

  utils.hideModal();
});

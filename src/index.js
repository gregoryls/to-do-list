import "./style.css";
// import createElementWithId from "./elementCreate";
// import headerCreation from "./header";
// import { sidebarIcon } from "./sidebar";
// import contentCreation from "./content";
import createTask, { generateTaskDOM } from "./task";
import addTasktoProject, { createProject } from "./projects";

// document.body.appendChild(createElementWithId("div", "test"));

// document.body.append(headerCreation(), sidebarCreation(), contentCreation());
// sidebarIcon();

// TODO make a notes tab
// investigate disappearing image problem with sidebar icon
// temp bookmarks for html loader caching for asset issue

const testObject = createTask("nametest", "desctest", "datetest", "lowtest");

const testProject = createProject("test project");

console.log(addTasktoProject(testObject, testProject));

generateTaskDOM(testObject);

const newTaskButton = document.getElementById("newTaskButton");
newTaskButton.addEventListener("click", () => {
  const newTask = document.getElementById("taskModal");

  if (newTask.style.display === "none" || newTask.style.display === "") {
    newTask.style.display = "block";
  } else {
    newTask.style.display = "none";
  }
});

const taskSubmit = document.getElementById("taskSubmit");
taskSubmit.addEventListener("click", () => {
  console.log(createTask());
});

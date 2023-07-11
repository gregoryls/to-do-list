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

const testObject = createTask("name", "desc", "date", "low");

const testProject = createProject("test project");

console.log(addTasktoProject(testObject, testProject));

generateTaskDOM(testObject);

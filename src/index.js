import "./style.css";
// import createElementWithId from "./elementCreate";
// import headerCreation from "./header";
// import { sidebarIcon } from "./sidebar";
// import contentCreation from "./content";
import taskCreate from "./task";
import addTasktoProject, { createProject } from "./projects";

// document.body.appendChild(createElementWithId("div", "test"));

// document.body.append(headerCreation(), sidebarCreation(), contentCreation());
// sidebarIcon();

// TODO make a notes tab

console.log(taskCreate("test", "test desc", "tomorrow", 1));

console.log(createProject("test3"));

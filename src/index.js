import "./style.css";
// import createElementWithId from "./elementCreate";
// import headerCreation from "./header";
// import { sidebarIcon } from "./sidebar";
// import contentCreation from "./content";
import taskCreate from "./task";
import createProject from "./projects";

// document.body.appendChild(createElementWithId("div", "test"));

// document.body.append(headerCreation(), sidebarCreation(), contentCreation());
// sidebarIcon();

console.log(taskCreate("test", "test desc", "tomorrow", 1, "n/a"));

console.log(createProject("test2"));
console.log("test");

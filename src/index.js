import "./style.css";
// import createElementWithId from "./elementCreate";
import headerCreation from "./header";
import sidebarCreation from "./sidebar";
import contentCreation from "./content";
import taskCreate from "./task";

// document.body.appendChild(createElementWithId("div", "test"));

document.body.append(headerCreation(), sidebarCreation(), contentCreation());

console.log(taskCreate("test", "test desc", "tomorrow", 1, "n/a"));

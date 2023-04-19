import "./style.css";
import createElementWithId from "./elementCreate";
import headerCreation from "./header";
import sidebarCreation from "./sidebar";
import contentCreation from "./content";

function createPageSections() {
  const wrapper = createElementWithId("div", "contentWrapper");

  // consider doing this section inside modules
  // const header = createElementWithId("section", "header");
  // const sidebar = createElementWithId("section", "sidebar");
  // const content = createElementWithId("section", "content");

  // wrapper.append(header, sidebar, content);

  return wrapper;
}
document.body.appendChild(createPageSections());

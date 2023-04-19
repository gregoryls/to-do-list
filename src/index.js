import "./style.css";
import headerCreation from "./header";
import sidebarCreation from "./sidebar";
import contentCreation from "./content";

export default function createElementWithId(element, id) {
  const elem = document.createElement(element);
  if (id === undefined) return elem;
  elem.id = id;
  return elem;
}

function createPageSections() {
  const wrapper = createElementWithId("div", "contentWrapper");

  const header = createElementWithId("section", "header");
  const sidebar = createElementWithId("section", "sidebar");
  const content = createElementWithId("section", "content");

  wrapper.append(header, sidebar, content);

  return wrapper;
}
document.body.appendChild(createPageSections());

import createElementWithId from "./elementCreate";
import icon from "./img/listIcon.png";

function sidebarDOM() {
  const sidebarWrap = createElementWithId("section", "sidebar");
  // TODO find image for logo

  const logo = createElementWithId("div", "logo");

  sidebarWrap.append(logo);
  return sidebarWrap;
}

export default function sidebarCreation() {
  return sidebarDOM();
}

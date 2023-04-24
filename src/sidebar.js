import createElementWithId, { importImage } from "./elementCreate";
import icon from "./img/listIcon.svg";

function sidebarDOM() {
  const sidebarWrap = createElementWithId("section", "sidebar");

  const logo = createElementWithId("div", "logo");
  logo.append(importImage(icon));

  sidebarWrap.append(logo);
  return sidebarWrap;
}

export default function sidebarCreation() {
  return sidebarDOM();
}

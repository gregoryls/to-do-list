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

export function sidebarIcon() {
  const iconWrapper = document.getElementById("iconWrapper");
  iconWrapper.append(importImage(icon));
}

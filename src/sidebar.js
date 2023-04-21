import createElementWithId from "./elementCreate";

function sidebarDOM() {
  const sidebarWrap = createElementWithId("section", "sidebar");

  const logo = createElementWithId("div", "logo");

  sidebarWrap.append(logo);
  return sidebarWrap;
}

export default function sidebarCreation() {
  return sidebarDOM();
}

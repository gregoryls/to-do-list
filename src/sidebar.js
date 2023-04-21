import createElementWithId from "./elementCreate";

function sidebarDOM() {
  const sidebarWrap = createElementWithId("section", "sidebar");

  // const logo = createElementWithId('div','logo');

  return sidebarWrap;
}

export default function sidebarCreation() {
  return sidebarDOM();
}

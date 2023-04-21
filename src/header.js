import createElementWithId from "./elementCreate";

// const contentWrapper = document.getElementById("contentWrapper");

function headerDOM() {
  const headerWrap = createElementWithId("section", "header");

  const title = createElementWithId("h1", "title");
  title.textContent = "To-Do List";

  headerWrap.append(title);
  return headerWrap;
}

export default function headerCreation() {
  return headerDOM();
}

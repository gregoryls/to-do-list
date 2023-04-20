import createElementWithId from "./elementCreate";

// const contentWrapper = document.getElementById("contentWrapper");

function section() {
  return createElementWithId("section", "header");
}

export default function headerCreation() {
  return section();
}

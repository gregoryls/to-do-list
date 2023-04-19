import createElementWithId from "./index";

const contentWrapper = document.getElementById("contentWrapper");

function section() {
  contentWrapper.appendChild(createElementWithId("section", "header"));
}

export default function headerCreation() {
  return section();
}

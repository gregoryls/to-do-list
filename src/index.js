export default function createElementWithId(element, id) {
  const elem = document.createElement(element);
  if (id === undefined) return elem;
  elem.id = id;
  return elem;
}

document.body.appendChild(createElementWithId("div", "contentWrapper"));

export default function createElementWithId(element, id) {
  const elem = document.createElement(element);
  if (id === undefined) return elem;
  elem.id = id;
  return elem;
}

// 'class' is not allowed as a parameter name
export function createElementWithClass(element, inputClass) {
  const elem = document.createElement(element);
  elem.classList.add(inputClass);
  return elem;
}

export function importImage(source) {
  const img = new Image();
  img.src = source;
  return img;
}

export function createInputElement(type, name, id) {
  const elem = document.createElement("input");
  elem.type = type;
  elem.name = name;
  elem.id = id;

  return elem;
}

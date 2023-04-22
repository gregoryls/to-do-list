export default function createElementWithId(element, id) {
  const elem = document.createElement(element);
  if (id === undefined) return elem;
  elem.id = id;
  return elem;
}

export function importImage(source) {
  const img = new Image();
  img.src = source;
  return img;
}

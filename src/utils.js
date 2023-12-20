export function removeClass(id, className) {
  const element = document.getElementById(id);
  element.classList.remove(className);
}

export function addClass(id, className) {
  const element = document.getElementById(id);
  element.classList.add(className);
}

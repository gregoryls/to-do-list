const modal = document.getElementById("taskModal");
const overlay = document.getElementById("overlay");

export function removeClass(id, className) {
  const element = document.getElementById(id);
  element.classList.remove(className);
  // modal.classList.remove("hidden");
  // overlay.classList.remove("hidden");
}

export function addClass(id, className) {
  const element = document.getElementById(id);
  element.classList.add(className);
  // modal.classList.add("hidden");
  // overlay.classList.add("hidden");
}

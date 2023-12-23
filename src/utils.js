export function removeClass(className, ...IDs) {
  for (let i = 0; i < IDs.length; i += 1) {
    const element = document.getElementById(IDs[i]);
    element.classList.remove(className);
  }
}

export function addClass(className, ...IDs) {
  for (let i = 0; i < IDs.length; i += 1) {
    const element = document.getElementById(IDs[i]);
    element.classList.add(className);
  }
}

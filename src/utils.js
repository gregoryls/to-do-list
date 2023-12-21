export function removeClass(className, ...IDs) {
  // for (const id of IDs) {
  //   const element = document.getElementById(id);
  //   element.classList.remove(className);
  // }

  for (let i = 0; i < IDs.length; i += 1) {
    const element = document.getElementById(IDs[i]);
    element.classList.remove(className);
  }
}

export function addClass(id, className) {
  const element = document.getElementById(id);
  element.classList.add(className);
}

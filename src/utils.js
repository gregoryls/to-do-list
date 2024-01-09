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

export function setDateInputToToday() {
  const dateInput = document.getElementById("taskDueDate");

  // Split at 'T' to remove time info after calendar date;
  const today = new Date().toISOString().split("T")[0];
  dateInput.value = today;
}

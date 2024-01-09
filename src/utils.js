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
  const timeInput = document.getElementById("taskTime");

  const dateTime = new Date();

  // Split at 'T' to remove time info after calendar date;
  const today = dateTime.toISOString().split("T")[0];
  dateInput.value = today;

  // Split at blank character to remove time zone info
  const time = dateTime.toTimeString().split(" ")[0];
  timeInput.value = time;
}

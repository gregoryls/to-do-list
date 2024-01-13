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
  console.log(dateTime);
  const year = dateTime.getFullYear();
  // padStart() to ensure two digit month and day format for date input
  const month = (dateTime.getMonth() + 1).toString().padStart(2, "0");
  const day = dateTime.getDate().toString().padStart(2, "0");
  const today = `${year}-${month}-${day}`;

  dateInput.value = today;

  const oneHourFuture = new Date(dateTime.getTime() + 60 * 60 * 1000);
  const oneHourFutureTime = oneHourFuture.toTimeString().split(" ")[0];
  console.log(oneHourFuture);
  timeInput.value = oneHourFutureTime;
}

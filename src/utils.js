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
  const month = dateTime.getMonth();
  const day = dateTime.getDate();
  const todayy = `${year}-0${month + 1}-${day}`;

  // Split at 'T' to remove time info after calendar date;
  const today = dateTime.toISOString().split("T")[0];
  console.log(today);
  console.log(todayy);
  dateInput.value = todayy;

  // Split at blank character to remove time zone info
  const time = dateTime.toTimeString().split(" ")[0];
  const oneHourFuture = new Date(dateTime.getTime() + 60 * 60 * 1000);
  const oneHourFutureTime = oneHourFuture.toTimeString().split(" ")[0];
  console.log(oneHourFuture);
  timeInput.value = oneHourFutureTime;
}

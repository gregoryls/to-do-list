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
  const month = (dateTime.getMonth() + 1).toString().padStart(2, "0");
  const day = dateTime.getDate().toString().padStart(2, "0");
  const today = `${year}-${month}-${day}`;

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "America/New_York",
  };
  const test = dateTime.toLocaleString("en-US", options).replace(/\//g, "-");
  console.log(today);

  // Split at 'T' to remove time info after calendar date;
  // const today = dateTime.toISOString().split("T")[0];
  // console.log(today);
  // console.log(todayy);
  dateInput.value = today;

  // Split at blank character to remove time zone info
  const time = dateTime.toTimeString().split(" ")[0];
  const oneHourFuture = new Date(dateTime.getTime() + 60 * 60 * 1000);
  const oneHourFutureTime = oneHourFuture.toTimeString().split(" ")[0];
  console.log(oneHourFuture);
  timeInput.value = oneHourFutureTime;
}

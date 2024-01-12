/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "setDateInputToToday": () => (/* binding */ setDateInputToToday)
/* harmony export */ });
function removeClass(className, ...IDs) {
  for (let i = 0; i < IDs.length; i += 1) {
    const element = document.getElementById(IDs[i]);
    element.classList.remove(className);
  }
}

function addClass(className, ...IDs) {
  for (let i = 0; i < IDs.length; i += 1) {
    const element = document.getElementById(IDs[i]);
    element.classList.add(className);
  }
}

function setDateInputToToday() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLCAuLi5JRHMpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IElEcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKElEc1tpXSk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUsIC4uLklEcykge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgSURzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSURzW2ldKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGVJbnB1dFRvVG9kYXkoKSB7XHJcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRHVlRGF0ZVwiKTtcclxuICBjb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaW1lXCIpO1xyXG5cclxuICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc29sZS5sb2coZGF0ZVRpbWUpO1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlVGltZS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IG1vbnRoID0gKGRhdGVUaW1lLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICBjb25zdCBkYXkgPSBkYXRlVGltZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgY29uc3QgdG9kYXkgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICBtb250aDogXCIyLWRpZ2l0XCIsXHJcbiAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgdGltZVpvbmU6IFwiQW1lcmljYS9OZXdfWW9ya1wiLFxyXG4gIH07XHJcbiAgY29uc3QgdGVzdCA9IGRhdGVUaW1lLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucykucmVwbGFjZSgvXFwvL2csIFwiLVwiKTtcclxuICBjb25zb2xlLmxvZyh0b2RheSk7XHJcblxyXG4gIC8vIFNwbGl0IGF0ICdUJyB0byByZW1vdmUgdGltZSBpbmZvIGFmdGVyIGNhbGVuZGFyIGRhdGU7XHJcbiAgLy8gY29uc3QgdG9kYXkgPSBkYXRlVGltZS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICAvLyBjb25zb2xlLmxvZyh0b2RheSk7XHJcbiAgLy8gY29uc29sZS5sb2codG9kYXl5KTtcclxuICBkYXRlSW5wdXQudmFsdWUgPSB0b2RheTtcclxuXHJcbiAgLy8gU3BsaXQgYXQgYmxhbmsgY2hhcmFjdGVyIHRvIHJlbW92ZSB0aW1lIHpvbmUgaW5mb1xyXG4gIGNvbnN0IHRpbWUgPSBkYXRlVGltZS50b1RpbWVTdHJpbmcoKS5zcGxpdChcIiBcIilbMF07XHJcbiAgY29uc3Qgb25lSG91ckZ1dHVyZSA9IG5ldyBEYXRlKGRhdGVUaW1lLmdldFRpbWUoKSArIDYwICogNjAgKiAxMDAwKTtcclxuICBjb25zdCBvbmVIb3VyRnV0dXJlVGltZSA9IG9uZUhvdXJGdXR1cmUudG9UaW1lU3RyaW5nKCkuc3BsaXQoXCIgXCIpWzBdO1xyXG4gIGNvbnNvbGUubG9nKG9uZUhvdXJGdXR1cmUpO1xyXG4gIHRpbWVJbnB1dC52YWx1ZSA9IG9uZUhvdXJGdXR1cmVUaW1lO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
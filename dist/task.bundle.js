/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/elementCreate.js":
/*!******************************!*\
  !*** ./src/elementCreate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElementWithClass": () => (/* binding */ createElementWithClass),
/* harmony export */   "createInputElement": () => (/* binding */ createInputElement),
/* harmony export */   "default": () => (/* binding */ createElementWithId),
/* harmony export */   "importImage": () => (/* binding */ importImage)
/* harmony export */ });
function createElementWithId(element, id) {
  const elem = document.createElement(element);
  if (id === undefined) return elem;
  elem.id = id;
  return elem;
}

// 'class' is not allowed as a parameter name
function createElementWithClass(element, inputClass) {
  const elem = document.createElement(element);
  elem.classList.add(inputClass);
  return elem;
}

function importImage(source) {
  const img = new Image();
  img.src = source;
  return img;
}

function createInputElement(type, name, id) {
  const elem = document.createElement("input");
  elem.type = type;
  elem.name = name;
  elem.id = id;

  return elem;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "generateTaskDOM": () => (/* binding */ generateTaskDOM),
/* harmony export */   "getUserTaskInput": () => (/* binding */ getUserTaskInput)
/* harmony export */ });
/* harmony import */ var _elementCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreate */ "./src/elementCreate.js");


function createTask(name, description, dueDate, priority) {
  return { name, description, dueDate, priority };
}

function getUserTaskInput() {
  const name = document.getElementById("taskName").value;
  console.log(name);
  const description = document.getElementById("taskDescription").value;
  const dueDate = document.getElementById("taskDueDate").value.split("T");
  const priority = document.getElementById("taskPriority").value;

  return { name, description, dueDate, priority };
}

function generateTaskDOM(taskObject) {
  const allTaskElements = document.getElementById("tasks");

  const taskWrapper = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("div", "taskWrapper");

  const taskName = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("p", "taskName");
  taskName.textContent = taskObject.name;
  const taskDescription = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("p", "taskDescription");
  taskDescription.textContent = taskObject.description;
  const taskDueDate = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("p", "taskDueDate");
  taskDueDate.textContent = taskObject.dueDate;
  const taskPriority = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("p", "taskPriority");
  taskPriority.textContent = taskObject.priority;

  taskWrapper.append(taskName, taskDescription, taskDueDate, taskPriority);

  allTaskElements.appendChild(taskWrapper);
}

// TD have a color indicator to go with priority, red yellow green for instance

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUQ7QUFDekQ7QUFDTztBQUNQLFdBQVc7QUFDWDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLHNCQUFzQixzRUFBc0I7QUFDNUM7QUFDQSxtQkFBbUIsc0VBQXNCO0FBQ3pDO0FBQ0EsMEJBQTBCLHNFQUFzQjtBQUNoRDtBQUNBLHNCQUFzQixzRUFBc0I7QUFDNUM7QUFDQSx1QkFBdUIsc0VBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VsZW1lbnRDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aElkKGVsZW1lbnQsIGlkKSB7XHJcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgaWYgKGlkID09PSB1bmRlZmluZWQpIHJldHVybiBlbGVtO1xyXG4gIGVsZW0uaWQgPSBpZDtcclxuICByZXR1cm4gZWxlbTtcclxufVxyXG5cclxuLy8gJ2NsYXNzJyBpcyBub3QgYWxsb3dlZCBhcyBhIHBhcmFtZXRlciBuYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aENsYXNzKGVsZW1lbnQsIGlucHV0Q2xhc3MpIHtcclxuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICBlbGVtLmNsYXNzTGlzdC5hZGQoaW5wdXRDbGFzcyk7XHJcbiAgcmV0dXJuIGVsZW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRJbWFnZShzb3VyY2UpIHtcclxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWcuc3JjID0gc291cmNlO1xyXG4gIHJldHVybiBpbWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnB1dEVsZW1lbnQodHlwZSwgbmFtZSwgaWQpIHtcclxuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGVsZW0udHlwZSA9IHR5cGU7XHJcbiAgZWxlbS5uYW1lID0gbmFtZTtcclxuICBlbGVtLmlkID0gaWQ7XHJcblxyXG4gIHJldHVybiBlbGVtO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyB9IGZyb20gXCIuL2VsZW1lbnRDcmVhdGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gIHJldHVybiB7IG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclRhc2tJbnB1dCgpIHtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTmFtZVwiKS52YWx1ZTtcclxuICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEdWVEYXRlXCIpLnZhbHVlLnNwbGl0KFwiVFwiKTtcclxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1ByaW9yaXR5XCIpLnZhbHVlO1xyXG5cclxuICByZXR1cm4geyBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGFza0RPTSh0YXNrT2JqZWN0KSB7XHJcbiAgY29uc3QgYWxsVGFza0VsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrc1wiKTtcclxuXHJcbiAgY29uc3QgdGFza1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIFwidGFza1dyYXBwZXJcIik7XHJcblxyXG4gIGNvbnN0IHRhc2tOYW1lID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcInBcIiwgXCJ0YXNrTmFtZVwiKTtcclxuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QubmFtZTtcclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwicFwiLCBcInRhc2tEZXNjcmlwdGlvblwiKTtcclxuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LmRlc2NyaXB0aW9uO1xyXG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcInBcIiwgXCJ0YXNrRHVlRGF0ZVwiKTtcclxuICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QuZHVlRGF0ZTtcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwicFwiLCBcInRhc2tQcmlvcml0eVwiKTtcclxuICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LnByaW9yaXR5O1xyXG5cclxuICB0YXNrV3JhcHBlci5hcHBlbmQodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSk7XHJcblxyXG4gIGFsbFRhc2tFbGVtZW50cy5hcHBlbmRDaGlsZCh0YXNrV3JhcHBlcik7XHJcbn1cclxuXHJcbi8vIFREIGhhdmUgYSBjb2xvciBpbmRpY2F0b3IgdG8gZ28gd2l0aCBwcmlvcml0eSwgcmVkIHllbGxvdyBncmVlbiBmb3IgaW5zdGFuY2VcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
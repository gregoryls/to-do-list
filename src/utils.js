const modal = document.getElementById("taskModal");
const overlay = document.getElementById("overlay");

export function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

export function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

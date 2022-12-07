// Get our Elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Build out functions
function handleChange() {
  video[video.paused ? "play" : "pause"]();
}
function updateButton() {
  toggle.textContent = video.paused ? "►" : "❚ ❚";
}
// Event listener's
toggle.addEventListener("click", handleChange);
video.addEventListener("click", handleChange);

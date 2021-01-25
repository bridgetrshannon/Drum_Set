// event listener for keydown
window.addEventListener("keydown", function (e) {
  // searching for audio attribute, using template literal to get the data
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  //   stops function from running if no corresponding key is pressed
  if (!audio) return;

  //   rewinds audio to the start so it will play repeatedly rather than running through the entire clip first
  audio.currentTime = 0;

  //   plays audio
  audio.play();

  //   adds class of playing when key is pressed
  key.classList.add("playing");
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

// add event listener on all keys to end the transition
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

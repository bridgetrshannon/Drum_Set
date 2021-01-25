// event listener for keydown
window.addEventListener("keydown", function (e) {
  // searching for audio attribute, using template literal to get the data
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
});

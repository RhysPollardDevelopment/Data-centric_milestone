$(document).ready(function () {
  setScrollState();
});

function setScrollState() {
  // Suggestion for use of scrollLeft found at
  // https://stackoverflow.com/questions/56392199/
  // make - a - button - to - scroll - horizontally -in -div
  const leftButton = document.getElementById("leftScroll");
  const rightButton = document.getElementById("rightScroll");
  const scrollArea = document.getElementById("favScroll");
  // Removes buttons if less favourite items than overflow requires.
  // Adds justify-content-center if no overflow.
  if (scrollArea) {
    if (scrollArea.clientWidth === scrollArea.scrollWidth) {
      leftButton.style.visibility = "hidden";
      rightButton.style.visibility = "hidden";
      scrollArea.classList.add("justify-content-center")
    } else {
      leftButton.onclick = function () {
        scrollArea.scrollLeft -= 320;
      }
      rightButton.onclick = function () {
        scrollArea.scrollLeft += 320;
      }
    }
  }
}
// Your code here
var dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  //const dodger = document.getElementById("dodger");
  var left = dodger.style.left
    left = parseInt(left)
  
  function moveDodgerRight(){ 
    var newPosition = dodger.style.left
    newPosition = parseInt(newPosition,10)
    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
  }}
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });
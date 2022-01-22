/*Code intended for https://uw.edu */

document.getElementsByClassName("uw-patch")[0].style.transition =
  "transform 500ms";
var degree = 0;

function spin() {
  document.getElementsByClassName("uw-patch")[0].style.transform =
    "rotate(" + degree + "deg)";
  degree = parseFloat(degree) + 2;
}

setInterval(spin, 10);

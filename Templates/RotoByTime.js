function runTime() {
  let d = new Date();
  let s = d.getSeconds() * 5;
  document.getElementsByClassName("uw-patch")[0].style.transform =
    "rotate(" + s + "deg)";
}

setInterval(runTime, 1000);

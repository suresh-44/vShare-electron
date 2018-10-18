let advanceSlider = function (advanceTo) {
  let id = "disp" + advanceTo;
  document.getElementById(id).style.display = "block";

  id = "disp" + (advanceTo - 1);
  document.getElementById(id).style.display = "none";
};

let previousSlide = function (backTo) {
  let id = "disp" + backTo;
  document.getElementById(id).style.display = "none";

  id = "disp" + (backTo + 1);
  document.getElementById(id).style.display = "block";
};

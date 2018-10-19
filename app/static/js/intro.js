let advanceSlider = function (advanceTo) {
  let id = "disp" + advanceTo;
  document.getElementById(id).style.display = "block";

  id = "disp" + (advanceTo - 1);
  document.getElementById(id).style.display = "none";
};

let previousSlide = function (backTo) {
  let id = "disp" + backTo;
  document.getElementById(id).style.display = "block";

  id = "disp" + (backTo + 1);
  document.getElementById(id).style.display = "none";
};

document.getElementById('next-btn-1').onclick = () => {
  advanceSlider(2)
};
document.getElementById('next-btn-2').onclick = () => {
  advanceSlider(3)
};

document.getElementById('prev-btn-1').onclick = () => {
  previousSlide(1)
};
document.getElementById('prev-btn-2').onclick = () => {
  previousSlide(2)
};

document.getElementById('continue-btn').onclick = () => {

};

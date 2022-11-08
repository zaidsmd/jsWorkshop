let space = " ";
let star = "*";
let btn = document.querySelector("#rhombus button");
let drawArea = document.querySelector("#rhombus pre");
let drawArea2 = document.querySelector("#rhombus p.star");
btn.addEventListener("click", function () {
  drawArea.innerHTML = "";
  let rhombusLength = parseInt(document.querySelector("#rhombus input").value);
  let looper = 1;
  if (rhombusLength % 2 === 0) {
    drawArea.innerHTML = `<p style="color:red !important;">Please enter an odd number !!</p>`;
  } else {
    let timesRepeat = (rhombusLength - 1) / 2;
    for (i = timesRepeat; i > 0; i++) {
      drawArea.innerHTML += `${space.repeat(timesRepeat)} ${star.repeat(
        looper
      )} <br>`;
      looper += 2;
      timesRepeat -= 1;
      i = timesRepeat;
    }
    looper = rhombusLength - 2;
    let timesRepeatReveres = 0;
    for (i = timesRepeatReveres; i < rhombusLength; i++) {
      drawArea.innerHTML += `${space.repeat(
        timesRepeatReveres + 1
      )} ${star.repeat(looper)} <br>`;
      looper -= 2;
      timesRepeatReveres += 1;
    }
  }
});

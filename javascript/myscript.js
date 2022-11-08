let dropDownsButtons = document.querySelectorAll(".dropdown-toggle");
let dropDowns = document.querySelectorAll(".dropdown");
let select = document.querySelectorAll("#exercises nav>ul>li>button");
let select2 = document.querySelectorAll("#exercises nav>ul>li>ul>li>button");

//give active to links
function active(b) {
  for (u = 0; u < dropDowns.length; u++) {
    dropDowns[u].classList.remove("show");
  }
  for (o = 0; o < dropDowns.length; o++) {
    select2[o].classList.remove("active");
  }
  for (y = 0; y < select.length; y++) {
    select[y].classList.remove("active");
  }
  b.target.classList.add("active");
}

for (z = 0; z < select.length; z++) {
  select[z].addEventListener("click", active);
}

//give show to sub links
function target(a) {
  let targetInnerHTML = a.target.innerHTML.toLowerCase().replaceAll(" ", "");
  for (u = 0; u < dropDowns.length; u++) {
    dropDowns[u].classList.remove("show");
    if (dropDowns[u].id === targetInnerHTML) {
      dropDowns[u].classList.toggle("show");
    }
  }
}

for (i = 0; i < dropDownsButtons.length; i++) {
  dropDownsButtons[i].addEventListener("click", target);
}

//give active to sub links
function subactive(b) {
  for (y = 0; y < select2.length; y++) {
    select2[y].classList.remove("active");
  }
  b.target.classList.add("active");
}

for (x = 0; x < select2.length; x++) {
  select2[x].addEventListener("click", subactive);
}
//content setter
const allnavlinks = document.querySelectorAll("#exercises li button");

function contentset(e) {
  let clickedlinksinnerhtml = e.target.innerHTML
    .toLowerCase()
    .replaceAll(" ", "");
  console.log(clickedlinksinnerhtml);
  let content = document.querySelectorAll(".exercise>div"),
    contentElement;
  if (
    clickedlinksinnerhtml !== "loop" &&
    clickedlinksinnerhtml !== "stringmethode" &&
    clickedlinksinnerhtml !== "arraymethode"
  ) {
    for (
      contentElement = 0;
      contentElement < content.length;
      contentElement++
    ) {
      content[contentElement].classList.remove("show");
      if (clickedlinksinnerhtml === content[contentElement].ariaLabel) {
        content[contentElement].classList.toggle("show");
      }
    }
  }
  console.log(e);
}

for (button = 0; button < allnavlinks.length; button++) {
  allnavlinks[button].addEventListener("click", contentset);
}

//calculator functions
function concatinate() {
  let number1 = document.querySelector(
    "#calculator input[name='number1']"
  ).value;
  let number2 = document.querySelector(
    "#calculator input[name='number2']"
  ).value;
  let output = document.querySelector("#calculator [readonly]");
  output.value = +number1 + +number2;
}

function subtration() {
  let number1 = document.querySelector(
    "#calculator input[name='number1']"
  ).value;
  let number2 = document.querySelector(
    "#calculator input[name='number2']"
  ).value;
  let output = document.querySelector("#calculator [readonly]");
  output.value = number1 - number2;
}

function multiplication() {
  let number1 = document.querySelector(
    "#calculator input[name='number1']"
  ).value;
  let number2 = document.querySelector(
    "#calculator input[name='number2']"
  ).value;
  let output = document.querySelector("#calculator [readonly]");
  output.value = number1 * number2;
}

function division() {
  let number1 = document.querySelector(
    "#calculator input[name='number1']"
  ).value;
  let number2 = document.querySelector(
    "#calculator input[name='number2']"
  ).value;
  let output = document.querySelector("#calculator [readonly]");
  output.value = number1 / number2;
}

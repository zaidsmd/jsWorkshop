let search = document.querySelector(
  "#stringSearch form div:first-of-type button"
);
let remove = document.querySelector(
  "#stringSearch form div:last-of-type button"
);
let output = document.querySelector("#stringSearch .demo>div:last-of-type");
search.addEventListener("click", () => {
  let sentence = document
    .querySelector("#stringSearch form div:first-of-type input")
    .value.toLowerCase()
    .trim();
  let word = document.querySelector(
    "#stringSearch form div:last-of-type input"
  );
  let index = sentence.indexOf(word.value.toLowerCase().trim());
  if (+index !== -1) {
    output.innerHTML = "Le mot existe!";
  } else {
    output.innerHTML = "Le mot n'existe pas!";
  }
});
remove.addEventListener("click", () => {
  let sentence = document
    .querySelector("#stringSearch form div:first-of-type input")
    .value.toLowerCase()
    .trim();
  let word = document.querySelector(
    "#stringSearch form div:last-of-type input"
  );
  let index = sentence.indexOf(word.value.toLowerCase().trim());
  let afterDelete = sentence.replace(word.value, "");

  output.innerHTML = afterDelete;
});

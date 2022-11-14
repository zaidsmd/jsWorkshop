let validate = document.querySelector("#arraySearch .set button");
let tableLength = document.querySelector(" #arraySearch .set input");
const createTable = `<input type="number">`;
let arrayInput = document.querySelector("#arraySearch .input");
const tableInput = document.querySelector("#arraySearch .array");
const searchButton = document.querySelector("#arraySearch .search button");
const output = document.querySelector("#arraySearch .output");
let searchingKey = document.querySelector("#arraySearch .search input");
let myArray = [];
validate.addEventListener("click", () => {
  arrayInput.classList.remove("hide");
  tableInput.innerHTML = createTable.repeat(parseInt(tableLength.value));
});
searchButton.addEventListener("click", () => {
  for (let i = 0; i < tableLength.value; i++) {
    myArray[i] = document.querySelector(
      `#arraySearch .array input:nth-child(${i + 1})`
    ).value;
  }
  for (let i = 0; i < tableLength.value; i++) {
    if (+myArray[i] === +searchingKey.value) {
      output.innerHTML = `<p style="color: Green">The number you are searching exist in the table (${myArray[i]})</p>`;
      break;
    } else {
      output.innerHTML = `<p style="color: red">The number you are searching doesn't exist in the table (${searchingKey.value})</p>`;
    }
  }
});

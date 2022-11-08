let btn = document.querySelector("#vowel_counter button");
let get = document.querySelector("#vowel_counter form input");
let result = document.querySelector("#vowel_counter table");
function count() {
  result.innerHTML = `<tr>
                        <td>Vowel</td>
                        <td>Count</td>
                    </tr>`;
  let sentence = get.value.replaceAll(" ", "");
  let aCounter = 0;
  let eCounter = 0;
  let oCounter = 0;
  let iCounter = 0;
  let uCounter = 0;
  let yCounter = 0;
  for (i = 0; i < sentence.length; ++i) {
    switch (sentence[i].toLowerCase()) {
      case "a":
        aCounter += 1;
        break;
      case "e":
        eCounter += 1;
        break;
      case "o":
        oCounter += 1;
        break;
      case "i":
        iCounter += 1;
        break;
      case "u":
        uCounter += 1;
        break;
      case "y":
        yCounter += 1;
        break;
    }
  }
  let counter = aCounter + eCounter + iCounter + yCounter + uCounter + oCounter;
  result.classList.add("active");
  result.innerHTML += `
            <tr>
                <td>A</td>
                <td>${aCounter}</td>
            </tr>
             <tr>
                <td>E</td>
                <td>${eCounter}</td>
            </tr>
             <tr>
                <td>I</td>
                <td>${iCounter}</td>
            </tr>
             <tr>
                <td>U</td>
                <td>${uCounter}</td>
            </tr>
             <tr>
                <td>O</td>
                <td>${oCounter}</td>
            </tr>
             <tr>
                <td>Y</td>
                <td>${yCounter}</td>
            </tr>
             <tr>
                <td>Total</td>
                <td>${counter}</td>
            </tr>`;
}
btn.addEventListener("click", count);

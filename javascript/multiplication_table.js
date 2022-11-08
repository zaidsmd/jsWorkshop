let Bouton = document.querySelector("#multiplication-table button");
let table = document.querySelector("#multiplication-table table");
Bouton.addEventListener("click", function () {
  table.classList.add("active");
  table.innerHTML = `<tr>
            <td>Multiplication</td>
            <td>Result</td>
          </tr>`;
  x = document.getElementById("val4").value;
  for (i = 1; i <= 10; i++) {
    let resultat = x * i;
    console.log(x + "" + i + "=" + resultat);
    table.innerHTML += `<tr>
            <td>${x} x ${i} </td>
            <td>${resultat}</td>
          </tr>`;
  }
});
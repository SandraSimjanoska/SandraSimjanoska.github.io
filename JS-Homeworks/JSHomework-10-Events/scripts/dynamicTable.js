function generateTable() {
  let rows = document.getElementById("rows").value;
  let cols = document.getElementById("cols").value;

  let table = "<table>";
  for (let i = 0; i < rows; i++) {
    table += "<tr>";
    for (let s = 0; s < cols; s++) {
      table += `<td>Row ${i + 1}, Column ${s + 1}</td>`;
    }
    table += "</tr>";
  }
  table += "</table>";

  let tableDiv= document.getElementById("table");
  tableDiv.innerHTML = table;
}
let button = document.getElementById("btnGenerate");
button.addEventListener("click", generateTable);

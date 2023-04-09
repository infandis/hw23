const table = document.getElementById("table");
let counter = 1;

for (let i = 0; i < 10; i++) {
  const row = document.createElement("tr");

  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("td");

    cell.innerText = counter;
    row.appendChild(cell);
    counter++;
  }

  table.appendChild(row);
}
  
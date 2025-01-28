// Task 1
// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api.
// The information in the table are:
// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter )
//  There should be a function that prints planets in to the table **API URL: ** https://swapi.py4e.com/api/planets/?page=1
// Task 2
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT
// 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents
// with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a
// new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the
// PREVIOUS 10 button and show the NEXT 10 button.
// **API URL: ** https://swapi.py4e.com/api/planets/?page=2

let currentPage = 1;
const swApiUrl = "https://swapi.py4e.com/api/planets/"; 
let nextPageUrl = "https://swapi.py4e.com/api/planets/?page=2";
let prevPageUrl = null;

const showPlanetsButton = document.getElementById("show-planets-btn");
const tableContainer = document.getElementById("planets-table");
const buttonsContainer = document.getElementById("next-and-previous-btns");

const showPlanetsInTable = (planets) => {
  tableContainer.innerHTML = "";

  const table = document.createElement("table");
  table.style.width = "70%";
  table.style.margin = "20px";
  table.style.borderCollapse = "collapse";

  const headers = ["Planet Name", "Population", "Climate", "Gravity"];
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  for (let i = 0; i < headers.length; i++) {
    const th = document.createElement("th");
    th.textContent = headers[i];
    th.style.border = "3px solid black";
    th.style.padding = "15px";
    th.style.backgroundColor = "rebeccapurple";
    th.style.fontSize = "20px"
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  for (let i = 0; i < planets.length; i++) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.innerText = planets[i].name;
    tdName.style.border = "3px solid gray";
    tdName.style.padding = "10px";

    const tdPopulation = document.createElement("td");
    tdPopulation.innerText = planets[i].population;
    tdPopulation.style.border = "3px solid gray";
    tdPopulation.style.padding = "10px";

    const tdClimate = document.createElement("td");
    tdClimate.innerText = planets[i].climate;
    tdClimate.style.border = "3px solid gray";
    tdClimate.style.padding = "10px";

    const tdGravity = document.createElement("td");
    tdGravity.innerText = planets[i].gravity;
    tdGravity.style.border = "3px solid gray";
    tdGravity.style.padding = "10px";

    tr.appendChild(tdName);
    tr.appendChild(tdPopulation);
    tr.appendChild(tdClimate);
    tr.appendChild(tdGravity);
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  tableContainer.appendChild(table);
};

const fetchPlanetData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showPlanetsInTable(data.results);
      nextPageUrl = data.next;
      prevPageUrl = data.previous;                                                
      updateNavigationButtons();
    })
    .catch((error) => console.error("Error", error));
};

const updateNavigationButtons = () => {
  buttonsContainer.innerHTML = "";

  if (currentPage === 1 && nextPageUrl) {
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next 10 Planets";
    nextButton.addEventListener("click", () => {
      currentPage = 2;
      fetchPlanetData(nextPageUrl);
    });
    buttonsContainer.appendChild(nextButton);
  }

  if (currentPage === 2 && prevPageUrl) {
    const prevButton = document.createElement("button");
    prevButton.innerText = "Previous 10 Planets";
    prevButton.addEventListener("click", () => {
      currentPage = 1;
      fetchPlanetData(prevPageUrl);
    });
    buttonsContainer.appendChild(prevButton);
  }
};

showPlanetsButton.addEventListener("click", () => {
  fetchPlanetData(swApiUrl + "?page=" + currentPage);
});

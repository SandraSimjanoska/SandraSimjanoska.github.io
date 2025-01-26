// Exercise 2
// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:

// Height
// Weight
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1 \

const swApiUrl = "https://swapi.dev/api/people/1";
const getDataBtn = document.getElementById("get-data-btn");
const personName = document.getElementById("person-name");
const personStatsDiv = document.getElementById("person-stats");


function personStatsTable(stats) {
    personStatsDiv.innerHTML = "";

    const table = document.createElement("table");
    table.style.width = "50%";
    table.style.margin = "20px";

    for (const stat of Object.keys(stats)) {
        const tr = document.createElement("tr");
    
        const tdKey = document.createElement("td");
        tdKey.textContent = stat;
        tdKey.style.border = "3px solid black";
        tdKey.style.padding = "10px";
    
        const tdValue = document.createElement("td");
        tdValue.textContent = stats[stat];
        tdValue.style.border = "3px solid black";
        tdValue.style.padding = "10px";
    
        tr.appendChild(tdKey);
        tr.appendChild(tdValue);
    
        table.appendChild(tr);
    }
    personStatsDiv.appendChild(table);
}

getDataBtn.addEventListener("click", function () {
    fetch(swApiUrl)
      .then(function (response) {
        console.log(response);
        const parsedResponse = response.json();
        return parsedResponse;
      })
      .then(function (swData) {
        console.log(swData);
        personName.innerText = swData.name;
           const details = {
            Height: `${swData.height} cm`,
            Weight: `${swData.mass} kg`,
            "Eye Color": swData.eye_color,
            "Hair Color": swData.hair_color,
        };
        personStatsTable(details);

      })
      .catch(function (error) {
        console.log("ERROR:", error);
      });
  });
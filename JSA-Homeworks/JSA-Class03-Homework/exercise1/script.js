// Exercise 1
// Create a button When the button is clicked, get the data from a given url with an HTTP call.
// Print the name of the academy in an h1 tag.
// Print all student names in an unordered list.
// URL: https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json
// NOTE: You need to parse this data before using it.

const url = "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json"
const getDataBtn = document.getElementById("get-data-btn")
const academyName = document.getElementById("academy-name")
const academyStudentsDiv = document.getElementById("academy-students")


function generateStudentsList(studentsArray) {
    academyStudentsDiv.innerHTML = "";
    const ul = document.createElement("ul");

    for (const student of studentsArray) {
        const li = document.createElement("li");
        li.textContent = student; 
        ul.appendChild(li);
    }
   academyStudentsDiv.appendChild(ul);
   console.log(studentsArray)
}

getDataBtn.addEventListener("click", function (){
    fetch(url)
    .then(function (response) {
        console.log(response);
        const parsedResponse = response.json();
        return parsedResponse;
    })
    .then(function (academyData){
        console.log(academyData);
        academyName.innerText = academyData.academy; 
        generateStudentsList(academyData.students);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
      });
})
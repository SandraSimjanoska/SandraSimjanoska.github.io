// HOMEWORK Part 2
// Print all numbers from an array and the sum
// Create an array with numbers +
// Print all numbers from the array in a list element, in the HTML page +
// Print out the sum of all of the numbers below the list +
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let array = [1, 2, 3, 4, 5, 6, 7];
let firstDiv = document.getElementById("listElement");
let sum = 0;
for (let i = 0; i < array.length; i++) {
  firstDiv.innerHTML += `<li>${array[i]}</li>`;
  console.log(array[i]);
  sum += array[i];
}

let secondDiv = document.getElementById("sum");
secondDiv.innerHTML = `This is the sum of the numbers above ${sum}.`;

let thirdDiv = document.getElementById("bonus");
thirdDiv.innerHTML = `(`
for (let i = 0; i < array.length; i++) {
    thirdDiv.innerHTML  += ` ${array[i]}`
    if(i !== array.length - 1){
        thirdDiv.innerHTML  += ' +'
    }else{
        thirdDiv.innerHTML  += ` = ${sum}` 
    }
}
thirdDiv.innerHTML += `)`

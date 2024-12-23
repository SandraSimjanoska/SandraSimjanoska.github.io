// Student Exercise - #2
// Change element style
// On a button click 
// change a paragraph's text color, background color and font size.

let btn = document.getElementById('btn');
let paragraph= document.getElementById('paragraph');

btn.addEventListener('click', function () {
   paragraph.style.color = "pink";
   paragraph.style.backgroundColor = "violet";
   paragraph.style.fontSize = "40px";
});
// HOMEWORK Part 2
// Create a header generator
// Create two inputs, one for text and one for color
// Create a button that says: generate h1
// When the button is clicked create a new header below the inputs and button
// The new header should have the text and color from the inputs
// Additionally create an h3 element for messages
// If the person enters an invalid color or an empty text show an error message in the h3 element
//  You must use JQuery to complete the task

$(document).ready(function() {
    $('#generateButton').click(function() {
        let text = $('#textInput').val();
        let color = $('#colorInput').val();

        if (text === "" || color === "") {
            $('#message').text("Error: Both fields are required.").css("color", "red");
            return; 
        }

        let validateColor = new Option().style;
        validateColor.color = color;

        if (validateColor.color !== color) {
            $('#message').text("Error: Invalid color. Please enter a valid color.").css("color", "red");
            return; 
        }

        $('#message').text("");
        $('#headerContainer').append('<h1 style="color:' + color + '">' + text + '</h1>');
    });
});

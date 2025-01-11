// HOMEWORK Part 1
// Create a greeting app with JQuery
// Create an input
// Create a button
// When clicked the button should print a greet message in an h1 header
// Ex: input: Petko output message: Hello there Petko!
// You must use JQuery to complete the task

$(document).ready(function() {
    $('#greetButton').click(function() {
       let name = $('#nameInput').val();
        $('#greetingMessage').text('Hello there ' + name + '!');
    });
});
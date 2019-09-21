//pick a random number between 19 to 120, set in the
$(document).ready(function () {
    var compGuess = Math.floor(Math.random() * 101) + 19;
    console.log(compGuess)
    $("#computerGuess").text(compGuess)
});


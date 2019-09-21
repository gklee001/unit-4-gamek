//pick a random number between 19 to 120, set in the
$(document).ready(function () {
    //set variables and random equations
    var ruby = Math.floor(Math.random() * 12);
    console.log(ruby)
    $("#ruby").text(ruby)
    //
    var diamond = Math.floor(Math.random() * 12);
    console.log(diamond)
    $("#diamond").text(diamond)
    //
    var Canary = Math.floor(Math.random() * 12);
    console.log(Canary)
    $("#Canary").text(Canary)
    //
    var emerald = Math.floor(Math.random() * 12);
    console.log(emerald)
    $("#emerald").text(emerald)




    var compGuess = Math.floor(Math.random() * 101) + 19;
    console.log(compGuess)
    $("#computerGuess").text(compGuess)
});


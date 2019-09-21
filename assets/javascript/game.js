//pick a random number between 19 to 120, set in the
$(document).ready(function () {
    //set variables and random equations
    var ruby = Math.floor(Math.random() * 12);
    console.log(ruby)

    //
    var diamond = Math.floor(Math.random() * 12);
    console.log(diamond)

    //
    var canary = Math.floor(Math.random() * 12);
    console.log(canary)

    //
    var emerald = Math.floor(Math.random() * 12);
    console.log(emerald)

    var win = 0
    $("#wins").text(win)
    var lose = 0
    $("#losses").text(lose)
    var score = 0;


    var compGuess = Math.floor(Math.random() * 101) + 19;
    console.log(compGuess)
    $("#computerGuess").text(compGuess)

    $("#ruby").on('click', function () {
        console.log('ruby click')
        score += ruby;
        $("#yourScore").text(score)
        checkGame();
    })
    $("#diamond").on('click', function () {
        score += diamond;
        $("#yourScore").text(score)
        checkGame();
    })
    $("#canary").on('click', function () {
        score += canary;
        $("#yourScore").text(score)
        checkGame();
    })
    $("#emerald").on('click', function () {
        score += emerald;
        $("#yourScore").text(score)
        checkGame();
    })

    function checkGame() {
        if (score === compGuess) {
            win++;
            score = 0;
            compGuess = Math.floor(Math.random() * 101) + 19;
            $("#wins").text(win)
            $("#losses").text(lose)

        } else if (score > compGuess) {
            lose--;
            score = 0;
            compGuess = Math.floor(Math.random() * 101) + 19;
            $("#wins").text(win)
            $("#losses").text(lose)
        }
    }

});


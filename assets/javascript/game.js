//pick a random number between 19 to 120, set in the
$(document).ready(function () {
    //set variables and random equations
    var ruby = Math.floor(Math.random() * 12);
    console.log(ruby)

    //set variables and random guess for diamond
    var diamond = Math.floor(Math.random() * 12);
    console.log(diamond)

    //same thing but for yellow
    var canary = Math.floor(Math.random() * 12);
    console.log(canary)

    //same but for emerald
    var emerald = Math.floor(Math.random() * 12);
    console.log(emerald)
    //variables for wins and loses, use jquery, with variable that start with 0, then use the dive id and put the text for the variable into those divs
    var win = 0
    $("#wins").text(win)
    var lose = 0
    $("#losses").text(lose)
    var score = 0;

    //use a variable that will punch out a random number
    var compGuess = Math.floor(Math.random() * 101) + 19;
    console.log(compGuess)
    //push the computer guess text into that div
    $("#computerGuess").text(compGuess)
    //to add the clicks for each stone
    $("#ruby").on('click', function () {
        console.log('ruby click')
        //concatinate and continue adding
        score += ruby;
        $("#yourScore").text(score)
        //need to do a check
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
    //create a condition to when your guesses do equal the computer guess
    function checkGame() {
        if (score === compGuess) {
            //add those wins
            win++;
            score = 0;
            compGuess = Math.floor(Math.random() * 101) + 19;
            //push the text for wins and loses to the correct divs
            $("#wins").text(win)
            $("#losses").text(lose)

        } else if (score > compGuess) {
            //else condition
            lose--;
            score = 0;
            compGuess = Math.floor(Math.random() * 101) + 19;
            $("#wins").text(win)
            $("#losses").text(lose)

        }//display computer guess also
        $("#computerGuess").text(compGuess)
    }

});


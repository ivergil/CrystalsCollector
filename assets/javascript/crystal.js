$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var total = 0;
    var matchRandom = 0;
    var crystals = ["", "", "", ""];

    function initGame() {
        generateRandoms();
        total = 0;
        $(".score").html(total);
    }
    function generateRandoms() {
        for (let i = 0; i < crystals.length; i++) {
            crystals[i] = (Math.floor(Math.random() * 12) + 1);
            let x = i + 1;
            // console.log("Crystal " + x + " = " + crystals[i]);
        }
        matchRandom = (Math.floor(Math.random() * 101) + 19);
        $(".match").html(matchRandom);
    }

    $("#crystal-1").on("click", function () {
        total = total + crystals[0];
        $(".score").html(total);
        winOrLosses();
    });
    $("#crystal-2").on("click", function () {
        total = total + crystals[1];
        $(".score").html(total);
        winOrLosses();
    });
    $("#crystal-3").on("click", function () {
        total = total + crystals[2];
        $(".score").html(total);
        winOrLosses();
    });
    $("#crystal-4").on("click", function () {
        total = total + crystals[3];
        $(".score").html(total);
        winOrLosses();
    });

    function winOrLosses() {
        if (total === matchRandom) {
            wins = wins + 1;
            $(".wins").html(wins);
            alert("YOU'VE WON!!!");
            initGame();
        } else if (total > matchRandom) {
            losses = losses + 1;
            $(".losses").html(losses);
            alert("YOU'VE LOST");
            initGame();
        }
    }

    $("#btn-reset").on("click", function () {
        resetGame();
    });
    function resetGame(){
        wins = 0;
        losses = 0;
        total = 0;
        $(".wins").html(wins);
        $(".losses").html(losses);
        $(".score").html(total);
        initGame();
    }
    initGame();
});
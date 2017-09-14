var numMatch; //number for user to match
var wins = 0;
var loss = 0;
var turnCount = 15;
var diamond; //diamond image
var ruby; //ruby image
var emerald; //emerald image
var sapphire; //sapphire image
var userScore = 0;


$(document).ready(function () {

    // generate random number between 19 and 120 for mumber to guess
    // generate random number between 1 and 12 for each image 
    function getRandInt(max, min) {
        return Math.floor(max - Math.random() * (max - min));
    }



    // as user clicks crystals add points to user score
    function updateNums() {
        // update spaces with randomly generated numbers
        numMatch = getRandInt(120, 19);
        $("#randNum").html(numMatch);
        diamond = getRandInt(12, 1);
        ruby = getRandInt(12, 1);
        emerald = getRandInt(12, 1);
        sapphire = getRandInt(12, 1);
        $("#turns").html(turnCount);
        
        $("#diamond").on("click", function () {
            userScore += diamond;
            turnCount--;
            $("#userScore").html(userScore);
            $("#turns").html(turnCount);
        })
        $("#ruby").on("click", function () {
            userScore += ruby;
            turnCount--;
            $("#userScore").html(userScore);
            $("#turns").html(turnCount);
        })
        $("#emerald").on("click", function () {
            userScore += emerald;
            turnCount--;
            $("#userScore").html(userScore);
            $("#turns").html(turnCount);
        })
        $("#sapphire").on("click", function () {
            userScore += sapphire;
            turnCount--;
            $("#userScore").html(userScore);
            $("#turns").html(turnCount);
        })
    }

    
    function winLose() {
        $("img").on("click", function () {
            if (turnCount === 0 && userScore < numMatch || userScore > numMatch) {
                alert("Sorry, you lose.");
                loss++;
                $("#losses").html(loss);
                console.log("I'm here");
                reset();
                // if user score is over or less than number to guess user loses
            // } else if (turnCount === 0 && userScore > numMatch) {
            //     alert("Sorry, you lose.");
            //     loss++;
            //     $("#losses").html(loss);
            //     console.log("I'm here 2");
            //     reset();
                // if user score matches number to guess generate win
            } else if (userScore === numMatch) {
                alert("You win!");
                wins++;
                $("#wins").html(wins);
                console.log("I'm here 3");
                reset();
            }
        })
    }
    
    function playGame(){
        updateNums();
        winLose();
    }

    // reset game/new game function
    function reset(){
        turnCount = 15;
        $("#turns").html(turnCount);
        userScore = 0;
        $("#userScore").html(userScore);
        }

    playGame();

});
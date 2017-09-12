var numMatch ; //number for user to match
var wins = 0;
var loss = 0;
var diamond ; //diamond image
var ruby ; //ruby image
var emerald ; //emerald image
var sapphire ; //sapphire image
var userScore = 0;


$(document).ready(function(){

    // generate random number between 19 and 120 for mumber to guess
     function getRandInt(max, min) {
        return Math.floor(max - Math.random()*(max-min));
      }
      
      numMatch = getRandInt(120, 19);
      $("#randNum").html(numMatch);
    // generate random number between 1 and 12 for each image 
      diamond = getRandInt(12, 1);
      ruby = getRandInt(12, 1);
      emerald = getRandInt(12, 1);
      sapphire = getRandInt(12, 1);
    // as user clicks crystals add points to user score
      $("#diamond").on("click", function(){
          userScore += diamond;
          $("#userScore").html(userScore); 
      })
      $("#ruby").on("click", function(){
        userScore += ruby;
        $("#userScore").html(userScore); 
    })
    $("#emerald").on("click", function(){
        userScore += emerald;
        $("#userScore").html(userScore); 
    })
    $("#sapphire").on("click", function(){
        userScore += sapphire;
        $("#userScore").html(userScore); 
    })
    // if user score matches number to guess generate win

    // if user score is over number to guess lose

    // reset game/new game function

});

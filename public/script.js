//var displayScores = (function(e) {
//    alert("load")
//    e.preventDefault();
//   $.get("/players",
//        function(data) {
//            $("#scores").html(data);
//        }
//    );
//});

//$(".one").on("click", displayScores);
//$(function() {
//    $( "#draggable" ).draggable();
//    $( ".droppable" ).droppable({
//        drop: function( event, ui ) {
//            $( this )
//                .addClass( "ui-state-highlight" )
//                .find( "#catch" )
//            $("#alert").append( "Correct!" );
//
//        }
//    });
//});

$("#top").on("click", function(){

     $("#countdown").toggle();
});

var displayScores2 = (function(e) {
    e.preventDefault();
    $.get("/players",
        function(data) {
            $("#wrap").slideUp(
                800, function() {
                    $("#scores")
                        .html(data)
                        .slideDown(800);

                });

        }
    );
});

$(".one").on("click", displayScores2);



var score = 0;
var lives = 3;

var playAgain = (function(){
    alert("Better Luck This Time")
    location.reload();
});




var showScore = (function(){
    $("#score").empty();
    $("#score").text("Score: " + score).slideDown(800);
    $("#score").delay(700).slideUp(800);
});

showScore();

var showLives = (function(){
    $("#lives").empty();
    $("#lives").text("Lives: " + lives).slideDown(800);
    $("#lives").delay(700).slideUp(800);

});

showLives();

//chop

var endGame = (function () {


    var finalScore = score + lives;

    clearInterval(countdown_interval);
    $("#top").text("TIME UP PAL!").delay(700).slideUp(800);

    //$('body').css('background-color', 'red');

    var person = prompt("End Of Quiz! Your Score was " + finalScore ,"");

    if(person != "" && person != null)
    {
    var jsonobject = {
        player: {
            name: person,
            score: finalScore
        }
    };

    $.ajax({
        url: "http://localhost:3000/players",
        type: "POST",
        data: jsonobject

    });
    }
    $(".questions").empty();
    $("#wrap").append("<img src='end.fw.png' />");
    displayScores2();


});



//chop

$('.questions').shuffle();
var totalQuestions = $('.questions').size();

var currentQuestion = 0;


$questions = $('.questions');
$questions.hide();
$($questions.get(currentQuestion)).fadeIn();


var next = function () {

    $($questions.get(currentQuestion)).fadeOut(function () {

        currentQuestion = currentQuestion + 1;

        if (currentQuestion == totalQuestions) {

            var person = prompt("Top Of The Muffin To You! That's a high score.");

            if(person != "" && person != null)
            {
                var jsonobject = {
                    player: {
                        name: person,
                        score: score
                    }
                };

                $.ajax({
                    url: "http://localhost:3000/players",
                    type: "POST",
                    data: jsonobject

                });
            }
            clearInterval(countdown_interval);
            $("#wrap").append("<img src='good.fw.png' />");

        } else {

            $($questions.get(currentQuestion)).fadeIn();

        }
    });

};

function getAnswer(input) {
    if (input == "true") {

        score++;

        //$("#alert").text("Correct");
        $("#alert").empty();
        $("#alert").fadeIn(300);
        $("#alert").append("<img src='tick.fw.png' />");
        $("#alert").delay(700).fadeOut(300);




            next();
            showScore();



    }
    else {
        $("#alert").empty();
        $("#alert").fadeIn(300);
        $("#alert").append("<img src='x.fw.png' />");
        $("#alert").delay(700).fadeOut(300);




        lives--;
    }
    showLives();
    if(lives == 0) {
        endGame();
    }

}










var max_countdown = 60;

var countdown = max_countdown;

var display_countdown = (function() {
    $("#countdown").text("Time Left: " + countdown);
});

var countdown_interval = setInterval(function() {
    countdown--;
    //decrements countdown
    display_countdown();

    if(countdown == 0){
        endGame();}

}, 1000 );


	

	
	
	
	


	
	












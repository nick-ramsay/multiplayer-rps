var gameMessage = "Testing... 123";

var winningScore = 5;
var playerOneScore = 0;
var playerTwoScore = 0;
var tieCount = 0;

var currentPlayer;

var playerOneCurrentChoice = "";
var playerTwoCurrentChoice = "";


$(document).on("click", ".currentPlayerControls", function () {
    if (currentPlayer === 0) {

        playerOneCurrentChoice = $(this).attr("data-control-id");

        winLossTie();

        currentPlayer = 1;
    } else {
        playerTwoCurrentChoice = $(this).attr("data-control-id");

        currentPlayer = 0;
    }

    renderGameStats();

})

function showPlayerGuesses() {
    $("#playerOneImgContainer").empty();
    var playerOneImageDiv = '<img id="playerOneChoiceImage" alt="Game Choice Image">';
    var playerOneImageSrc = "../multiplayer-rps/assets/images/" + playerOneCurrentChoice + ".png";
    $("#playerOneImgContainer").append(playerOneImageDiv);
    $("#playerOneChoiceImage").attr("src", playerOneImageSrc);

    $("#playerTwoImgContainer").empty();
    var playerTwoImageDiv = '<img id="playerTwoChoiceImage" alt="Game Choice Image">';
    var playerTwoImageSrc = "../multiplayer-rps/assets/images/" + playerTwoCurrentChoice + ".png";
    $("#playerTwoImgContainer").append(playerTwoImageDiv);
    $("#playerTwoChoiceImage").attr("src", playerTwoImageSrc);
}

function winLossTie() {
    if (playerOneCurrentChoice !== "" && playerTwoCurrentChoice !== "" && playerOneScore <= 5 && playerTwoScore <= 5) {
        showPlayerGuesses();
        if ((playerOneCurrentChoice === "scissors" && playerTwoCurrentChoice === "paper") || (playerOneCurrentChoice === "rock" && playerTwoCurrentChoice === "scissors") || (playerOneCurrentChoice === "paper" && playerTwoCurrentChoice === "rock")) {
            playerOneScore++;
        } else if (playerOneCurrentChoice === playerTwoCurrentChoice) {
            console.log("You've Tied! Try again!");
            tieCount++;
        } else {
            console.log("You've lost!")
            playerTwoScore++;
        }
        playerOneCurrentChoice = "";
        playerTwoCurrentChoice = "";
    }
}

function renderCurrentPlayerControls() {
    var currentPlayerControls = '<div class="row"><div class="col-md-4"><a id="rockBtn" data-control-id="rock" class="currentPlayerControls"><img class="controlImg" src="assets/images/rock.png"></a></div><div class="col-md-4"><a id="paperBtn" data-control-id="paper" class="currentPlayerControls"><img class="controlImg" src="assets/images/paper.png"></a></div><div class="col-md-4"><a id="scissorsBtn" class="currentPlayerControls" data-control-id="scissors"><img class="controlImg" src="assets/images/scissors.png"></a></div></div>';

    if (currentPlayer === 0) {
        $("#playerTwoControls").empty();
        $("#playerOneControls").append(currentPlayerControls);
    } else {
        $("#playerOneControls").empty();
        $("#playerTwoControls").append(currentPlayerControls);
    }
}



function renderGameStats() {
    $("#gameMessage").text(gameMessage);
    $("#playerOneScore").text(playerOneScore);
    $("#playerTwoScore").text(playerTwoScore);
    $("#tieCount").text(tieCount);
    renderCurrentPlayerControls();
}

function pickFirstPlayer() {
    currentPlayer = Math.floor(Math.random() * 2);
}

window.onload = pickFirstPlayer;
window.onload = renderGameStats;


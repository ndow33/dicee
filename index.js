//store the image titles strings in a list
var diceImages = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png']
//keep track of the score for each player
var player1ScoreCount = 0
var player2ScoreCount = 0



function roll(elementToChange){
    //get two random numbers that will determine which dice appear to the user
    var dice1 = Math.floor(Math.random()*6);
    var dice2 = Math.floor(Math.random()*6);
    //based on those numbers, return the strings for the images representing those numbers
    var image1 = diceImages[dice1];
    var image2 = diceImages[dice2];
    //get the image elements
    var onPageDice = document.querySelectorAll('img');
    //replace the current image sources with the randomly generated strings
    onPageDice[0].src = ("images/"+image1);
    onPageDice[1].src = ("images/"+image2);
    //store the h1 elements as the winner
    var winner = document.querySelector(elementToChange);
    //get the player's current scores
    var player1Score = document.getElementById("player1Score");
    var player2Score = document.getElementById("player2Score");
    //Announce the winner
    if (dice1>dice2){
        winner.innerText = "Player 1 Wins!!!";
        player1ScoreCount++
        player1Score.innerHTML = player1ScoreCount;
    }
    if (dice1<dice2){
        winner.innerText = "Player 2 Wins!!!";
        player2ScoreCount++
        player2Score.innerHTML = player2ScoreCount;
    }
    if (dice1===dice2){
        winner.innerText = "It's a Draw - Roll Again!"
    }
    
}
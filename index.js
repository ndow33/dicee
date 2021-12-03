//store the image titles strings in a list
var diceImages = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png']
//keep track of the score for each player
var player1ScoreCount = 0
var player2ScoreCount = 0

function winningCard1(){
    player1Card.classList.add('text-white');
    player1Card.classList.add('bg-success');
    player2Card.classList.remove('text-white');
    player2Card.classList.remove('bg-success');
}

function winningCard2(){
    player2Card.classList.add('text-white');
    player2Card.classList.add('bg-success');
    player1Card.classList.remove('text-white');
    player1Card.classList.remove('bg-success');
}

function draw(){
    player1Card.classList.remove('text-white');
    player1Card.classList.remove('bg-success');
    player2Card.classList.remove('text-white');
    player2Card.classList.remove('bg-success');
}



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
    //get the player's cards
    var player1Card = document.getElementById("player1Card");
    var player2Card = document.getElementById("player2Card");

    //Announce the winner
    if (dice1>dice2){
        winner.innerText = "Player 1 Wins!!!";
        player1ScoreCount++
        player1Score.innerHTML = player1ScoreCount;
        //Change the color of the cards to red and green
        winningCard1();
    }
    if (dice1<dice2){
        winner.innerText = "Player 2 Wins!!!";
        player2ScoreCount++
        player2Score.innerHTML = player2ScoreCount;
        //Change the color of the cards to red and green
        winningCard2();
    }
    if (dice1===dice2){
        winner.innerText = "It's a Draw - Roll Again!"
        //Change the color of the cards to blue
        draw();
    }
    
}
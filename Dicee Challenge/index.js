const player1 = document.getElementById("Player1");
const player2 = document.getElementById("Player2");

var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

player1.querySelector("#Player1 img").setAttribute("src", `images/dice${num1}.png`); 
player2.querySelector("img").setAttribute("src", `images/dice${num2}.png`); 

if(num1 > num2){
    document.querySelector(".container h1").textContent = "Player 1 Wins!";
}
else if(num2 > num1){
    document.querySelector(".container h1").textContent = "Player 2 Wins!";
}
else{
    document.querySelector(".container h1").textContent = "It's a tie!";
}
const choices = document.querySelectorAll('.choice');
const restart = document.getElementById('restart');
const result = document.getElementById('result');
const modal = document.querySelector('.modal');
const score = document.getElementById('score');
scoreboard = {
    player: 0,
    computer: 0
};

// Call to play
function play(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

// Get computer choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    }else if(rand <= 0.66) {
        return 'paper';
    }else {
        return 'scissors';
    }
}

function getWinner(p, c) {
    if(p === c) {
        return 'draw';
    }else if(p === 'rock' && c === 'paper') {
        return 'computer';
    }else if(p === 'paper' && c === 'scissors') {
        return 'computer';
    }else if(p === 'scissors' && c === 'rock') {
        return 'computer';
    }else {
        return 'player';
    }
}

function showWinner(winner, computerChoice) {
    if(winner === 'player') {
        //Inc player score
        scoreboard.player++;
        // Show modal
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
            computerChoice.slice(1)}</strong></p>
        `;
    }else if(winner === 'computer') {
        //Inc computer score
        scoreboard.computer++;
        // Show modal
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
            computerChoice.slice(1)}</strong></p>
        `;
    }else {
        // Show modal
        result.innerHTML = `
        <h1>It's A Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
            computerChoice.slice(1)}</strong></p>
        `;
    }
    //Show scoreboard
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;

    modal.style.display = 'block';
}

//Clear modal
function clearModal(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

//Restart game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `;
}

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

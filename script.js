const startButton = document.getElementById('startButton');
const flower = document.getElementById('flower');
const timeLeftDisplay = document.getElementById('timeLeft');
const resultText = document.getElementById('resultText');
const backToMenuButton = document.getElementById('backToMenuButton');
const gameContainer = document.getElementById('game');

let gameInterval;
let timeLeft = 5;
let kills = 0;

startButton.addEventListener('click', () => {
    startGame();
});

flower.addEventListener('click', () => {
    if (gameInterval) {
        kills++;
        updateResult();
        resetFlowerPosition();
    }
});

backToMenuButton.addEventListener('click', () => {
    showPage('menu');
});

function startGame() {
    showPage('game');
    timeLeft = 5;
    kills = 0;
    updateResult();
    gameInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) {
            endGame();
        } else {
            updateResult();
            resetFlowerPosition();
        }
    }, 1000);
}

function endGame() {
    clearInterval(gameInterval);
    gameInterval = null;
    showPage('results');
}

function updateResult() {
    timeLeftDisplay.textContent = timeLeft;
    resultText.textContent = `Kills: ${kills}`;
}

function resetFlowerPosition() {
    const x = Math.random() * (gameContainer.clientWidth - flower.clientWidth);
    const y = Math.random() * (gameContainer.clientHeight - flower.clientHeight);
    flower.style.left = `${x}px`;
    flower.style.top = `${y}px`;
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// Initially show the menu page
showPage('menu');
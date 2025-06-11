const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const DOM = {
    player: $('#player'),
    computer: $('#computer'),
    up: $('#up'),
    down: $('#down'),
    left: $('#left'),
    right: $('#right'),
    result: $('#result'),
    resultText: $('#result-text'),
    playerChoice: $('#player-choice'),
    computerChoice: $('#computer-choice'),
};

function eventListeners() {
    DOM.up.addEventListener('click', () => selectDirection('上'));
    DOM.down.addEventListener('click', () => selectDirection('下'));
    DOM.left.addEventListener('click', () => selectDirection('左'));
    DOM.right.addEventListener('click', () => selectDirection('右'));
}

function selectDirection(direction) {
    DOM.playerChoice.textContent = direction;
    const computerDirection = getRandomDirection();
    DOM.computerChoice.textContent = computerDirection;
    
    if (direction === computerDirection) {
        DOM.resultText.textContent = 'あなたの勝ちです！';
    } else {
        DOM.resultText.textContent = 'コンピューターの勝ちです！';
    }
}

function getRandomDirection() {
    const directions = ['上', '下', '左', '右'];
    return directions[Math.floor(Math.random() * directions.length)];
}

function resetGame() {
    DOM.playerChoice.textContent = '';
    DOM.computerChoice.textContent = '';
    DOM.resultText.textContent = '';
}

function startGame() {
    resetGame();
    DOM.playerChoice.textContent = 'ゲームを開始しました！';
    DOM.computerChoice.textContent = 'コンピューターの選択を待っています...';
    DOM.resultText.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
    resetGame();
});
// This script handles the game logic and UI interactions for a simple direction-based game.

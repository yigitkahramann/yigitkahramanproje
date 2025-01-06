const catchDiv = document.getElementById('catchDiv');
const gameArea = document.querySelector('.game-area');

function moveDivRandomly() {
    const gameAreaRect = gameArea.getBoundingClientRect();
    const maxX = gameAreaRect.width - catchDiv.offsetWidth;
    const maxY = gameAreaRect.height - catchDiv.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    catchDiv.style.left = randomX + 'px';
    catchDiv.style.top = randomY + 'px';
}

catchDiv.addEventListener('mouseenter', function () {
    moveDivRandomly();
});

moveDivRandomly();

const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 50,
    height: 30,
    dx: 5
};

const obstacles = [];
const obstacleWidth = 50;
const obstacleHeight = 30;
let lastObstacleTime = 0;

function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function createObstacle() {
    const obstacleX = Math.random() * (canvas.width - obstacleWidth);
    const obstacle = {
        x: obstacleX,
        y: 0 - obstacleHeight,
        width: obstacleWidth,
        height: obstacleHeight,
        dy: 2
    };
    obstacles.push(obstacle);
}

function drawObstacles() {
    ctx.fillStyle = 'red';
    for (let obs of obstacles) {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    }
}

function updateObstacles() {
    for (let obs of obstacles) {
        obs.y += obs.dy;
    }
}

function checkCollision() {
    for (let obs of obstacles) {
        if (
            player.x < obs.x + obs.width &&
            player.x + player.width > obs.x &&
            player.y < obs.y + obs.height &&
            player.y + player.height > obs.y
        ) {
            alert("Przegrana!");
            document.location.reload();
        }
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight' && player.x + player.width < canvas.width) {
        player.x += player.dx;
    } else if (event.key === 'ArrowLeft' && player.x > 0) {
        player.x -= player.dx;
    }
});

function gameLoop(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timestamp - lastObstacleTime > 2000) {
        createObstacle();
        lastObstacleTime = timestamp;
    }

    drawPlayer();
    drawObstacles();
    updateObstacles();
    checkCollision();

    requestAnimationFrame(gameLoop);
}

gameLoop(0);
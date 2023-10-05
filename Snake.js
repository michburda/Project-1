const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const boxSize = 20;
    let snake = [{x: 10, y: 10}];
    let food = {x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20)};
    let dx = 0;
    let dy = 0;

    document.addEventListener("keydown", direction);

    function direction(event) {
        if (event.keyCode === 37 && dx === 0) { 
            dx = -1; dy = 0;
        }
        if (event.keyCode === 38 && dy === 0) { 
            dx = 0; dy = -1;
        }
        if (event.keyCode === 39 && dx === 0) { 
            dx = 1; dy = 0;
        }
        if (event.keyCode === 40 && dy === 0) { 
            dx = 0; dy = 1;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        
        for(let i = 0; i < snake.length; i++) {
            ctx.fillStyle = i === 0 ? "green" : "white";
            ctx.fillRect(snake[i].x * boxSize, snake[i].y * boxSize, boxSize, boxSize);
            ctx.strokeStyle = "black";
            ctx.strokeRect(snake[i].x * boxSize, snake[i].y * boxSize, boxSize, boxSize);
        }

        
        ctx.fillStyle = "red";
        ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);

        
        let snakeX = snake[0].x + dx;
        let snakeY = snake[0].y + dy;

        if(snakeX === food.x && snakeY === food.y) {
            food = {
                x: Math.floor(Math.random() * 20),
                y: Math.floor(Math.random() * 20)
            };
        } else {
            snake.pop(); 
        }

        
        let newHead = {
            x: snakeX,
            y: snakeY
        };

        
        if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width/boxSize || snakeY >= canvas.height/boxSize || collision(newHead, snake)) {
            clearInterval(game);
            alert("Przegrana!");
        }

        snake.unshift(newHead);
    }

    function collision(head, array) {
        for (let i = 0; i < array.length; i++) {
            if (head.x === array[i].x && head.y === array[i].y) return true;
        }
        return false;
    }

    let game = setInterval(draw, 150);
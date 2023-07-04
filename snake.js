// const snakeboard=document.getElementById("gameCanvas");
// const snakeboard_ctx=gameCanvas.getContext("2d");

//Now for the snake we need to specify the initial location of our snake
console.log('hello game');
let changing_direction = false;
const board_border = 'black';
const board_back = "white";
const snake_col = "lightblue";
const snake_border = "darkblue";
let snake =
    [{ x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 },
    ];

//Horizontal velocity
let dx = 10;
// Vertical velocity 
let dy = 0;
// get the canvas element 
let snakeboard = document.getElementById('snakeboard');
//return a two dimesnional drawing context
let snakeboard_ctx = snakeboard.getContext("2d");
main();
document.addEventListener('keydown', change_direction);
// main function called repeatedly to keep the game running 
function main() {
    changing_direction = false;
    setTimeout(function onTick() {
        move_snake();
        clearCanvas();
        drawSnake();
        main();
    }, 100)
}
// draw a border around the canvas 
function clearCanvas() {
    // Select the colour to fill the Drawing;

    snakeboard_ctx.fillStyle = board_back;
    // select the colour for the border of the canvas 
    snakeboard_ctx.strokestyle = board_border;
    // Draw a "filled " rectangle to cover the entire canvas
    snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
    // Draw a border around the snake part
    snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);

}
function drawSnake() {
    snake.forEach(drawSnakePart);
}
function drawSnakePart(snakePart) {
    // set the colour of the snake part
    snakeboard_ctx.fillStyle = snake_col;
    // Set the border colour of the snake part 
    snakeboard_ctx.strokestyle = snake_border;
    // Draw  a filled rectangle  to represent the snake part at the coordinates 
    // the part is located
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    //Draw a border around the snake part
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);

}


// Using arrow keys to change the sanke's directon when one of the arrow key is pressed

// changing direction :- let's make the function change_direction .This will check if the key pressed matches one   

function change_direction(event) {
    const leftkey = 37;
    const rightkey = 39;
    const upkey = 38;
    const downkey = 40;
    // prevent the sanke from reversing 
    if (changing_direction) return
    changing_direction = true;
    const keypressed = event.keyCode;
    console.log(keypressed);
    const goingup = dy === -10;
    const goingdown = dy === 10;
    const goingright = dx === 10;
    const goingleft = dx === -10;

    if (keypressed === leftkey && !goingright) {
        dx = -10;
        dy = 0;
    }
    if (keypressed === upkey && !goingdown) {
        dx = 0;
        dy = -10;
    }
    if (keypressed === rightkey && !goingleft) {
        dx = 10;
        dy = 0;
    }
    if (keypressed === downkey && !goingup) {
        dx = 0;
        dy = 10;
    }
}

// Adding boundary condition:- to prevent our snake from moving infinitely, we need to add boundary conditions.for the 
// / Now the further task is to make snake move automatically
// We have our canvas and our snake , but we need to snake to move so it can navigate the game space in all directions 

// For the horizontal Movement 
// To make the snake move one step (10px ) to the right , we can increase the coordinate of the x-coordinate of every part of the snake by 10px (dx=+10);

// function declaration for the movement
function move_snake() {
    //Create the new snakes head
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    snake.pop();
}

function had_gameend() {
    {
        for (let i = 4; i < snake.length; i++) {

        }
    }
}

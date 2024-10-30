
let posX = 200;
let posY = 200;
let w1 = 50;
let h1 = 50;
let xSpeed = 10;
let ySpeed = 10;
let yVelocity = 0;
let gravity = 0.2;
let isJumping = false;
let obstacle1;
let obstacle2;



function setup() {
  createCanvas(400, 400);
  obstacle1 = new Obstacle(100, 300, 50, 50);
  obstacle2 = new Obstacle(200, 100, 50, 50);
}

function draw() {
  background(0);
  fill(255, 0, 0);
  rect(posX, posY, w1, h1);
  stroke(255, 255, 255);


  if (posY < height - 50) {
    yVelocity += gravity;
    isJumping = true;
  } else {
    yVelocity = 0;
    posY = height - 50;
    isJumping = false;
  }

  posY += yVelocity;

  obstacle1.display();
  obstacle2.display();


  if(checkCollision(posX, posY, w1, h1, obstacle1.x, obstacle1.y, obstacle1.w, obstacle1.h)) {
    fill(255, 255, 0);
    rect(posX, posY, 50, 50);

    fill(0, 0, 255);
    rect(obstacle1.x, obstacle1.y, obstacle1.w, obstacle1.h);
  }

    if(checkCollision(posX, posY, w1, h1, obstacle2.x, obstacle2.y, obstacle2.w, obstacle2.h)) {
        fill(255, 255, 0);
        rect(posX, posY, 50, 50);

        fill(0, 0, 255);
    rect(obstacle2.x, obstacle2.y, obstacle2.w, obstacle2.h);
    }
}

// Función para mover el cuadrado con las flechas del teclado
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      posX -= xSpeed;
    }
  
    if (keyCode === RIGHT_ARROW) {
      posX += xSpeed;
    }
  
    if (keyCode === UP_ARROW) {
      posY -= ySpeed;
    }
  
    if (keyCode === DOWN_ARROW) {
      posY += ySpeed;
    }

    if (keyCode === 32 && !isJumping) {
        yVelocity = -10;
        posY -= 5;
    }
  
    
  }
  class Obstacle {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }

    display() {
        fill(0, 255, 0);
        rect(this.x, this.y, this.w, this.h);
    }
  }
  function checkCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 < x2 + w2 &&
           x1 + w1 > x2 &&
           y1 < y2 + h2 &&
           y1 + h1 > y2;
  }




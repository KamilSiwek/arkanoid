console.log('ready');

var canvas = document.getElementById('game-pool');

var ctx = canvas.getContext('2d');

var ww = window.innerWidth;

//Pole gry:
canvas.width = ww * 0.8;
canvas.height = ww * 0.4;
var cw = canvas.width;
var ch = canvas.height;

function pool() {
  var img = new Image();
  img.src = ('img/arkanoid-tlo.png');
  ctx.drawImage(img,0,0,cw,ch);
}



//Player:
var paddelWidth = cw/4;
var paddelHeight = cw/40;
var playerY = 0.9 * ch;
var playerX = 0.5 * cw - paddelWidth/2;
var playerSpeed = 0;
//Ball:
var ballSize = 50;
var ballX = playerX + paddelWidth/2 - ballSize/2;
var ballY = playerY - ballSize;
var ballSpeedX = 0;
var ballSpeedY = 0;


//Wynik:
var score = [];
console.log(score);

var chances = [];


//Ball:
function startBallPosition() {
  if (ballSpeedX == 0 && ballSpeedY == 0){
    ballX = playerX + paddelWidth/2 - ballSize/2;
    ballY = playerY - ballSize;
  }
}

function win() {
  if(score.length == 16){
    ballSpeedX = 0;
    ballSpeedY = 0;
    ctx.font = "50px Arial";
    ctx.strokeText("You Won!!!", cw/2 - 25,ch/2 - 25);
  }
}

function player() {
  var img = new Image();
  img.src = ('img/paddle.png');
  ctx.drawImage(img,playerX,playerY,paddelWidth,paddelHeight);
  playerX += playerSpeed;
//blokada wyjścia poza canvas:
  if (playerX <= 0) {
        playerX = 0;
      }
      if (playerX >= cw - paddelWidth) {
            playerX = cw - paddelWidth
      }
  //Player - sterowanie:
var upButton = document.getElementById('up');
var downButton = document.getElementById('down');

  function playerPosition(e) {
    switch (e.keyCode) {
      case 37:
        playerSpeed = 0;
        playerSpeed -= cw/100;

        break;
      case 39:
        playerSpeed = 0;
        playerSpeed += cw/100;

        break;
      case 32:
      if (ballSpeedY == 0) {
        ballSpeedX = 6;
        ballSpeedY = -6;
      }
      break;
    }
  }
  window.addEventListener("keydown", playerPosition);

  function startPressMobi() {
    if (ballSpeedY == 0 && ballSpeedX == 0) {
      ballSpeedX=cw/200;
      ballSpeedY= -cw/200;
    }
  }
  canvas.addEventListener('click', startPressMobi);

  function up() {
    playerSpeed = 0;
    // if (ballSpeedY > 0) {
    //   playerSpeed -= ballSpeedY
    // }
    // if (ballSpeedY < 0) {
    //   playerSpeed += ballSpeedY
    // }

    playerSpeed -= cw/200;//1.5;
  }
  function down() {
    playerSpeed = 0;
    // if (ballSpeedY > 0) {
    //   playerSpeed += ballSpeedY
    // }
    // if (ballSpeedY < 0) {
    //   playerSpeed -= ballSpeedY
    // }
    playerSpeed += cw/200;//1.5;
  }

downButton.removeEventListener("click", up);
upButton.removeEventListener("click", down);

upButton.addEventListener("click", up);
downButton.addEventListener("click", down);

}


function ball() {
  var img = new Image();
  img.src = ('img/ball.png');
  ctx.drawImage(img,ballX, ballY, ballSize, ballSize);

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if(ballY <= 0 ) { //odbicie od góry i od dołu || ballY + ballSize>=ch
    ballSpeedY = -ballSpeedY;
  }
  if (ballY > ch) {
    ballSpeedY = 0;
    ballSpeedX = 0;
    ballX = playerX + paddelWidth/2 - ballSize/2;
    ballY = playerY - ballSize;
  }
  if(ballX <= 0 || ballX + ballSize>=cw) { //odbicie od boków
    ballSpeedX = -ballSpeedX;
  }
  if(ballY + ballSize >= playerY && ballX >= playerX && ballX <= playerX + paddelWidth){ //odbicie od gracza
    ballSpeedY = - ballSpeedY;
  }
}

//Elementy do uderzenia:
var enemyWidth = cw * 0.1;
var enemyHeight = cw * 0.025;
var ew = enemyWidth;
var eh = enemyHeight;
var odstepX = cw * 0.022;
var odstepY = cw * 0.022;

//Położenie bloków:
var possY = 300;
var w1 = 0 + odstepX;
var w2 = w1 + ew + odstepX;
var w3 = w2 + ew + odstepX;
var w4 = w3 + ew + odstepX;
var w5 = w4 + ew + odstepX;
var w6 = w5 + ew + odstepX;
var w7 = w6 + ew + odstepX;
var w8 = w7 + ew + odstepX;
var w = [w1, w2, w3, w4, w5, w6, w7, w8];

var remove = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
console.log(remove.length);

var rowI = odstepY;
var rowII = rowI + odstepY + eh;
var rowIII = rowII + odstepY + eh;

var blocks = [1,2,3,4,5,6,7,8];

//Funkcje bloków:
function enemies1(n) {//Pierwszy rząd bloków:
  var possX = odstepX + w[n];
  if(ballX > w[n] && ballX <w[n] + enemyWidth &&ballY + ballSize > rowI && ballY < rowI + enemyHeight ){
    ballSpeedY = - ballSpeedY;
    remove[n] = 0;
    console.log(remove);
  }
  ctx.fillStyle = 'yellow';
  ctx.fillRect(w[n], rowI, enemyWidth, enemyHeight);
}

function enemies2(n) {//Drugi rząd bloków:
  var possX = odstepX + w[n];
  if(ballX > w[n] && ballX <w[n] + enemyWidth && ballY + ballSize > rowII && ballY < rowII + enemyHeight ){
    ballSpeedY = - ballSpeedY;
    remove[n + blocks.length] = 0;
    console.log(remove);
  }
  ctx.fillStyle = 'green';
  ctx.fillRect(w[n], rowII, enemyWidth, enemyHeight);
}

function enemies3(n) {//Trzeci rząd bloków:
  var possX = odstepX + w[n];
  if(ballX > w[n] && ballX <w[n] + enemyWidth && ballY + ballSize > rowIII && ballY < rowIII + enemyHeight ){
    ballSpeedY = - ballSpeedY;
    remove[n + 2*blocks.length] = 0;
    console.log(remove);
  }
  ctx.fillStyle = 'red';
  ctx.fillRect(w[n], rowIII, enemyWidth, enemyHeight);
}

//Funkcja wywołująca bloki, znikające po zderzeniu z piłką:
function enemies() {
  if (remove[0] != 0) {
    enemies1(0);
  }if (remove[1] != 0) {
    enemies1(1);
  }if (remove[2] != 0) {
    enemies1(2);
  }if (remove[3] != 0) {
    enemies1(3);
  }if (remove[4] != 0) {
    enemies1(4);
  }if (remove[5] != 0) {
    enemies1(5);
  }if (remove[6] != 0) {
    enemies1(6);
  }if (remove[7] != 0) {
    enemies1(7);
  }if (remove[8] != 0) {
    enemies2(0);
  }if (remove[9] != 0) {
    enemies2(1);
  }if (remove[10] != 0) {
    enemies2(2);
  }if (remove[11] != 0) {
    enemies2(3);
  }if (remove[12] != 0) {
    enemies2(4);
  }if (remove[13] != 0) {
    enemies2(5);
  }if (remove[14] != 0) {
    enemies2(6);
  }if (remove[15] != 0) {
    enemies2(7);
  }if (remove[16] != 0) {
    enemies3(0);
  }if (remove[17] != 0) {
    enemies3(1);
  }if (remove[18] != 0) {
    enemies3(2);
  }if (remove[19] != 0) {
    enemies3(3);
  }if (remove[20] != 0) {
    enemies3(4);
  }if (remove[21] != 0) {
    enemies3(5);
  }if (remove[22] != 0) {
    enemies3(6);
  }if (remove[23] != 0) {
    enemies3(7);
  }
}

//Wywoływanie funkcji:
function game(){
  pool()
  ball()
  player()
  win()
  startBallPosition()
  enemies();
}

setInterval(game,1000/60);

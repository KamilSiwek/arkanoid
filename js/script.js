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
  ctx.fillStyle = '#2C52D1';
  ctx.fillRect(0,0,cw,ch);
}



//Player:
var paddelWidth = cw/4;
var paddelHeight = cw/40;
var playerY = 0.9 * ch;
var playerX = 0.5 * cw - paddelWidth/2;
var playerSpeed = 0;
//Ball:
var ballSize = 20;
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
  //  console.log('You won!!!');
    ctx.font = "50px Arial";
    ctx.strokeText("You Won!!!", cw/2 - 25,ch/2 - 25);
  }
}

function player() {
  ctx.fillStyle = '#fff';
  ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
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
      ballSpeedX = 6;
      ballSpeedY = -6;
      break;
    }
  }
  window.addEventListener("keydown", playerPosition);

  function up() {
    playerSpeed = 0;
    playerSpeed -= cw/100;//1.5;
  }
  function down() {
    playerSpeed = 0;
    playerSpeed += cw/100;//1.5;  
  }

downButton.removeEventListener("click", up);
upButton.removeEventListener("click", down);

upButton.addEventListener("click", up);
downButton.addEventListener("click", down);

}


function ball() {
  ctx.fillStyle = "green"
  ctx.fillRect(ballX, ballY, ballSize, ballSize);

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
  //Odbicie od celu:
  if(ballY > enemyY && ballY < enemyY + enemyHeight && ballX > enemyX && ballX < enemyX + enemyWidth){
    ballSpeedY = - ballSpeedY;
    enemyY = -100;
    enemy = false;
    score += 1;
    console.log(score.length);
    //score.length += 1;
   }
   if(ballY > enemyY2 && ballY < enemyY2 + enemyHeight && ballX > enemyX2 && ballX < enemyX2 + enemyWidth){
     ballSpeedY = - ballSpeedY;
     enemyY2 = -100;
     enemy2 = false;
     score += 1;
     console.log(score.length);
    }
    if(ballY > enemyY3 && ballY < enemyY3 + enemyHeight && ballX > enemyX3 && ballX < enemyX3 + enemyWidth){
      ballSpeedY = - ballSpeedY;
      enemyY3 = -100;
      enemy3 = false;
      score += 1;
      console.log(score.length);
     }
     if(ballY > enemyY4 && ballY < enemyY4 + enemyHeight && ballX > enemyX4 && ballX < enemyX4 + enemyWidth){
       ballSpeedY = - ballSpeedY;
       enemyY4 = -100;
       enemy4 = false;
       score += 1;
       console.log(score.length);
      }
      if(ballY > enemyY5 && ballY < enemyY5 + enemyHeight && ballX > enemyX5 && ballX < enemyX5 + enemyWidth){
        ballSpeedY = - ballSpeedY;
        enemyY5 = -100;
        enemy5 = false;
        score += 1;
        console.log(score.length);
       }
       if(ballY > enemyY6 && ballY < enemyY6 + enemyHeight && ballX > enemyX6 && ballX < enemyX6 + enemyWidth){
         ballSpeedY = - ballSpeedY;
         enemyY6 = -100;
         enemy6 = false;
         score += 1;
         console.log(score.length);
        }
        if(ballY > enemyY7 && ballY < enemyY7 + enemyHeight && ballX > enemyX7 && ballX < enemyX7 + enemyWidth){
          ballSpeedY = - ballSpeedY;
          enemyY7 = -100;
          enemy7 = false;
          score += 1;
          console.log(score.length);
         }
         if(ballY > enemyY8 && ballY < enemyY8 + enemyHeight && ballX > enemyX8 && ballX < enemyX8 + enemyWidth){
           ballSpeedY = - ballSpeedY;
           enemyY8 = -100;
           enemy8 = false;
           score += 1;
           console.log(score.length);
          }
          if(ballY > enemyY9 && ballY < enemyY9 + enemyHeight && ballX > enemyX9 && ballX < enemyX9 + enemyWidth){
            ballSpeedY = - ballSpeedY;
            enemyY9 = -100;
            enemy9 = false;
            score += 1;
            console.log(score.length);
           }
           if(ballY > enemyY10 && ballY < enemyY10 + enemyHeight && ballX > enemyX10 && ballX < enemyX10 + enemyWidth){
             ballSpeedY = - ballSpeedY;
             enemyY10 = -100;
             enemy10 = false;
             score += 1;
             console.log(score.length);
            }
            if(ballY > enemyY11 && ballY < enemyY11 + enemyHeight && ballX > enemyX11 && ballX < enemyX11 + enemyWidth){
              ballSpeedY = - ballSpeedY;
              enemyY11 = -100;
              enemy11 = false;
              score += 1;
              console.log(score.length);
             }
             if(ballY > enemyY12 && ballY < enemyY12 + enemyHeight && ballX > enemyX12 && ballX < enemyX12 + enemyWidth){
               ballSpeedY = - ballSpeedY;
               enemyY12 = -100;
               enemy12 = false;
               score += 1;
               console.log(score.length);
              }
              if(ballY > enemyY13 && ballY < enemyY13 + enemyHeight && ballX > enemyX13 && ballX < enemyX13 + enemyWidth){
                ballSpeedY = - ballSpeedY;
                enemyY13 = -100;
                enemy13 = false;
                score += 1;
                console.log(score.length);
               }
               if(ballY > enemyY14 && ballY < enemyY14 + enemyHeight && ballX > enemyX14 && ballX < enemyX14 + enemyWidth){
                 ballSpeedY = - ballSpeedY;
                 enemyY14 = -100;
                 enemy14 = false;
                 score += 1;
                 console.log(score.length);
                }
                if(ballY > enemyY15 && ballY < enemyY15 + enemyHeight && ballX > enemyX15 && ballX < enemyX15 + enemyWidth){
                  ballSpeedY = - ballSpeedY;
                  enemyY15 = -100;
                  enemy15 = false;
                  score += 1;
                  console.log(score.length);
                 }
                 if(ballY > enemyY16 && ballY < enemyY16 + enemyHeight && ballX > enemyX16 && ballX < enemyX16 + enemyWidth){
                   ballSpeedY = - ballSpeedY;
                   enemyY16 = -100;
                   enemy16 = false;
                   score += 1;
                   console.log(score.length);
                  }
}

//Elementy do uderzenia:
var enemyWidth = cw * 0.1;
var enemyHeight = cw * 0.025;
var ew = enemyWidth;
var eh = enemyHeight;
var odstepX = cw * 0.022;
var odstepY = cw * 0.022;

var wr = [
  wr1X = 0 + odstepX,
  wr1Y = 200 + odstepY
];
console.log(wr);
var enemyX = 0 + odstepX;
var enemyY = 0 + odstepY;

var enemyX2 = enemyX + ew + odstepX;
var enemyY2 = 0 + odstepY;

var enemyX3 = enemyX2 + ew + odstepX;
var enemyY3 = 0 + odstepY;

var enemyX4 = enemyX3 + ew + odstepX;
var enemyY4 = 0 + odstepY;

var enemyX5 = enemyX4 + ew + odstepX;
var enemyY5 = 0 + odstepY;

var enemyX6 = enemyX5 + ew + odstepX;
var enemyY6 = 0 + odstepY;

var enemyX7 = enemyX6 + ew + odstepX;
var enemyY7 = 0 + odstepY;

var enemyX8 = enemyX7 + ew + odstepX;
var enemyY8 = 0 + odstepY;

var enemyX9 = 0 + odstepX;
var enemyY9 = eh + odstepY *2;

var enemyX10 = enemyX9 + ew + odstepX;
var enemyY10 = eh + odstepY *2;

var enemyX11 = enemyX10 + ew + odstepX;
var enemyY11 = eh + odstepY *2;

var enemyX12 = enemyX11 + ew + odstepX;
var enemyY12 = eh + odstepY *2;

var enemyX13 = enemyX12 + ew + odstepX;
var enemyY13 = eh + odstepY *2;

var enemyX14 = enemyX13 + ew + odstepX;
var enemyY14 = eh + odstepY *2;

var enemyX15 = enemyX14 + ew + odstepX;
var enemyY15 = eh + odstepY *2;

var enemyX16 = enemyX15 + ew + odstepX;
var enemyY16 = eh + odstepY *2;


function enemy() {
  ctx.fillStyle='yellow'
  ctx.fillRect(enemyX, enemyY, enemyWidth, enemyHeight);
}
function enemy2() {
  ctx.fillStyle='green'
  ctx.fillRect(enemyX2, enemyY2, enemyWidth, enemyHeight);
}
function enemy3() {
  ctx.fillStyle='orange'
  ctx.fillRect(enemyX3, enemyY3, enemyWidth, enemyHeight);
}
function enemy4() {
  ctx.fillStyle='red'
  ctx.fillRect(enemyX4, enemyY4, enemyWidth, enemyHeight);
}
function enemy5() {
  ctx.fillStyle='black'
  ctx.fillRect(enemyX5, enemyY5, enemyWidth, enemyHeight);
}
function enemy6() {
  ctx.fillStyle='purple'
  ctx.fillRect(enemyX6, enemyY6, enemyWidth, enemyHeight);
}
function enemy7() {
  ctx.fillStyle='purple'
  ctx.fillRect(enemyX7, enemyY7, enemyWidth, enemyHeight);
}
function enemy8() {
  ctx.fillStyle='purple'
  ctx.fillRect(enemyX8, enemyY8, enemyWidth, enemyHeight);
}
function enemy9() {
  ctx.fillStyle='purple'
  ctx.fillRect(enemyX9, enemyY9, enemyWidth, enemyHeight);
}
function enemy10() {
  ctx.fillStyle='purple'
  ctx.fillRect(enemyX10, enemyY9, enemyWidth, enemyHeight);
}
function enemy11() {
  ctx.fillStyle='purple'
  ctx.fillRect(enemyX11, enemyY9, enemyWidth, enemyHeight);
}
function enemy12() {
  ctx.fillStyle='purple'
  ctx.fillRect(enemyX12, enemyY9, enemyWidth, enemyHeight);
}
function enemy13() {
  ctx.fillStyle='purple'
  ctx.fillRect(enemyX13, enemyY9, enemyWidth, enemyHeight);
}
function enemy14() {
  ctx.fillStyle='purple'
  ctx.fillRect(enemyX14, enemyY9, enemyWidth, enemyHeight);
}
function enemy15() {
  ctx.fillStyle='purple'
  ctx.fillRect(enemyX15, enemyY9, enemyWidth, enemyHeight);
}
function enemy16() {
  ctx.fillStyle='purple'
  ctx.fillRect(enemyX16, enemyY9, enemyWidth, enemyHeight);
}

// var wrogowie ={
//   1:
// }

var enemyss = [1,2,3,4,5,6,7,8];

function enemys3() {
  for (var i = 0; i < enemyss.length; i++) {
    enemyss[i]
  }
}
console.log(enemys3());

function enemys2() {
  for (var i = 0+odstepX; i < cw - ew; i+= ew + odstepX) {
    ctx.fillStyle = 'white';
    ctx.fillRect(i, 100, ew, eh);
  }
}
console.log(enemyss.length);
function enemys() {
  if (enemy != false){
    enemy()}
    if (enemy2 != false){
    enemy2()}
    if (enemy3 != false){
    enemy3()}
    if (enemy4 != false){
    enemy4()}
    if (enemy5 != false){
    enemy5()}
    if (enemy6 != false){
    enemy6()}
    if (enemy7 != false){
    enemy7()}
    if (enemy8 != false){
    enemy8()}
    if (enemy9 != false){
    enemy9()}
    if (enemy10 != false){
    enemy10()}
    if (enemy11 != false){
    enemy11()}
    if (enemy12 != false){
    enemy12()}
    if (enemy13 != false){
    enemy13()}
    if (enemy14 != false){
    enemy14()}
    if (enemy15 != false){
    enemy15()}
    if (enemy16 != false){
    enemy16()}
}

//Wywoływanie funkcji:
function game(){
  pool()
  ball()
  player()
  enemys()
  win()
  startBallPosition()
  //enemys2()
  //enemys3()
}

setInterval(game,1000/60);

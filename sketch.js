var ball;
var db;
var positons

function setup(){
    createCanvas(500,500);
    db=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db.ref('ball/position').on('value',readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    db.ref('ball/position').set({
        x:positions.x+x,
        y:positions.y+y
    })
}
 function readPosition(data){
positions=data.val();
ball.x=positions.x
ball.y=positions.y
 }
let myXPos = 250;
let myYPos = 430;
let eYPos = 75;
let eXPos = 250;
let bYPos = 75;
let y = 1;
let myLeft, myRight, myTop, myBottom;
let bXLeft, bXRight, bXTop, bXBottom;
z = 1;
a = 1;
b = 0;

function setup() {
    createCanvas(500, 500);
    noStroke();
    textSize(32)
    textAlign(CENTER);

                                    //sets up canvas
    rectMode(CENTER);
}

direction = 1;

function draw() {
    
    background(0,20)
    
    fill(0,0,255);
    ellipse(myXPos, myYPos, 50, 50); //you
    fill(255,0,0)
    ellipse(eXPos, eYPos, 50, 50); //enemy
    fill(0,255,0)
    

    ellipse(eXPos, bYPos, 50, 50); //bullets


    

    if (z == 1) {
    eXPos += 3*direction;
    }

if (a == 1) {
    b++
}   //score counter


fill(255,0,0)                       // countdown
if (y <= 100) {
    text("30", 250, 250)
    y += 1
}
if (y >= 100 && y <= 200) {
    text("29", 250, 250)
    y += 1
}
if (y >= 200 && y <= 300) {
    text("28", 250, 250)
    y += 1
}
if (y >= 300 && y <= 400) {
    text("27", 250, 250)
    y += 1
}
if (y >= 400 && y <= 500) {
    text("26", 250, 250)
    y += 1
}
if (y >= 500 && y <= 600) {
    text("25", 250, 250)
    y += 1
}
if (y >= 600 && y <= 700) {
    text("24", 250, 250)
    y += 1
}
if (y >= 700 && y <= 800) {
    text("23", 250, 250)
    y += 1
}
if (y >= 800 && y <= 900) {
    text("22", 250, 250)
    y += 1
}
if (y >= 900 && y <= 1000) {
    text("21", 250, 250)
    y += 1
}
if (y >= 1000 && y <= 1100) {
    text("20", 250, 250)
    y += 1
}
if (y >= 1100 && y <= 1200) {
    text("19", 250, 250)
    y += 1
}
if (y >= 1200 && y <= 1300) {
    text("18", 250, 250)
    y += 1
}
if (y >= 1300 && y <= 1400) {
    text("17", 250, 250)
    y += 1
}
if (y >= 1400 && y <= 1500) {
    text("16", 250, 250)
    y += 1
}
if (y >= 1500 && y <= 1600) {
    text("15", 250, 250)
    y += 1
}
if (y >= 1600 && y <= 1700) {
    text("14", 250, 250)
    y += 1
}
if (y >= 1700 && y <= 1800) {
    text("13", 250, 250)
    y += 1
}
if (y >= 1800 && y <= 1900) {
    text("12", 250, 250)
    y += 1
}
if (y >= 1900 && y <= 2000) {
    text("11", 250, 250)
    y += 1
}
if (y >= 2000 && y <= 2100) {
    text("10", 250, 250)
    y += 1
}
if (y >= 2100 && y <= 2200) {
    text("9", 250, 250)
    y += 1
}
if (y >= 2200 && y <= 2300) {
    text("8", 250, 250)
    y += 1
}
if (y >= 2300 && y <= 2400) {
    text("7", 250, 250)
    y += 1
}
if (y >= 2400 && y <= 2500) {
    text("6", 250, 250)
    y += 1
}
if (y >= 2500 && y <= 2600) {
    text("5", 250, 250)
    y += 1
}
if (y >= 2600 && y <= 2700) {
    text("4", 250, 250)
    y += 1
}
if (y >= 2700 && y <= 2800) {
    text("3", 250, 250)
    y += 1
}
if (y >= 2800 && y <= 2900) {
    text("2", 250, 250)
    y += 1
}
if (y >= 2900 && y <= 3000) {
    text("1", 250, 250)
    y += 1
}
if (y >= 3000) {
z++
fill(0,0,255)
rect(500, 500, 5000, 5000)
fill(0,0,0)
text("You Beat The Game!", 250, 250)             // win screen
}
    
if (z == 1) {
    bYPos += 3;

    if (bYPos >= 500) {
        bYPos = eYPos;
    }
}


    if (eXPos > 475 || eXPos < 25) {
        direction *= -1;                    // enemy ellipse that shoots bullets
    }


if (z == 1) { 
    if (keyIsDown(LEFT_ARROW) && myXPos > 25) {
        myXPos -= 3;
    }


    if (keyIsDown(RIGHT_ARROW) && myXPos < 475) {
        myXPos += 3;
    }

    if (keyIsDown(UP_ARROW) && myYPos > 400) {
        myYPos -= 3;
    }


    if (keyIsDown(DOWN_ARROW) && myYPos < 475) {
        myYPos += 3;
    }
}
    let myXLeft = myXPos - 25;
    let myXRight = myXPos + 25;
    let myYTop = myYPos - 25;
    let myYBottom = myYPos + 25;
    let bXLeft = eXPos - 15;
    let bXRight = eXPos + 15;
    let bYTop = bYPos - 15;
    let bYBottom = bYPos + 15;

    a = 1
 
 
    if (myXLeft > bXRight || myXRight < bXLeft || myYTop > bYTop || myYBottom < bYBottom) { // collision

    }  
    else { 
        a++ 
        z++;                                                                                                
        fill(255,0,0)
        rect(500,500,5000,5000)
        fill(0,0,0)
        text("You Lost The Game!", 250, 250)
        text("You Lasted " + b/100 + " Second(s)", 250, 300)
        
        }     

    //blue cube that moves left and right
}










// vars



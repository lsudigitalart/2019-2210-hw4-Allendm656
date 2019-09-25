//Rect Variables
  var rx = 240      //Rect x-cords
  var ry = 240      //Rect y-cords
  var rs = 25       //Rect Height and width
  var speed = 3     //Speed, d u h
//Ellipse Variables
  var ses = 15      //Small Ellipse Size
  var les = 25      //Large Ellipse Size
//Score variables
  var score = 0     //Total = 52
  var small = 1     //Small orbs get + 1
  var large = 2     //Large orbs get + 2
//Collision Variables 
  //Large Ellipses' vars
  var les1 = true
  var les2 = true
  var les3 = true
  var les4 = true
  var les5 = true
  var les6 = true
  var les7 = true
  var les8 = true
  //Small Ellipses' vars
  var ses1 = true
  var ses2 = true
  var ses3 = true
  var ses4 = true
  var ses5 = true
  var ses6 = true
  var ses7 = true
  var ses8 = true
  var ses9 = true
  var ses10 = true
  var ses11 = true
  var ses12 = true
  var ses13 = true
  var ses14 = true
  var ses15 = true
  var ses16 = true
  var ses17 = true
  var ses18 = true
  var ses19 = true
  var ses20 = true
  var ses21 = true
  var ses22 = true
  var ses23 = true
  var ses24 = true
  var ses25 = true
  var ses26 = true
  var ses27 = true
  var ses28 = true
  var ses29 = true
  var ses30 = true
  var ses31 = true
  var ses32 = true
  var ses33 = true
  var ses34 = true
  var ses35 = true
  var ses36 = true

function setup() {
createCanvas(500, 500)
}

function draw(){
  background(255,69,0)
  fill(255, 69, 0)
  strokeWeight(1)
  stroke(0) 
  beginShape()
  vertex(25, 50)
  vertex(250, 250)
  vertex(475, 50)
  endShape()
  fill(255, 69, 0)
  beginShape()
  vertex(25, 475)
  vertex(250, 250)
  vertex(475, 475)
  endShape()

//Large Orbs to get - 8 orbs in total, + 2 to score each, 16 score total
  //Orb slots
    fill(225,39,0)
    strokeWeight(1)
    stroke(0) 
    ellipse(250, 75, les, les)
    ellipse(50, 75, les, les)
    ellipse(50, 250, les, les)
    ellipse(450, 75, les, les)
    ellipse(50, 450, les, les)
    ellipse(450, 250, les, les)
    ellipse(450, 450, les, les)
    ellipse(250, 450, les, les)
  //Collisions
    fill(250)
    if(rx <= 250 && rx + rs >= 250 && ry <= 75 && ry + rs >= 75 && les1)
      {
      les1 = false;
      score += large;
      }
      if(les1)
      {
      ellipse(250, 75, les, les)      //Top mid
    }

    if(rx <= 50 && rx + rs >= 50 && ry <= 75 && ry + rs >= 75 && les2)
      {
      les2 = false;
      score += large;
      }
      if(les2)
      {
      ellipse(50, 75, les, les)       //Top left
    }

    if(rx <= 50 && rx + rs >= 50 && ry <= 250 && ry + rs >= 250 && les3)
      {
      les3 = false;
      score += large;
      }
      if(les3)
      {
      ellipse(50, 250, les, les)      //Mid left
    }


    if(rx <= 450 && rx + rs >= 450 && ry <= 75 && ry + rs >= 75 && les4)
      {
      les4 = false;
      score += large;
      }
      if(les4)
      {
      ellipse(450, 75, les, les)      //Top right
    }

    if(rx <= 50 && rx + rs >= 50 && ry <= 450 && ry + rs >= 450 && les5)
      {
      les5 = false;
      score += large;
      }
      if(les5)
      {
      ellipse(50, 450, les, les)      //Bottom left
    }

    if(rx <= 450 && rx + rs >= 450 && ry <= 250 && ry + rs >= 250 && les6)
      {
      les6 = false;
      score += large;
      }
      if(les6)
      {
      ellipse(450, 250, les, les)     //Mid right
    }

    if(rx <= 450 && rx + rs >= 450 && ry <= 450 && ry + rs >= 450 && les7)
      {
      les7 = false;
      score += large;
      }
      if(les7)
      {
      ellipse(450, 450, les, les)     //Bottom right
    }

    if(rx <= 250 && rx + rs >= 250 && ry <= 450 && ry + rs >= 450 && les8)
      {
      les8 = false;
      score += large;
      }
      if(les8)
      {
      ellipse(250, 450, les, les)     //Bottom mid
    }

//Small Orbs to get - 36 orbs in total, + 1 to score each, 36 score total
  //Orb Slots
    fill(225,39,0)
    strokeWeight(1)
    stroke(0) 
    ellipse(100, 75, ses, ses)
    ellipse(150, 75, ses, ses)
    ellipse(200, 75, ses, ses)
    ellipse(300, 75, ses, ses)
    ellipse(350, 75, ses, ses)
    ellipse(400, 75, ses, ses)

    ellipse(100, 250, ses, ses)
    ellipse(150, 250, ses, ses)
    ellipse(200, 250, ses, ses)
    ellipse(300, 250, ses, ses)
    ellipse(350, 250, ses, ses)
    ellipse(400, 250, ses, ses)

    ellipse(100, 450, ses, ses)
    ellipse(150, 450, ses, ses)
    ellipse(200, 450, ses, ses)
    ellipse(300, 450, ses, ses)
    ellipse(350, 450, ses, ses)
    ellipse(400, 450, ses, ses)

    ellipse(50, 110, ses, ses)
    ellipse(50, 160, ses, ses)
    ellipse(50, 210, ses, ses)
    ellipse(50, 300, ses, ses)
    ellipse(50, 350, ses, ses)
    ellipse(50, 400, ses, ses)

    ellipse(250, 110, ses, ses)
    ellipse(250, 160, ses, ses)
    ellipse(250, 210, ses, ses)
    ellipse(250, 300, ses, ses)
    ellipse(250, 350, ses, ses)
    ellipse(250, 400, ses, ses)

    ellipse(450, 110, ses, ses)
    ellipse(450, 160, ses, ses)
    ellipse(450, 210, ses, ses)
    ellipse(450, 300, ses, ses)
    ellipse(450, 350, ses, ses)
    ellipse(450, 400, ses, ses)
  //Collisons
    fill(200)
    //Top Row
    if(rx <= 100 && rx + rs >= 100 && ry <= 75 && ry + rs >= 75 && ses1)
      {
      ses1 = false;
      score += small;
      }
      if(ses1)
      {
      ellipse(100, 75, ses, ses)
    }
    if(rx <= 150 && rx + rs >= 150 && ry <= 75 && ry + rs >= 75 && ses2)
      {
      ses2 = false;
      score += small;
      }
      if(ses2)
      {
      ellipse(150, 75, ses, ses)
    }
    if(rx <= 200 && rx + rs >= 200 && ry <= 75 && ry + rs >= 75 && ses3)
      {
      ses3 = false;
      score += small;
      }
      if(ses3)
      {
      ellipse(200, 75, ses, ses)
    }
    if(rx <= 300 && rx + rs >= 300 && ry <= 75 && ry + rs >= 75 && ses4)
      {
      ses4 = false;
      score += small;
      }
      if(ses4)
      {
      ellipse(300, 75, ses, ses)
    }
    if(rx <= 350 && rx + rs >= 350 && ry <= 75 && ry + rs >= 75 && ses5)
      {
      ses5 = false;
      score += small;
      }
      if(ses5)
      {
      ellipse(350, 75, ses, ses)
    }
    if(rx <= 400 && rx + rs >= 400 && ry <= 75 && ry + rs >= 75 && ses6)
      {
      ses6 = false;
      score += small;
      }
      if(ses6)
      {
      ellipse(400, 75, ses, ses)
    }
    //Mid Row
    if(rx <= 100 && rx + rs >= 100 && ry <= 250 && ry + rs >= 250 && ses7)
      {
      ses7 = false;
      score += small;
      }
      if(ses7)
      {
      ellipse(100, 250, ses, ses)
    }
    if(rx <= 150 && rx + rs >= 150 && ry <= 250 && ry + rs >= 250 && ses8)
      {
      ses8 = false;
      score += small;
      }
      if(ses8)
      {
      ellipse(150, 250, ses, ses)
    }
    if(rx <= 200 && rx + rs >= 200 && ry <= 250 && ry + rs >= 250 && ses9)
      {
      ses9 = false;
      score += small;
      }
      if(ses9)
      {
      ellipse(200, 250, ses, ses)
    }
    if(rx <= 300 && rx + rs >= 300 && ry <= 250 && ry + rs >= 250 && ses10)
      {
      ses10 = false;
      score += small;
      }
      if(ses10)
      {
      ellipse(300, 250, ses, ses)
    }
    if(rx <= 350 && rx + rs >= 350 && ry <= 250 && ry + rs >= 250 && ses11)
      {
      ses11 = false;
      score += small;
      }
      if(ses11)
      {
      ellipse(350, 250, ses, ses)
    }
    if(rx <= 400 && rx + rs >= 400 && ry <= 250 && ry + rs >= 250 && ses12)
      {
      ses12 = false;
      score += small;
      }
      if(ses12)
      {
      ellipse(400, 250, ses, ses)
    }
    //Bottom Row
    if(rx <= 100 && rx + rs >= 100 && ry <= 450 && ry + rs >= 450 && ses13)
      {
      ses13 = false;
      score += small;
      }
      if(ses13)
      {
      ellipse(100, 450, ses, ses)
    }
    if(rx <= 150 && rx + rs >= 150 && ry <= 450 && ry + rs >= 450 && ses14)
      {
      ses14 = false;
      score += small;
      }
      if(ses14)
      {
      ellipse(150, 450, ses, ses)
    }
    if(rx <= 200 && rx + rs >= 200 && ry <= 450 && ry + rs >= 450 && ses15)
      {
      ses15 = false;
      score += small;
      }
      if(ses15)
      {
     ellipse(200, 450, ses, ses)
    }
    if(rx <= 300 && rx + rs >= 300 && ry <= 450 && ry + rs >= 450 && ses16)
      {
      ses16 = false;
      score += small;
      }
      if(ses16)
      {
      ellipse(300, 450, ses, ses)
    }
    if(rx <= 350 && rx + rs >= 350 && ry <= 450 && ry + rs >= 450 && ses17)
      {
      ses17 = false;
      score += small;
      }
      if(ses17)
      {
      ellipse(350, 450, ses, ses)
    }
    if(rx <= 400 && rx + rs >= 400 && ry <= 450 && ry + rs >= 450 && ses18)
      {
      ses18 = false;
      score += small;
      }
      if(ses18)
      {
      ellipse(400, 450, ses, ses)
    }
    //Left Column
    if(rx <= 50 && rx + rs >= 50 && ry <= 110 && ry + rs >= 110 && ses19)
      {
      ses19 = false;
      score += small;
      }
      if(ses19)
      {
      ellipse(50, 110, ses, ses)
    }
    if(rx <= 50 && rx + rs >= 50 && ry <= 160 && ry + rs >= 160 && ses20)
      {
      ses20 = false;
      score += small;
      }
      if(ses20)
      {
      ellipse(50, 160, ses, ses)
    }
    if(rx <= 50 && rx + rs >= 50 && ry <= 210 && ry + rs >= 210 && ses21)
      {
      ses21 = false;
      score += small;
      }
      if(ses21)
      {
      ellipse(50, 210, ses, ses)
    }
    if(rx <= 50 && rx + rs >= 50 && ry <= 300 && ry + rs >= 300 && ses22)
      {
      ses22 = false;
      score += small;
      }
      if(ses22)
      {
      ellipse(50, 300, ses, ses)
    }
    if(rx <= 50 && rx + rs >= 50 && ry <= 350 && ry + rs >= 350 && ses23)
      {
      ses23 = false;
      score += small;
      }
      if(ses23)
      {
      ellipse(50, 350, ses, ses)
    }
    if(rx <= 50 && rx + rs >= 50 && ry <= 400 && ry + rs >= 400 && ses24)
      {
      ses24 = false;
      score += small;
      }
      if(ses24)
      {
      ellipse(50, 400, ses, ses)
    }
    //Mid Column
    if(rx <= 250 && rx + rs >= 250 && ry <= 110 && ry + rs >= 110 && ses25)
      {
      ses25 = false;
      score += small;
      }
      if(ses25)
      {
      ellipse(250, 110, ses, ses)
    }
    if(rx <= 250 && rx + rs >= 250 && ry <= 160 && ry + rs >= 160 && ses26)
      {
      ses26 = false;
      score += small;
      }
      if(ses26)
      {
      ellipse(250, 160, ses, ses)
    }
    if(rx <= 250 && rx + rs >= 250 && ry <= 210 && ry + rs >= 210 && ses27)
      {
      ses27 = false;
      score += small;
      }
      if(ses27)
      {
      ellipse(250, 210, ses, ses)
    }
    if(rx <= 250 && rx + rs >= 250 && ry <= 300 && ry + rs >= 300 && ses28)
      {
      ses28 = false;
      score += small;
      }
      if(ses28)
      {
      ellipse(250, 300, ses, ses)
    }
    if(rx <= 250 && rx + rs >= 250 && ry <= 350 && ry + rs >= 350 && ses29)
      {
      ses29 = false;
      score += small;
      }
      if(ses29)
      {
      ellipse(250, 350, ses, ses)
    }
    if(rx <= 250 && rx + rs >= 250 && ry <= 400 && ry + rs >= 400 && ses30)
      {
      ses30 = false;
      score += small;
      }
      if(ses30)
      {
      ellipse(250, 400, ses, ses)
    }
    //Right Column
    if(rx <= 450 && rx + rs >= 450 && ry <= 110 && ry + rs >= 110 && ses31)
      {
      ses31 = false;
      score += small;
      }
      if(ses31)
      {
      ellipse(450, 110, ses, ses)
    }
    if(rx <= 450 && rx + rs >= 450 && ry <= 160 && ry + rs >= 160 && ses32)
      {
      ses32 = false;
      score += small;
      }
      if(ses32)
      {
      ellipse(450, 160, ses, ses)
    }
    if(rx <= 450 && rx + rs >= 450 && ry <= 210 && ry + rs >= 210 && ses33)
      {
      ses33 = false;
      score += small;
      }
      if(ses33)
      {
      ellipse(450, 210, ses, ses)
    }
    if(rx <= 450 && rx + rs >= 450 && ry <= 300 && ry + rs >= 300 && ses34)
      {
      ses34 = false;
      score += small;
      }
      if(ses34)
      {
      ellipse(450, 300, ses, ses)
    }
    if(rx <= 450 && rx + rs >= 450 && ry <= 350 && ry + rs >= 350 && ses35)
      {
      ses35 = false;
      score += small;
      }
      if(ses35)
      {
      ellipse(450, 350, ses, ses)
    }
    if(rx <= 450 && rx + rs >= 450 && ry <= 400 && ry + rs >= 400 && ses36)
      {
      ses36 = false;
      score += small;
      }
      if(ses36)
      {
      ellipse(450, 400, ses, ses)
    }

//Borders
  fill(0)
  strokeWeight(1)
  stroke(0) 
  rect(0, 0, 25, 500)
  rect(475, 0, 25, 500)
  rect(0, 475, 500, 25)
  rect(0, 0, 500, 50)
  //Inner Top left
  fill(200, 69, 0)
  strokeWeight(2)
  stroke(0) 
  beginShape()
  vertex(75, 95)
  vertex(225, 95)
  vertex(225, 105)
  vertex(85, 105)
  vertex(85, 225)
  vertex(75, 225)
  endShape(CLOSE)
  //Inner Top Right
  beginShape()
  vertex(275, 95)
  vertex(425, 95)
  vertex(425, 225)
  vertex(415, 225)
  vertex(415, 105)
  vertex(275, 105)
  endShape(CLOSE)
  //Inner Bottom Left
  beginShape()
  vertex(75, 275)
  vertex(85, 275)
  vertex(85, 415)
  vertex(225, 415)
  vertex(225, 425)
  vertex(75, 425)
  endShape(CLOSE)
  //Inner Bottom Right
  beginShape()
  vertex(415, 275)
  vertex(425, 275)
  vertex(425, 425)
  vertex(275, 425)
  vertex(275, 415)
  vertex(415, 415)
  endShape(CLOSE)

//Player Item
  fill(150, 40, 0);
  strokeWeight(1)
  stroke(0)
  rect(rx, ry, rs, rs);
  //Controls
    if(keyIsPressed){
      if (key == "w" && ry > 50){
      ry -= speed;
    }

      if (key == "a" && rx > 25){
      rx -= speed;
    }

      if (key == "s" && ry < 450){
      ry += speed;
    }

      if (key == "d" && rx < 450){
      rx += speed;
    }
  }

//Win Condition and Score Details
  if(score == 52){  
  fill(0, 250, 0, 120)
  strokeWeight(0)
  rect(0, 0, 500, 500)
  fill(250);
  strokeWeight(5)
  stroke(0) 
  textSize(60);
  text("YOU WIN!", 110, 200);
  }

  fill(250);
  strokeWeight(1)
  stroke(0) 
  textSize(40);
  text(score, 238, 40);

  fill(250);
  strokeWeight(1)
  stroke(0) 
  textSize(20);
  text("Use WASD to Move", 295, 40);

  fill(250);
  strokeWeight(1)
  stroke(0) 
  textSize(20);
  text("Collect the orbs!", 25, 40);

}

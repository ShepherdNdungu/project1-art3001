setup = () => {
    myCanvas = createCanvas(600, 400);
    // myCanvas.parent('myContainer');
    noStroke();
}
draw = () => {
    deg1 = 45.0;
    deg2 = 135.0;
    angle1 = radians(deg1);
    angle2 = radians(deg2);

    background(0);

    //red part
    fill(200, 0, 0);
    rect(0, 133.33, 600, 133.33);
    //green part
    fill(0, 200, 0);
    rect(0, 266.67, 600, 133.33);
    //white parts
    fill(255, 255, 255);
    rect(0, 266.67, 600, 20);
    fill(255, 255, 255);
    rect(0, 123.33, 600, 20);

    //SPEARS
    push();
    fill(255);
    rotate(cos(angle1));
    // translate(350, -200);
    ellipse(350, -200, 20, 80);
    pop();

    push();
    fill(255);
    rotate(cos(angle2));
    // translate(250, -200);
    ellipse(100, 185, 20, 80);
    pop();

    //LINES
    push();
    stroke(255);
    strokeWeight(3);
    line(200, 80, 400, 300);
    pop();

    push();
    stroke(255);
    strokeWeight(3);
    line(395, 80, 200, 300);
    pop();

    //SHIELD
    push();
    fill(200, 0, 0);
    ellipseMode(CENTER);
    ellipse(300, 200, 150, 300)
    pop();

    //sides
    push();
    fill(0);
    ellipse(240, 200, 30, 80);
    pop();
    push();
    fill(0);
    ellipse(360, 200, 30, 80);
    pop();

    //middle
    push();
    fill(255);
    circle(300, 200, 20);
    pop();

    //white mini-shields
    push();
    fill(255);
    ellipseMode(CENTER);
    ellipse(300, 118, 30, 135);
    ellipse(300, 282, 30, 135);
    pop();

    //red dividers in mini-shields
    push();
    stroke(200, 0, 0);
    strokeWeight(10);
    line(300, 55, 300, 185)
    pop();
    push();
    stroke(200, 0, 0);
    strokeWeight(10);
    line(300, 345, 300, 215)
    pop();

    push();
    opac = 0.0;
    if (opac < 255) {
        fill(0, 0, 0, opac);
        opac += .5;
    }
    rect(0, 0, 600, 400);

    
   


    
    
    describe('the flag of kenya');
}
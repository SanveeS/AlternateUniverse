var engine, world;
var earth , venus , mercury, mars, jupiter, sun;
var earthImg, venusImg, mercuryImg, marsImg , jupiterImg, sunImg;
var angle = 0;

function preload(){
    earthImg = loadImage("earth.png");
    venusImg = loadImage("venus.png");
    mercuryImg = loadImage("mercury.png");
    marsImg = loadImage("mars.png");
    jupiterImg = loadImage("jupiter.png");
    sunImg = loadImage("sun.png");

}
function setup(){
    var canvas = createCanvas(600,600);
    //SUN
    sun=createSprite(300,300,80,80);
    sun.addImage(sunImg);
    sun.scale=0.15;
    //sun.debug=true;
    sun.setCollider("circle",0,0,260);

    //MERCURY
    mercury=createSprite(220,300,20,20);
    mercury.addImage(mercuryImg);
    mercury.scale=0.03;
    //mercury.debug=true;
    mercury.setCollider("circle",0,0,400);

    //VENUS 
    venus=createSprite(230,190,20,20);
    venus.addImage(venusImg);
    venus.scale=0.07;
    //venus.debug=true;
    venus.setCollider("circle",0,0,200);

    //EARTH
    earth=createSprite(460,300,20,20);
    earth.addImage(earthImg);
    earth.scale=0.09; 
    //earth.debug=true;
    earth.setCollider("circle",0,0,150);

    //MARS
    mars=createSprite(70,300,20,20);
    mars.addImage(marsImg);
    mars.scale=0.07;
    //mars.debug=true;
    mars.setCollider("circle",0,0,200);

    //JUPITER
    jupiter=createSprite(300,560,20,20);
    jupiter.addImage(jupiterImg);
    jupiter.scale=0.07;
    //jupiter.debug=true;
    jupiter.setCollider("circle",0,0,350);
}

function draw(){
    background(0);
    if(frameCount%9===0){
        sun.scale=sun.scale+0.01;
    }
    
    if(sun.isTouching(mercury)) {
        mercury.destroy();
    }
    if(sun.isTouching(venus)) {
        venus.destroy();
    }
    if(sun.isTouching(earth)) {
        earth.destroy();
    }
    if(sun.isTouching(mars)) {
        mars.destroy();
    }
    if(sun.isTouching(jupiter)) {
        jupiter.destroy();
    }  

    drawSprites();
}    
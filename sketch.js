var canvas;
var music;
var surface,surface1,surface2,surface3;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 surface=createSprite(0,580,200,30);
 surface.shapeColor="red"
 surface1=createSprite(295,580,200,30);
 surface1.shapeColor="green"
  surface2=createSprite(515,580,200,30);
  surface2.shapeColor="blue"
  surface3=createSprite(740,580,200,30);
  surface3.shapeColor="white"


    //create box sprite and give velocity
     box=createSprite(200,200,30,30);
    box.setVelocity(10,5);

}

function draw() {
    background(rgb(169,169,169));
    
    
    //create edgeSprite
     edges=createEdgeSprites()
     
box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    
    if(surface.isTouching(box) && box.bounceOff(surface)){
        box.shapeColor="red"
        music.play();
          
    }
    if(surface1.isTouching(box) && box.bounceOff(surface1))
{
 box.shapeColor="green"
 box.setVelocity(0,0)
}
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor="blue"
        music.play()
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor="white"
        music.play()
        
    }

   //ball bounce off edges and surface
    
   

    drawSprites()

}
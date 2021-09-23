//Create variables here
var dog,happyDog,database,foodS,foodStack
function preload()
{
	//load images here
  dogImg= loadImage("images/dogImg.png");
  dogImg2= loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(250,250,20,20)
dog.addImage(dogImg);
dog.scale=0.15  

database=firebase.database();

foodStock=database.ref('Food')
foodStock.on("value",readStock)  

}


function draw() {  
background(color(46,139,87))
  drawSprites();
 if(keyWentDown(UP_ARROW))
 {
 writeStock(foodS);
 dog.addImage(dogImg2);
 }




fill(255,255,254);
stroke("black");
text("Food remaining : "+foodS,170,100)
textSize(13);
text("note:Press UP_ARROW Key To Feed Drago Milk",130,10,300,20);
}
function readStock(data)
{
  foodS=data.val();
}
function writeStock(x)
{
  if(x<=0)
  x=0;
  else
  x=x-1;
  database.ref('/').update({

    Food:x
  })
}

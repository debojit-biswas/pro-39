//Create variables here
var dog,happyDog,database,foodS,foodStock,addFood1,lastFedtime
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

var foodStock=database.ref('Food')
foodStock.on("value",(data)=>{
  foodS=data.val();
  console.log(foodS)
}) 

addFood1=createButton("addFood")
addFood1.position(230,70)
addFood1.mousePressed(addFood)


feedDog=createButton("feedDog")
feedDog.position(350,70)
feedDog.mousePressed(feedFood)
 

foodObject=new Food()
time=hour()

}


function draw() {  
background(color(46,139,87))

foodObject.display()
  drawSprites();
 




/*fill(255,255,254);
stroke("black");
text("Food remaining : "+foodS,170,100)
textSize(13);
text("note:Press UP_ARROW Key To Feed Drago Milk",130,10,300,20);*/
fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,80);
  textSize(13);
 if (lastFedtime>12)

  text("Last Feed time : "+time%12+" PM",400,80)
  else if(lastFedtime===12)
  text("Last Feed time : "+time+" PM",200,60)
  else text("Last Feed time : "+time+" AM",200,60)

  if(foodS==0)
  dog.addImage(dogImg);

}


function addFood()
{
foodS++;
database.ref('/').update({
  Food:foodS
})



}
function feedFood()
{
  if(foodS<=0)
  foodS=0;
  else
  foodS=foodS-1;

  database.ref('/').update({

    Food:foodS,
    lastFedtime:time
  })



}




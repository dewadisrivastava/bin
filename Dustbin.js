class Dustbin{
constructor(x,y){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.image=loadImage("dustbingreen.png")
    this.width=100
    this.height=100
    World.add(world,this.body);
}
display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
  rectMode(CENTER)
  fill(255);
  image(this.image,0,0,this.width,this.height)
  pop()
}
}
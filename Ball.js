class Ball{
    constructor(x,y){
        var options={
           
            'density':0.2
            
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.image=loadImage("paper.png")
        this.width=20;
        this.height=30;
      World.add(world,this.body)
     
    }
    display(){
        var pos=this.body.position;
        if(keyDown("space")){
            pos.x=pos.x+2
            pos.y=pos.y-5
        }
        if(pos.x>600){
       pos.x=0
       pos.y=0
        }
        
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}
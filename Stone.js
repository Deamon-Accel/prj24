class Stone{
	constructor(x,y,width,height)
	{

        var options={
            friction:10,
            density:9
        }
        this.width=width;
        this.height=height;

        this.body=Bodies.rectangle(x, y,width,height, options)
		World.add(world, this.body);

    }
    display(){
        
var stonepos=this.body.position


push()
translate(stonepos.x, stonepos.y);
rotate(this.body.angle)
rectMode(CENTER)
strokeWeight(4);
stroke("black");
fill("brown");
rect(0,0,this.width,this.height);
pop()
    }
	

	}
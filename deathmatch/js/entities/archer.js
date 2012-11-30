
    function Archer(options)
    {  		
		Sprite.call(this, options);
		this.clickable = true;	
		this.angle = 270;
		
		this.width = 32;
		this.height = 32;
		
		this.thrust = 2;
		this.startY = 0;
		this.health = 2;
		
		this.addAnimation([0,1,2,1], "walk");
		this.addAnimation([1,3,4,1], "fight");
		this.playAnimation('walk', 200, 1);
		
		this.lane = options.lane;
		this.laneData = options.laneData;
		
		this.clickable = true;
		Game.addEntity(this);
	}

	Archer.prototype = new Sprite();
	this.Archer = Archer;


	Archer.prototype.update = function(deltaTime)
    {
		Sprite.prototype.update.call(this, deltaTime);

		if(!this.isAnimating){
			this.playAnimation('walk', 200, 1);
		}

		this.vel.x = (Math.cos(((this.angle)) *  Math.PI / 180) * this.thrust * deltaTime);
		this.vel.y = (Math.sin(((this.angle)) *  Math.PI / 180) * this.thrust * deltaTime);	

		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
    }

	Archer.prototype.clicked = function(){
		this.playAnimation('fight', 150);
	}
	
	Archer.prototype.render = function(context){
		Sprite.prototype.render.call(this, context);
		if(this.selected){
			context.strokeStyle = "rgb(0,255,0)";
			context.strokeRect(this.pos.x, this.pos.y, this.width, this.height);
		}
	}

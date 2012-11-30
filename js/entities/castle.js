    function Castle(label)
    {    
		this.health = 100;
		this.live = true;
		this.label = label;
		Game.addEntity(this, true);
    }
    
    this.Castle = Castle;
    
	// need to fix up some direct references to game state, time crunch!!
	Castle.prototype.hit = function(damage){
		this.health -= damage;
	}
	
    Castle.prototype.update = function(deltaTime)
    {	
		this.label.text = this.health.toFixed(2) + "%";
    }

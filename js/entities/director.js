    function Director(laneSel)
    {    
		this.live = true;
		this.minSpawnWaitTime = 5000;
		this.lastSpawned = new Date().getTime();
		
		this.laneSel = laneSel;
		
		Game.addEntity(this, true);
    }
    
    this.Director = Director;
    
	// need to fix up some direct references to game state, time crunch!!
	Director.prototype.spawnUnit = function(){

		new Footman({
					x:this.laneSel.pos.x, 
					y:this.laneSel.pos.y,
					z:1,
					angle : 90,
					resource : Game.resourceManager.getResource("footman-e"),
					team : 2,
					lane : this.laneSel.currentLane,
					laneData : Game.gameState.laneData,
					laneGrid : Game.gameState.laneGrid,
					castle : Game.gameState.pCastle
		});
	}
	
    Director.prototype.update = function(deltaTime)
    {	
		if(new Date().getTime() > this.lastSpawned + this.minSpawnWaitTime){
				this.lastSpawned = new Date().getTime();
				this.spawnUnit();
		}	
    }

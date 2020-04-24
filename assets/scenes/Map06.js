
// You can write more code here

/* START OF COMPILED CODE */

class Map06 extends Phaser.Scene {
	
	constructor() {
	
		super("Map06");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1668.8219, 1527.2455, "map06");
		
		var warp = this.add.warp(1477.7998, 483.69843, "warp");
		warp.setData("zone", "Map03");
		warp.setData("x", 288);
		warp.setData("y", 2016);
		warp.setScale(1.6189777, 1.5708395);
		
		var obstacle = this.add.obstacle(3165.5356, 10.788564, "obstacle");
		obstacle.setOrigin(0.0, 0.0);
		obstacle.setScale(4.1301847, 36.511192);
		
		this.fWarp = this.add.group([ warp ]);
		this.fWarp = this.add.group([ warp ]);
		this.fObstacle = this.add.group([ obstacle ]);
		
		this.fMapScene = mapScene;
		
	}
	
	
	
	
	
	/* START-USER-CODE */

	init(data){
		this.dataScene = data
	}
	create() {
		this._create();
		this.scene.get("mySceneManager").createMap(this);
	}
	

	update() {
		if(!this.sys.isTransitioning()){
			this.scene.get("mySceneManager").updateMap(this);	
			if(this.fHero.y >=2000 && this.fHero.x >=3248){
				this.changeTransitionMap("Map03",128,2084,"right")
			
			}
				
		}
		
		

		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

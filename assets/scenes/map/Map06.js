
// You can write more code here

/* START OF COMPILED CODE */

class Map06 extends Phaser.Scene {
	
	constructor() {
	
		super("Map06");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1664.0, 1536.0, "map06");
		
		var obstacle = this.add.obstacle(3165.5356, 10.788564, "obstacle");
		obstacle.setOrigin(0.0, 0.0);
		obstacle.setScale(4.1301847, 27.25911);
		
		var warp_1 = this.add.warp(3294.3384, 2164.7993, "warp");
		warp_1.setData("zone", "Map03");
		warp_1.setData("x", 288);
		warp_1.setData("y", 2016);
		warp_1.setData("dir", "right");
		warp_1.setScale(1.6189777, 1.5708395);
		
		var warp = this.add.group([  ]);
		this.fWarp = this.add.group([ warp_1 ]);
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
			/*
			if(this.fHero.y >=2000 && this.fHero.x >=3248){
				this.changeTransitionMap("Map03",128,2084,"right")
			
			} */
				
		}
		
		

		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

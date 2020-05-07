
// You can write more code here

/* START OF COMPILED CODE */

class Map05 extends Phaser.Scene {
	
	constructor() {
	
		super("Map05");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1658.09, 1542.8605, "map05");
		
		var obstacle = this.add.obstacle(-51.90646, -35.328644, "obstacle");
		obstacle.setOrigin(0.0, 0.0);
		obstacle.setScale(3.6955419, 62.49945);
		
		var obstacle_1 = this.add.obstacle(3177.9302, -32.35328, "obstacle");
		obstacle_1.setOrigin(0.0, 0.0);
		obstacle_1.setScale(3.6955419, 21.914549);
		
		var obstacle_2 = this.add.obstacle(3161.4116, 1553.4231, "obstacle");
		obstacle_2.setOrigin(0.0, 0.0);
		obstacle_2.setScale(3.6955419, 30.283924);
		
		var obstacle_3 = this.add.obstacle(149.53775, -48.87189, "obstacle");
		obstacle_3.setOrigin(0.0, 0.0);
		obstacle_3.setScale(55.25833, 6.3871565);
		
		var obstacle_4 = this.add.obstacle(2313.2341, 1111.2206, "obstacle");
		obstacle_4.setOrigin(0.0, 0.0);
		obstacle_4.setScale(3.792129, 4.044937);
		
		var obstacle_5 = this.add.obstacle(503.1258, 2526.948, "obstacle");
		obstacle_5.setOrigin(0.0, 0.0);
		obstacle_5.setScale(3.792129, 4.044937);
		
		var warp = this.add.warp(3293.929, 1368.1755, "warp");
		warp.setData("zone", "Map01");
		warp.setData("x", 288);
		warp.setData("y", 1221);
		warp.setData("dir", "right");
		warp.setScale(1.6189777, 1.5708395);
		
		this.fObstacle = this.add.group([ obstacle_5, obstacle_4, obstacle_3, obstacle_2, obstacle_1, obstacle ]);
		this.fWarp = this.add.group([ warp ]);
		
		this.fMapScene = mapScene;
		
	}
	
	
	
	
	/* START-USER-CODE */

	init(data){
		this.dataScene = data
	}
	create() {
		var preCreateMap = this.scene.get("mySceneManager").preCreateMap.bind(this);
		this._create()

		preCreateMap()
		var createMap = this.scene.get("mySceneManager").createMap.bind(this);
		createMap()
	}
	

	update() {

	
			if(!this.sys.isTransitioning()){//
					this.scene.get("mySceneManager").updateMap(this);
					/*
					if(this.fHero.y <=1256 && this.fHero.x >=3268){
						//go in map01
						this.changeTransitionMap("Map01",138,1221,"right")
						
					}*/
				
		    }
		
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

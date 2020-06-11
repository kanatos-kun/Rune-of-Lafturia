
// You can write more code here

/* START OF COMPILED CODE */

class Map004 extends Phaser.Scene {
	
	constructor() {
	
		super("Map004");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1654.7802, 1531.0159, "map04");
		
		var villager_01 = this.add.npc(1504.6808, 1635.3568, "npc_01");
		villager_01.setData("tagName", "Clara");
		villager_01.setData("eventPage", "npc_map04_01");
		
		var obstacle = this.add.obstacle(-49.576813, 1632.7251, "obstacle");
		obstacle.setOrigin(0.0, 0.0);
		obstacle.setScale(3.3374913, 24.125095);
		
		var obstacle_1 = this.add.obstacle(3117.4426, 1639.7363, "obstacle");
		obstacle_1.setOrigin(0.0, 0.0);
		obstacle_1.setScale(3.3374913, 24.125095);
		
		var obstacle_2 = this.add.obstacle(5.405919, 2826.9873, "obstacle");
		obstacle_2.setOrigin(0.0, 0.0);
		obstacle_2.setScale(58.46311, 4.1973524);
		
		var obstacle_3 = this.add.obstacle(2829.624, 878.21674, "obstacle");
		obstacle_3.setOrigin(0.0, 0.0);
		obstacle_3.setScale(2.1415079, 2.7582624);
		
		var warp = this.add.warp(1661.4272, 8.234844, "warp");
		warp.setData("zone", "Map03");
		warp.setData("x", 1668);
		warp.setData("y", 2807);
		warp.setData("dir", "top");
		warp.setScale(1.6189777, 1.5708395);
		
		this.fNpc = this.add.group([ villager_01 ]);
		this.fObstacle = this.add.group([ obstacle_3, obstacle_2, obstacle_1, obstacle ]);
		this.fWarp = this.add.group([ warp ]);
		
		this.fMapScene = mapScene;
		this.fVillager_01 = villager_01;
		
	}
	
	
	
	
	
	
	/* START-USER-CODE */
	
	init(data){
		this.dataScene = data
	}
	
	create() {
		
		
		this.map = this.add.tilemap("map04");
		this.tileset = [
		this.map.addTilesetImage("grass_atlas"),
		this.map.addTilesetImage("medium_object-0"),
		this.map.addTilesetImage("tree01"),
		this.map.addTilesetImage("very_small_object-0"),
		this.map.addTilesetImage("small_object-0"),
		this.map.addTilesetImage("medium_object-1")]
		this.map.createStaticLayer("background",this.tileset)
		this.map.createStaticLayer("tree",this.tileset)
		this.map.createStaticLayer("tree2",this.tileset)
		this.map.createStaticLayer("tree3",this.tileset)
		this.map.createStaticLayer("roches",this.tileset)	
		
		
		var preCreateMap = this.scene.get("mySceneManager").preCreateMap.bind(this);
		this._create()
		this.fMapScene.destroy()
		preCreateMap()
		var createMap = this.scene.get("mySceneManager").createMap.bind(this);
		createMap()
		

		
	}
	


	update(time, delta) {
		
		if(!this.sys.isTransitioning()){//
				this.scene.get("mySceneManager").updateMap(this, time, delta);
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

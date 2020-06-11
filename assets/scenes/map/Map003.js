
// You can write more code here

/* START OF COMPILED CODE */

class Map003 extends Phaser.Scene {
	
	constructor() {
	
		super("Map003");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1660.517, 1537.2662, "map03");
		
		var bee = this.add.enemy_bee(2621.4165, 1237.5485, "bee");
		bee.flipX = true;
		
		var obstacle = this.add.obstacle(-117.63166, 14.033614, "obstacle");
		obstacle.setOrigin(0.0, 0.0);
		obstacle.setScale(4.099335, 24.881817);
		
		var obstacle_1 = this.add.obstacle(3205.799, 19.605871, "obstacle");
		obstacle_1.setOrigin(0.0, 0.0);
		obstacle_1.setScale(4.099335, 25.256065);
		
		var obstacle_2 = this.add.obstacle(1860.4281, 1719.5334, "obstacle");
		obstacle_2.setOrigin(0.0, 0.0);
		obstacle_2.setScale(4.249817, 4.6626573);
		
		var warp = this.add.warp(1666.0641, 1.5683495, "warp");
		warp.setData("zone", "Map02");
		warp.setData("x", 1668);
		warp.setData("y", 2807);
		warp.setData("dir", "top");
		warp.setScale(1.6189777, 1.5708395);
		
		var warp_1 = this.add.warp(-0.8216276, 2161.9673, "warp");
		warp_1.setData("zone", "Map06");
		warp_1.setData("x", 3044);
		warp_1.setData("y", 2080);
		warp_1.setData("dir", "left");
		warp_1.setScale(1.6189777, 1.5708395);
		
		var warp_2 = this.add.warp(1651.5078, 3062.4434, "warp");
		warp_2.setData("zone", "Map04");
		warp_2.setData("x", 1428);
		warp_2.setData("y", 137);
		warp_2.setData("dir", "bottom");
		warp_2.setScale(1.6189777, 1.5708395);
		
		var warp_3 = this.add.warp(3290.7236, 2170.71, "warp");
		warp_3.setData("zone", "Map07");
		warp_3.setData("x", 288);
		warp_3.setData("y", 2080);
		warp_3.setData("dir", "right");
		warp_3.setScale(1.6189777, 1.5708395);
		
		this.fEnemies = this.add.group([ bee ]);
		this.fObstacle = this.add.group([ obstacle_2, obstacle_1, obstacle ]);
		this.fWarp = this.add.group([ warp_1, warp_3, warp_2, warp ]);
		
		this.fMapScene = mapScene;
		
	}
	
	
	
	
	
	/* START-USER-CODE */
	init(data){
		this.dataScene = data
	}

	create() {
		
		
		this.map = this.add.tilemap("map03");
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
		this.map.createStaticLayer("herbes",this.tileset)
		this.map.createStaticLayer("roches",this.tileset)
		this.map.createStaticLayer("autre",this.tileset)
		this.map.createStaticLayer("autre2",this.tileset)		
		this.map.createStaticLayer("flower",this.tileset)	
		
		
		
		
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
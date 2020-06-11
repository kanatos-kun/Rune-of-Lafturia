
// You can write more code here

/* START OF COMPILED CODE */

class Map002 extends Phaser.Scene {
	
	constructor() {
	
		super("Map002");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1661.4543, 1536.0804, "map02");
		
		var obstacle = this.add.obstacle(-143.93748, -16.541082, "obstacle");
		obstacle.setOrigin(0.0, 0.0);
		obstacle.setScale(5.2347856, 61.56116);
		
		var obstacle_1 = this.add.obstacle(3147.3188, -3.216182, "obstacle");
		obstacle_1.setOrigin(0.0, 0.0);
		obstacle_1.setScale(5.2347856, 61.56116);
		
		var obstacle_2 = this.add.obstacle(2578.3447, 1339.2703, "obstacle");
		obstacle_2.setOrigin(0.0, 0.0);
		obstacle_2.setScale(4.2830124, 5.0634723);
		
		var warp = this.add.warp(1658.8627, 6.7007904, "warp");
		warp.setData("zone", "Map01");
		warp.setData("x", 1668);
		warp.setData("y", 2807);
		warp.setData("dir", "top");
		warp.setScale(1.6189777, 1.5708395);
		
		var warp_1 = this.add.warp(1653.8977, 3056.8564, "warp");
		warp_1.setData("zone", "Map03");
		warp_1.setData("x", 1428);
		warp_1.setData("y", 250);
		warp_1.setData("dir", "bottom");
		warp_1.setScale(1.6189777, 1.5708395);
		
		this.fObstacle = this.add.group([ obstacle_2, obstacle_1, obstacle ]);
		this.fWarp = this.add.group([ warp_1, warp ]);
		
		this.fMapScene = mapScene;
		
	}
	
	
	
	
	/* START-USER-CODE */

	/* START-USER-CODE */
	init(data){
		this.dataScene = data
	}
	
	preload(){
		
	}

	create() {
		this.map = this.add.tilemap("map02");
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
		this.map.createStaticLayer("herbes",this.tileset)
		this.map.createStaticLayer("roches",this.tileset)
		
		var preCreateMap = this.scene.get("mySceneManager").preCreateMap.bind(this);
		preCreateMap()
		this._create()
		this.fMapScene.destroy()
		var createMap = this.scene.get("mySceneManager").createMap.bind(this);
		createMap()
	}
	

	update(){
		
		if(!this.sys.isTransitioning()){//
			this.scene.get("mySceneManager").updateMap(this);
			}
			
		}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

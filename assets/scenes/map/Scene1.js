
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Map01");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1650.0, 1530.0, "map01");
		
		var bee = this.add.enemy_bee(2384.4402, 2286.3933, "bee");
		bee.flipX = true;
		
		var rect815 = this.add.obstacle(-30.005621, -47.35043, "obstacle");
		rect815.setOrigin(0.0, 0.0);
		rect815.setScale(59.394684, 4.434119);
		
		var rect_1 = this.add.obstacle(-76.03509, 171.09714, "obstacle");
		rect_1.setOrigin(0.0, 0.0);
		rect_1.setScale(4.0498815, 15.461963);
		
		var rect_2 = this.add.obstacle(3129.9895, 169.98428, "obstacle");
		rect_2.setOrigin(0.0, 0.0);
		rect_2.setScale(3.1341012, 57.36266);
		
		var rect_3 = this.add.obstacle(-71.663734, 1506.5342, "obstacle");
		rect_3.setOrigin(0.0, 0.0);
		rect_3.setScale(4.534289, 30.631662);
		
		var rect_4 = this.add.obstacle(2441.4739, 1727.3314, "obstacle");
		rect_4.setOrigin(0.0, 0.0);
		rect_4.setScale(4.2151246, 4.589697);
		
		var bee_1 = this.add.enemy_bee(1071.6118, 1024.0619, "bee");
		
		var warp = this.add.warp(1658.086, 3055.5156, "warp");
		warp.setData("zone", "Map02");
		warp.setData("x", 1650);
		warp.setData("y", 250);
		warp.setData("dir", "bottom");
		warp.setScale(1.6189777, 1.5708395);
		
		var warp_1 = this.add.warp(-1.4731033, 1292.9915, "warp");
		warp_1.setData("zone", "Map05");
		warp_1.setData("x", 2984);
		warp_1.setData("y", 1252);
		warp_1.setData("dir", "left");
		warp_1.setScale(1.6189777, 1.5708395);
		
		this.fEnemies = this.add.group([ bee, bee_1 ]);
		this.fObstacle = this.add.group([ rect815, rect_4, rect_3, rect_2, rect_1 ]);
		this.fWarp = this.add.group([ warp_1, warp ]);
		
		this.fMapScene = mapScene;
		
	}
	
	
	
	
	
	/* START-USER-CODE */
	init(data){
		this.dataScene = data
	}
	create() {
		
		

		console.log(this.cache)
		
		this.map = this.add.tilemap("map01");
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
		
		var preCreateMap = this.scene.get("mySceneManager").preCreateMap.bind(this);
		preCreateMap()
		this._create()
		this.fMapScene.destroy()
		var createMap = this.scene.get("mySceneManager").createMap.bind(this);
		createMap()
		
		
		/*var map = this.add.tilemap("map01");
		var tileset = [map.addTilesetImage("grass_atlas"),
		map.addTilesetImage("medium_object-0"),
		map.addTilesetImage("tree01"),
		map.addTilesetImage("very_small_object-0"),
		map.addTilesetImage("small_object-0"),
		map.addTilesetImage("medium_object-1")]
		map.createStaticLayer("background",tileset)
		map.createStaticLayer("tree",tileset)
		map.createStaticLayer("tree2",tileset)
		map.createStaticLayer("tree3",tileset)
		map.createStaticLayer("herbes",tileset) */
	}
	

	update() {
		
		if(!this.sys.isTransitioning()){//
				this.scene.get("mySceneManager").updateMap(this);
		}

	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

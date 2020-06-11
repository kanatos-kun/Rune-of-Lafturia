
// You can write more code here

/* START OF COMPILED CODE */

class Map001 extends Phaser.Scene {
	
	constructor() {
	
		super("Map001");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1650.0, 1530.0, "map01");
		
		this.fMapScene = mapScene;
		
	}
	
	
	/* START-USER-CODE */
	init(data){
		this.dataScene = data
	}
	create() {
		
		var preCreateMap = this.scene.get("mySceneManager").preCreateMap.bind(this);
		preCreateMap()
		this.tileset = [
		this.map.addTilesetImage("grass_atlas"),
		this.map.addTilesetImage("medium_object-0"),
		this.map.addTilesetImage("tree01"),
		this.map.addTilesetImage("very_small_object-0"),
		this.map.addTilesetImage("small_object-0"),
		this.map.addTilesetImage("medium_object-1"),
		this.map.addTilesetImage("info")]
		this.map.createStaticLayer("background",this.tileset)
		this.map.createStaticLayer("tree",this.tileset)
		this.map.createStaticLayer("tree2",this.tileset)
		this.map.createStaticLayer("tree3",this.tileset)
		this.map.createStaticLayer("herbes",this.tileset)
		
		this._create();
		this.fMapScene.destroy();
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
		this.scene.run("windowInventory")
		this.scene.bringToTop("windowInventory")
	}
	

	update(time, delta) {
		
		if(!this.sys.isTransitioning()){//
				this.scene.get("mySceneManager").updateMap(this, time, delta);
		}

	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

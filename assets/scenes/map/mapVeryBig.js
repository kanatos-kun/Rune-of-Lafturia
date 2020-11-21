
// You can write more code here

/* START OF COMPILED CODE */

class mapVeryBig extends Phaser.Scene {
	
	constructor() {
	
		super("mapVeryBig");
		
	}
	
	_create() {
		
		
	}
	
	
	/* START-USER-CODE */
	init(data){
		this.dataScene = data;
	}
	create(){
		
		var preCreateMap = this.scene.get("mySceneManager").preCreateMap.bind(this);
		preCreateMap();
		this.tileset = [
		this.map.addTilesetImage("grass_atlas"),
		this.map.addTilesetImage("medium_object-0"),
		this.map.addTilesetImage("tree01"),
		this.map.addTilesetImage("very_small_object-0"),
		this.map.addTilesetImage("small_object-0"),
		this.map.addTilesetImage("medium_object-1"),
		this.map.addTilesetImage("pathfinding"),
		this.map.addTilesetImage("info")]
		this.map.createStaticLayer("background",this.tileset);
		this.map.createStaticLayer("tree",this.tileset);
		this.map.obstacle = this.map.createStaticLayer("pathfinding",this.tileset);

		this._create()

		var createMap = this.scene.get("mySceneManager").createMap.bind(this);
		createMap()
		
		
	}
	// Write your code here.

	update(time, delta) {
		if(!this.sys.isTransitioning()){//
				this.scene.get("mySceneManager").updateMap(this, time, delta);
		}

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

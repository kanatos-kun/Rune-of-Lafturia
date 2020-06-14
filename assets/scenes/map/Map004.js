
// You can write more code here

/* START OF COMPILED CODE */

class Map004 extends Phaser.Scene {
	
	constructor() {
	
		super("Map004");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1654.7802, 1531.0159, "map04");
		
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
		this.map.createStaticLayer("roches",this.tileset)	
		
		this._create();
		

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

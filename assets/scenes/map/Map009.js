
// You can write more code here

/* START OF COMPILED CODE */

class Map009 extends Phaser.Scene {
	
	constructor() {
	
		super("Map009");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(3328.271, 3061.176, "map09");
		
		this.fMapScene = mapScene;
		
	}
	
	
	/* START-USER-CODE */
	init(data){
		this.dataScene = data;
	}
	create(){
		
		var preCreateMap = this.scene.get("mySceneManager").preCreateMap.bind(this);
		preCreateMap();
		this.tileset = [
		this.map.addTilesetImage("TownColor2@256x256"),
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
		this.map.createStaticLayer("house",this.tileset)
		this.map.createStaticLayer("props2",this.tileset)
		this.map.createStaticLayer("props",this.tileset)
		this.map.createStaticLayer("lanterne",this.tileset)
		this.map.createStaticLayer("hutte",this.tileset)
		this.map.createStaticLayer("shadow",this.tileset)
		this.map.createStaticLayer("roches",this.tileset)	

		this._create()
		this.fMapScene.destroy()

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

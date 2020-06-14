
// You can write more code here

/* START OF COMPILED CODE */

class Map002 extends Phaser.Scene {
	
	constructor() {
	
		super("Map002");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1661.4543, 1536.0804, "map02");
		
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
		this.map.createStaticLayer("herbes",this.tileset)
		this.map.createStaticLayer("roches",this.tileset)
		
		this._create();
		
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

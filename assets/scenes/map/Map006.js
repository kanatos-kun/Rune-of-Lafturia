
// You can write more code here

/* START OF COMPILED CODE */

class Map006 extends Phaser.Scene {
	
	constructor() {
	
		super("Map006");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1664.0, 1536.0, "map06");
		
		var coffre_closed = this.add.coffre(1944.3375, 1204.9778, "coffre_closed");
		coffre_closed.setData("itemName", "gold");
		coffre_closed.setData("value", 40);
		coffre_closed.setData("globalSwitchId", 0);
		coffre_closed.setData("globalSwitchValue", "true");
		coffre_closed.setScale(0.5621457, 0.5646667);
		
		this.fCoffres = this.add.group([ coffre_closed ]);
		
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
		this.map.createStaticLayer("flower",this.tileset)	
		

		this._create()
		this.fMapScene.destroy()

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

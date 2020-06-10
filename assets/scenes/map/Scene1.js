
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Map01");
		
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
		
		var obstacle = this.map.createFromObjects("InfoMap",213,{key:"info",frame:0})
		obstacle.map((o,i)=>{
			let itemObstacle = this.add.obstacle(o.x,o.y);
			itemObstacle.setScale(o.scaleX,o.scaleY);
			this.fObstacle.add(itemObstacle);
			o.destroy();
		})
		var warp = this.map.createFromObjects("InfoMap",214,{key:"info",frame:1})
		warp.map((o,i)=>{
			let itemWarp = this.add.warp(o.x,o.y);
			itemWarp.setData("dir",o.getData(0).value)
			itemWarp.setData("x",o.getData(1).value)
			itemWarp.setData("y",o.getData(2).value)
			itemWarp.setData("zone",o.getData(3).value)
			this.fWarp.add(itemWarp);
			o.destroy();
		})
		//this.layerInfo = this.map.createStaticLayer("InfoMap",this.tileset)
		// Step 1 :
		// - Loop sur tout les objets obstacles
		// Step 2 :
		// - Créer un nouvelle objet obstacles à l'emplacement de l'index
		// Step 2.5 : 
		// - Donné les donnés de l'index au nouvelle objet obstacle
		// Step 3 : 
		// - Rajouté l'index au groupe this.fObstacle
		this.fSPawnMob = []
		this.map.findObject("InfoMap",(value,index,array)=>{
			if(value.name ==="spawn"){
				let e = value.properties[1].value.match(/\w([A-Za-z-\s])+/g);
				e.map((v,i)=>{
					e[i]=v.trim()
				})
				value.properties[1].value = e;
				this.fSPawnMob.push(value)

			}
		})
		console.log(this.fSPawnMob)
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

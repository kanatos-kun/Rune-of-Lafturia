
// You can write more code here

/* START OF COMPILED CODE */

class Map07 extends Phaser.Scene {
	
	constructor() {
	
		super("Map07");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1665.2249, 1533.4303, "map07");
		
		var obstacle = this.add.obstacle(-34.06509, -20.21713, "obstacle");
		obstacle.setOrigin(0.0, 0.0);
		obstacle.setScale(3.533797, 27.604033);
		
		var obstacle_1 = this.add.obstacle(36.840973, -24.731876, "obstacle");
		obstacle_1.setOrigin(0.0, 0.0);
		obstacle_1.setScale(58.79555, 7.0818954);
		
		var obstacle_2 = this.add.obstacle(1040.3412, 1289.4391, "obstacle");
		obstacle_2.setOrigin(0.0, 0.0);
		obstacle_2.setScale(2.855342, 3.1979818);
		
		var obstacle_3 = this.add.obstacle(2574.4402, 1537.5492, "obstacle");
		obstacle_3.setOrigin(0.0, 0.0);
		obstacle_3.setScale(2.5917232, 3.250979);
		
		var obstacle_4 = this.add.obstacle(511.00854, 2533.854, "obstacle");
		obstacle_4.setOrigin(0.0, 0.0);
		obstacle_4.setScale(3.331231, 3.7309785);
		
		var warp = this.add.warp(-6.52479, 2163.5437, "warp");
		warp.setData("zone", "Map03");
		warp.setData("x", 3096);
		warp.setData("y", 2080);
		warp.setData("dir", "left");
		warp.setScale(1.6189777, 1.5708395);
		
		var warp_1 = this.add.warp(3302.0684, 2175.346, "warp");
		warp_1.setData("zone", "Map08");
		warp_1.setData("x", 288);
		warp_1.setData("y", 2080);
		warp_1.setData("dir", "right");
		warp_1.setScale(1.6189777, 1.5708395);
		
		this.fObstacle = this.add.group([ obstacle_4, obstacle_3, obstacle_2, obstacle_1, obstacle ]);
		this.fWarp = this.add.group([ warp, warp_1 ]);
		
		this.fMapScene = mapScene;
		
	}
	
	
	
	
	/* START-USER-CODE */

	init(data){
		this.dataScene = data
	}
	create() {
		this.map = this.add.tilemap("map07");
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
		this.map.createStaticLayer("flowers",this.tileset)	
		this.map.createStaticLayer("roches",this.tileset)	
				
		var preCreateMap = this.scene.get("mySceneManager").preCreateMap.bind(this);
		this._create()
		this.fMapScene.destroy()
		preCreateMap()
		var createMap = this.scene.get("mySceneManager").createMap.bind(this);
		createMap()
	}
	

	update() {

		if(!this.sys.isTransitioning()){//
			this.scene.get("mySceneManager").updateMap(this);
			/*
			if(this.fHero.y >=1748 && this.fHero.x <=50){
				this.changeTransitionMap("Map03",3096,2080,"left")
			}
			if(this.fHero.y >=1748 && this.fHero.x >=3296){
				this.changeTransitionMap("Map08",138,2080,"right")
			}*/
		}
		

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

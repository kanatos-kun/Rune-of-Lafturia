
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
		
		var obstacle_1 = this.add.obstacle(177.15245, -8.542091, "obstacle");
		obstacle_1.setOrigin(0.0, 0.0);
		obstacle_1.setScale(55.679157, 5.862968);
		
		var obstacle_2 = this.add.obstacle(1169.8595, 1170.714, "obstacle");
		obstacle_2.setOrigin(0.0, 0.0);
		obstacle_2.setScale(2.855342, 3.1979818);
		
		var obstacle_3 = this.add.obstacle(2455.715, 1397.2377, "obstacle");
		obstacle_3.setOrigin(0.0, 0.0);
		obstacle_3.setScale(4.283009, 4.6637244);
		
		var obstacle_4 = this.add.obstacle(343.71408, 2749.7178, "obstacle");
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

		var preCreateMap = this.scene.get("mySceneManager").preCreateMap.bind(this);
		this._create()

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

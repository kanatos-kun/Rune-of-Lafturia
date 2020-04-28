
// You can write more code here

/* START OF COMPILED CODE */

class Map02 extends Phaser.Scene {
	
	constructor() {
	
		super("Map02");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1661.4543, 1536.0804, "map02");
		
		var obstacle = this.add.obstacle(-150.59998, 3.4462843, "obstacle");
		obstacle.setOrigin(0.0, 0.0);
		obstacle.setScale(5.2347856, 61.56116);
		
		var obstacle_1 = this.add.obstacle(3147.3188, -3.216182, "obstacle");
		obstacle_1.setOrigin(0.0, 0.0);
		obstacle_1.setScale(5.2347856, 61.56116);
		
		var obstacle_2 = this.add.obstacle(2401.123, 1302.6267, "obstacle");
		obstacle_2.setOrigin(0.0, 0.0);
		obstacle_2.setScale(4.2830124, 5.0634723);
		
		var warp = this.add.warp(1658.8627, 6.7007904, "warp");
		warp.setData("zone", "Map01");
		warp.setData("x", 1668);
		warp.setData("y", 2807);
		warp.setData("dir", "top");
		warp.setScale(1.6189777, 1.5708395);
		
		var warp_1 = this.add.warp(1653.8977, 3056.8564, "warp");
		warp_1.setData("zone", "Map03");
		warp_1.setData("x", 1428);
		warp_1.setData("y", 250);
		warp_1.setData("dir", "bottom");
		warp_1.setScale(1.6189777, 1.5708395);
		
		this.fObstacle = this.add.group([ obstacle_2, obstacle_1, obstacle ]);
		this.fWarp = this.add.group([ warp_1, warp ]);
		
		this.fMapScene = mapScene;
		
	}
	
	
	
	
	/* START-USER-CODE */

	/* START-USER-CODE */
	init(data){
		this.dataScene = data
	}

	create() {
		this._create();
		this.scene.get("mySceneManager").createMap(this);
	}
	

	update(){
		
		

		if(!this.sys.isTransitioning()){//
			this.scene.get("mySceneManager").updateMap(this);
			/*
				if(this.fHero.y >=2900){
					this.changeTransitionMap("Map03",1428,137,"bottom")
				}
				if(this.fHero.y <=30){
					this.changeTransitionMap("Map01",1668,2807,"top")
				} */
				
			}

		}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

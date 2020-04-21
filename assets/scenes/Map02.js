
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
		
		this.fObstacle = this.add.group([ obstacle_2, obstacle_1, obstacle ]);
		
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
				if(this.fHero.y >=2900){
					this.changeTransitionMap("Map03",1428,137,"bottom")
				}
				if(this.fHero.y <=30){
					this.changeTransitionMap("Map01",1668,2807,"top")
				}
				
			}

		}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


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
		obstacle.setScale(3.533797, 31.946827);
		
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
		
		this.fObstacle = this.add.group([ obstacle_4, obstacle_3, obstacle_2, obstacle_1, obstacle ]);
		
		this.fMapScene = mapScene;
		
	}
	
	
	
	/* START-USER-CODE */

	init(data){
		this.dataScene = data
	}
	create() {
		this._create();
		this.scene.get("mySceneManager").createMap(this);
	}
	

	update() {

		if(!this.sys.isTransitioning()){//
			this.scene.get("mySceneManager").updateMap(this);
			if(this.fHero.y >=1748 && this.fHero.x <=50){
				this.changeTransitionMap("Map03",3096,2080,"left")
			}
		}
		
		

		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

class Map03 extends Phaser.Scene {
	
	constructor() {
	
		super("Map03");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1660.517, 1537.2662, "map03");
		
		var bee = this.add.bee(2621.4165, 1237.5485, "bee");
		bee.flipX = true;
		
		var obstacle = this.add.obstacle(-117.63166, 14.033614, "obstacle");
		obstacle.setOrigin(0.0, 0.0);
		obstacle.setScale(4.099335, 24.881817);
		
		var obstacle_1 = this.add.obstacle(3205.799, 19.605871, "obstacle");
		obstacle_1.setOrigin(0.0, 0.0);
		obstacle_1.setScale(4.099335, 25.256065);
		
		var obstacle_2 = this.add.obstacle(1860.4281, 1719.5334, "obstacle");
		obstacle_2.setOrigin(0.0, 0.0);
		obstacle_2.setScale(4.249817, 4.6626573);
		
		this.fEnemies = this.add.group([ bee ]);
		this.fObstacle = this.add.group([ obstacle_2, obstacle_1, obstacle ]);
		
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
				
					if(Phaser.Input.Keyboard.JustDown(this.keys.SPACE)){
						//check if it's in the detection zone
					if(Phaser.Math.Distance.Between(this.fHero.x,this.fHero.y,1988,1928) < 350 ){
						this.dialogueState = !this.dialogueState;
						this.fHero.body.setVelocity(0,0)
						let textConfig = {
						    state:this.dialogueState,
							tagName:{isVisible:false},
							text: ["Village cocorico =>"],
							textIteration : this.dialogueIteration				
						}
						if(this.dialogueIteration > textConfig.text.length){
								this.dialogueState = false;
								textConfig.state = this.dialogueState;
								this.dialogueIteration = 0
						}else{
								this.dialogueIteration += 1
						}
						this.scene.run("dialogueWindow",textConfig)
		
					} 
				}
				
				
				if(this.fHero.y >=2900 && this.fHero.x >= 1612){
					//tp map 04
					this.changeTransitionMap("Map04",1428,137,"bottom")
				}else if(this.fHero.y <=30 && this.fHero.x <=1636){
					//tp map02
					this.changeTransitionMap("Map02",1668,2807,"top")
				}else if(this.fHero.y >=1452 && this.fHero.x <= 50){
					this.changeTransitionMap("Map06",3044,2080,"left")
					//tp map06
				}else if(this.fHero.y >=1452 && this.fHero.x >= 3252){
					this.changeTransitionMap("Map07",138,2080,"right")
					//tp map07
				}
				
				
				
				
				
				
				}

		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
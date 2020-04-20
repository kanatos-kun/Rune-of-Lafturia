
// You can write more code here

/* START OF COMPILED CODE */

class Map05 extends Phaser.Scene {
	
	constructor() {
	
		super("Map05");
		
	}
	
	_create() {
	
		this.add.image(1646.7208, 1530.2878, "map05");
		
		var hero = this.add.hero(1611.2284, 791.3535, "hero");
		
		this.fHero = hero;
		
	}
	
	
	/* START-USER-CODE */

	init(data){
		this.dataScene = data
	}
	create() {
		this._create();
		this.dialogueIteration = 0
		this.dialogueState = false;
		this.game.gold = 0;
		this.game.currentMap = "Map01"
		this.fHero.setPosition(this.dataScene.x,this.dataScene.y)
		this.heroAttack = this.add.group();
		this.physics.add.overlap(this.heroAttack,this.fEnemies,this.attackEnemyCollision)
		this.keys=this.input.keyboard.addKeys('Z,S,Q,D,SPACE')
		
		
		//add hud 
		this.scene.run("menu_hud")
	}
	

	update() {
		if(!this.dialogueState){
			
			if(this.keys.Z.isDown) {
	               this.fHero.y -=10
			}
			
			if(this.keys.S.isDown){
	                this.fHero.y +=10
			}
			if(this.keys.D.isDown){
	                this.fHero.x +=10
			}
			if(this.keys.Q.isDown){
	                this.fHero.x -=10
			}
			
		}
		if(this.input.activePointer.leftButtonDown( ) ){
			//console.log("click left!")
			if(  (this.fHero.timeAttack.state) && this.input.activePointer.y <=3060 ){
				
				// Change angle 
				let angle = this.utils.findAngle(this.fHero.x,this.fHero.y,this.input.activePointer.x,this.input.activePointer.y)
				angle -=0.5
				let a =this.add.slash(this.fHero,angle)
				this.heroAttack.add(a)
				this.fHero.timeAttack.state = false
			}

		}
		
		if(this.input.activePointer.rightButtonDown( ) ){
			//console.log("click right!")
		}
		
		if(this.fHero.y <=1256 && this.fHero.x >=3268){
			//go in map01
			this.scene.start("Map01",{x:138,y:1221})
		}
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

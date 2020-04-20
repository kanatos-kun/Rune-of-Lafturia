
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Map01");
		
	}
	
	_create() {
	
		this.add.image(1658.8756, 1522.299, "map01");
		
		var bee = this.add.bee(2275.6448, 2035.4805, "bee");
		bee.flipX = true;
		
		this.fEnemies = this.add.group([ bee ]);
		
		
	}
	
	
	/* START-USER-CODE */
	init(data){
		this.dataScene = data
	}
	create() {
		this._create();
		this.scene.get("mySceneManager").createMap(this);
		//this.dialogueIteration = 0
		//this.dialogueState = false;
		//this.fHero.setPosition(this.dataScene.x,this.dataScene.y)
		//this.heroAttack = this.add.group();
		//this.physics.add.overlap(this.heroAttack,this.fEnemies,this.attackEnemyCollision)
		//this.keys=this.input.keyboard.addKeys('Z,S,Q,D,SPACE')
		
		
		//add hud 
		//this.scene.run("menu_hud")
	}
	/*
	attackEnemyCollision(hero,enemy){
		if(!enemy.invincible.state){
			enemy.currentHp = enemy.currentHp - hero.attack
			enemy.invincible.state = true
		}

		
	} */
	

	update() {
		
		this.scene.get("mySceneManager").updateMap(this);
		
		/*if(!this.dialogueState){
			
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
			
		} */
		/*
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
		} */
		
		if(this.fHero.y >=2900 && this.fHero.x >= 1590){
			//go in map02
			this.scene.start("Map02",{x:1650,y:100})
		}else if(this.fHero.y <=1191 && this.fHero.x <= 3){
			//go in map05
			this.scene.start("Map05",{x:2984,y:1252})
		}
		
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

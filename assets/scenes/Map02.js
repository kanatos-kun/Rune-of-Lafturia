
// You can write more code here

/* START OF COMPILED CODE */

class Map02 extends Phaser.Scene {
	
	constructor() {
	
		super("Map02");
		
	}
	
	_create() {
	
		this.add.image(1647.516, 1536.0804, "map02");
		
		
	}
	
	/* START-USER-CODE */

	/* START-USER-CODE */
	init(data){
		this.dataScene = data
	}

	create() {
		this._create();
		this.scene.get("mySceneManager").createMap(this);
		this.dialogueIteration = 0
		this.dialogueState = false;
		//this.fHero.setPosition(this.dataScene.x,this.dataScene.y)
		this.heroAttack = this.add.group();
		this.keys=this.input.keyboard.addKeys('Z,S,Q,D,SPACE')
		
		//add hud 
		this.scene.run("menu_hud")
	}
	
	attackEnemyCollision(hero,enemy){
		if(!enemy.invincible.state){
			enemy.currentHp = enemy.currentHp - hero.attack
			enemy.invincible.state = true
		}

		
	}
	

	update() {
		
		
		this.scene.get("mySceneManager").updateMap(this);
		/*
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
			
		} */
		if(this.input.activePointer.leftButtonDown( ) ){
			//console.log("click left!")
			if(this.fHero.timeAttack.state && this.input.activePointer.y <=3060 ){
				
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
		
		if(this.fHero.y >=2900){
			this.scene.start("Map03",{x:1428,y:137})
		}
		if(this.fHero.y <=30){
			this.scene.start("Map01",{x:1668,y:2807})
		}
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

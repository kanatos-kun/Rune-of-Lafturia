
// You can write more code here

/* START OF COMPILED CODE */

class Map03 extends Phaser.Scene {
	
	constructor() {
	
		super("Map03");
		
	}
	
	_create() {
	
		this.add.image(1660.517, 1537.2662, "map03");
		
		var bee = this.add.bee(2621.4165, 1237.5485, "bee");
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
		this.dialogueIteration = 0
		this.dialogueState = false;
		this.game.currentMap = "Map03"
		//this.fHero.setPosition(this.dataScene.x,this.dataScene.y)
		//this.heroAttack = this.add.group();
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
		

		
		
				if(Phaser.Input.Keyboard.JustDown(this.keys.SPACE)){
				//check if it's in the detection zone
			if(Phaser.Math.Distance.Between(this.fHero.x,this.fHero.y,1988,1928) < 350 ){
				this.dialogueState = !this.dialogueState;
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
		
		
		if(this.input.activePointer.leftButtonDown( ) ){
			//console.log("click left!")
			if(this.fHero.timeAttack.state && this.input.activePointer.y <=3060 ){
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
		
		if(this.fHero.y >=2900 && this.fHero.x >= 1612){
			//tp map 04
			this.scene.start("Map04",{x:1428,y:137})
		}else if(this.fHero.y <=30 && this.fHero.x <=1636){
			//tp map02
			this.scene.start("Map02",{x:1668,y:2807})
		}else if(this.fHero.y >=1452 && this.fHero.x <= 10){
			this.scene.start("Map06",{x:3044,y:2080})
			//tp map06
		}else if(this.fHero.y >=1452 && this.fHero.x >= 3252){
			this.scene.start("Map07",{x:138,y:2080})
			//tp map07
		}
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

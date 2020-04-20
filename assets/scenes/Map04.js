
// You can write more code here

/* START OF COMPILED CODE */

class Map04 extends Phaser.Scene {
	
	constructor() {
	
		super("Map04");
		
	}
	
	_create() {
	
		this.add.image(1654.7802, 1531.0159, "map04");
		
		var hero = this.add.hero(1470.3036, 676.301, "hero");
		
		var villager_01 = this.add.villager_01(1504.6808, 1635.3568, "villager_01");
		
		this.fHero = hero;
		this.fVillager_01 = villager_01;

	}
	
	
	
	/* START-USER-CODE */
	
	init(data){
		this.dataScene = data
	}
	
	create() {
		this._create();
		this.dialogueIteration = 0
		this.dialogueState = false;
		this.game.currentMap = "Map04"
		this.fHero.setPosition(this.dataScene.x,this.dataScene.y)
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
				if(Phaser.Math.Distance.Between(this.fHero.x,this.fHero.y,this.fVillager_01.x,this.fVillager_01.y) < 350 ){
					this.dialogueState = true;
					
					
					let textConfig = {
				    state:this.dialogueState,
					tagName:{isVisible:true,text:"Clara"},
					text: ["Bonjour jeune hero, pouvez vous\nm'aidez ?"],
					textIteration : this.dialogueIteration
					}
					if(this.dialogueIteration >= textConfig.text.length){
						this.dialogueState = false;
						textConfig.state = this.dialogueState;
						this.dialogueIteration = 0
					}else{
						this.dialogueIteration += 1
					}

					this.scene.run("dialogueWindow", textConfig)

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
		
		if(this.fHero.y <=50){
			this.scene.start("Map03",{x:1668,y:2807})
		}
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

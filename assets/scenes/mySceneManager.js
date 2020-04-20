
// You can write more code here

/* START OF COMPILED CODE */

class mySceneManager extends Phaser.Scene {
	
	constructor() {
		super("mySceneManager");
		
	}

	
	/* START-USER-CODE */
	
	createMap(scene) {
		if(scene.fHero === undefined){
			scene.fHero = scene.add.hero(1075.0101, 1528.0022, "hero");
		}

		scene.dialogueIteration = 0
		scene.dialogueState = false;
		if(scene.fEnemies === undefined){
			scene.fEnemies = this.add.group();
		}
		
		if(scene.fWarp !== undefined){
			scene.fWarp = this.add.group();
		}
		
		if(scene.fNpc !== undefined){
			scene.fPnc = this.add.group();
		}

		scene.fHero.setPosition(scene.dataScene.x,scene.dataScene.y)
		scene.heroAttack = scene.add.group();
		scene.game.currentMap = scene.scene.key
		scene.attackEnemyCollision = function(hero,enemy){
			if(!enemy.invincible.state){
				enemy.currentHp = enemy.currentHp - hero.attack
				enemy.invincible.state = true
			}

		
		}
		
		scene.physics.add.overlap(scene.heroAttack,scene.fEnemies,scene.attackEnemyCollision)
		scene.keys=scene.input.keyboard.addKeys('Z,S,Q,D,SPACE')
		
		//add hud 
		scene.scene.run("menu_hud")
		

	
	}
	
	
	updateMap(scene) {
		
		if(!scene.dialogueState){
					
					if(scene.keys.Z.isDown) {
			               scene.fHero.y -=10
					}
					
					if(scene.keys.S.isDown){
			                scene.fHero.y +=10
					}
					if(scene.keys.D.isDown){
			                scene.fHero.x +=10
					}
					if(scene.keys.Q.isDown){
			                scene.fHero.x -=10
					}
					
				}
				
				
				if(scene.input.activePointer.leftButtonDown( ) ){
					//console.log("click left!")
					if(  (scene.fHero.timeAttack.state) && scene.input.activePointer.y <=3060 ){
						
						// Change angle 
						let angle = scene.utils.findAngle(scene.fHero.x,scene.fHero.y,scene.input.activePointer.x,scene.input.activePointer.y)
						angle -=0.5
						let a =scene.add.slash(scene.fHero,angle)
						scene.heroAttack.add(a)
						scene.fHero.timeAttack.state = false
					}
		
				}
				
				if(this.input.activePointer.rightButtonDown( ) ){
					//console.log("click right!")
				} 
		
		
		
		
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

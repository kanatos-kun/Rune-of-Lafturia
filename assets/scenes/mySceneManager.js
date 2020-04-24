
// You can write more code here

/* START OF COMPILED CODE */

class mySceneManager extends Phaser.Scene {
	
	constructor() {
		super("mySceneManager");
		
	}

	
	/* START-USER-CODE */
	
	createMap(scene) {
		//transition managing!
		scene.events.on("transitionstart",function(from,duration){
			if(this.dataScene.dir ==="left"){
				this.fMapScene.x = -1650 
			}else if(this.dataScene.dir ==="right"){
				this.fMapScene.x =4950
			}else if(this.dataScene.dir ==="top"){
				this.fMapScene.y =-1530
			}else if(this.dataScene.dir ==="bottom"){
				this.fMapScene.y =4590
			}
			//scene that have implied transition //
			//-----------------------------------//
			from.fHero.setActive(false)
			
			
			// Probleme with fEnemie From *_*
			/*
			if(from.fEnemies !== undefined){
				Phaser.Actions.Call(from.fEnemies.getChildren(),function(item){
					item.setVisible(false)
					item.setActive(false)
				})
				
			}  */
			//from.fHero = null

			if(from.fWarp !== undefined){
				Phaser.Actions.Call(from.fWarp.getChildren(),function(item){
					item.setVisible(false)
					item.setActive(false)
				})
			}
			
			if(from.fNpc !== undefined){
				Phaser.Actions.Call(from.fNpc.getChildren(),function(item){
					item.setVisible(false)
					item.setActive(false)
				})
			}


			/*from.fWarp.setVisible(false)
			from.fNpc.setVisible(false) */
			
			
			//scene that transition //
			//-----------------------------------//
			this.fHero.setVisible(false)
			
			if(scene.fEnemies !== undefined){
				Phaser.Actions.Call(scene.fEnemies.getChildren(),function(item){
					item.setVisible(false)
					item.setActive(false)
				})
			}
			
			
			if(scene.fWarp !== undefined){
				Phaser.Actions.Call(scene.fWarp.getChildren(),function(item){
					item.setVisible(false)
					item.setActive(false)
				})
			}
			
			if(scene.fNpc !== undefined){
				Phaser.Actions.Call(scene.fNpc.getChildren(),function(item){
					item.setVisible(false)
					item.setActive(false)
				})
			}


			
			
			
			this.tweens.add({
				targets:this.fMapScene,
				x:1650,
				y:1530,
		      ease: 'Power1',
				duration:duration
			})
			

		},scene)
		
		
		scene.events.on("transitioncomplete",function(myScene){
			
			if(scene.fEnemies !== undefined){
			Phaser.Actions.Call(scene.fEnemies.getChildren(),function(item){
				item.setVisible(true)
				item.setActive(true)
			})
			}

			if(scene.fWarp !== undefined){
			Phaser.Actions.Call(scene.fWarp.getChildren(),function(item){
				item.setVisible(true)
				item.setActive(true)
			})
			}

			if(scene.fNpc !== undefined){
			Phaser.Actions.Call(scene.fNpc.getChildren(),function(item){
				item.setVisible(true)
				item.setActive(true)
			})
			}

			
			
			
			scene.fHero.setVisible(true)
		},this)
		
		
		
		
		scene.physics.world.setBounds(-200,-200,3720,3380)
		if(scene.fHero === undefined){
			scene.fHero = scene.add.hero(1075.0101, 1528.0022, "hero");
		}else{
			scene.fHero = scene.add.hero(scene.dataScene.x,scene.dataScene.y,"hero")
		}

		scene.dialogueIteration = 0
		scene.dialogueState = false;
		if(scene.fEnemies === undefined){
			scene.fEnemies = this.add.group();
		}
		
		if(scene.fWarp === undefined){
			scene.fWarp = this.add.group();
		}
		
		if(scene.fNpc === undefined){
			scene.fNpc = this.add.group();
		}
		
		if(scene.fObstacle === undefined){
			scene.fObstacle = this.add.group();
		}
		
		if(scene.fGold === undefined){
			scene.fGold = this.add.group();
		}

		scene.fHero.setPosition(scene.dataScene.x,scene.dataScene.y)
		scene.heroAttack = scene.add.group();
		scene.game.currentMap = scene.scene.key
		scene.physics.add.collider(scene.fHero,scene.fObstacle)
		scene.physics.add.collider(scene.fNpc,scene.fObstacle)
		scene.physics.add.collider(scene.fEnemies,scene.fObstacle)
		scene.attackEnemyCollision = function(hero,enemy){
			if(!enemy.invincible.state){

				enemy.currentHp = enemy.currentHp - hero.attack
				enemy.invincible.state = true
				if(enemy.type =="hero"){
					enemy.scene.game.hero.currentHp = enemy.currentHp
					enemy.scene.game.hero.Hp = enemy.Hp
				}
			}
		}
		scene.recolteGold = function(hero,gold){
			this.game.gold += 1;
			gold.destroy()
		}
		
		scene.changeTransitionMap = function(map,posX,posY,dir = "right"){
			
			
			if(dir==="right"){
				scene.tweens.add({
					targets:scene.fMapScene,
					x:-3300,
			       ease: 'Power1',
					duration:1500
				})
			}else if(dir==="left"){
				scene.tweens.add({
					targets:scene.fMapScene,
					x:4950,
			        ease: 'Power1',
					duration:1500
				}) 
			}else if(dir==="top"){

			
				scene.tweens.add({
					targets:scene.fMapScene,
					y:4590,
			        ease: 'Power1',
					duration:1500
				}) 
			}else if(dir ==="bottom"){
				scene.tweens.add({
					targets:scene.fMapScene,
					y:-1530,
			        ease: 'Power1',
					duration:1500
				}) 
			}
 
		
			scene.scene.transition({
				target:map,
				duration:1500,
				moveAbove:true,
				data:{x:posX,y:posY,dir:dir}
			},scene)  
		}
			
		scene.physics.add.overlap(scene.heroAttack,scene.fEnemies,scene.attackEnemyCollision)
		scene.physics.add.overlap(scene.fEnemies,scene.fHero,scene.attackEnemyCollision)
		scene.physics.add.overlap(scene.fHero,scene.fGold,scene.recolteGold,function(){return true},scene)
		//scene.physics.add.overlap(scene.fHero,scene.fObstacle,function(){console.log("overlaps with obtstaclte")})
		scene.keys=scene.input.keyboard.addKeys('Z,S,Q,D,SPACE')
		
		//add hud 
		scene.scene.run("menu_hud")
		scene.scene.bringToTop("menu_hud")
		scene.scene.bringToTop("dialogueWindow")
		scene.scene.bringToTop("menu_bag")
		scene.events.on("wake",function(sys,data){
			sys.scene.scene.run("menu_hud")
			sys.scene.scene.bringToTop("menu_hud")
			sys.scene.scene.bringToTop("dialogueWindow")
			sys.scene.scene.bringToTop("menu_bag")
		})
	}
	
	
	updateMap(scene) {
		
		if(scene.fHero.currentHp <=0){
			scene.scene.sleep("menu_hud")
			scene.scene.sleep("dialogueWindow")
			scene.scene.sleep("menu_bag")
			scene.scene.sleep(scene.currentMap)
			scene.scene.run("gameOver")
		}

		if(!scene.dialogueState){
					if(scene.fHero.body !== undefined){
						scene.fHero.body.setVelocity(0,0)
					}
					if(scene.keys.Z.isDown) {
			               scene.fHero.body.setVelocityY(-700)
					}
					
					if(scene.keys.S.isDown){
			                scene.fHero.body.setVelocityY(700)
					}
					if(scene.keys.D.isDown){
			                scene.fHero.body.setVelocityX(700)
					}
					if(scene.keys.Q.isDown){
			                scene.fHero.body.setVelocityX(-700)
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

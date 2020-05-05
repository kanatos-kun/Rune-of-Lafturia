
// You can write more code here

/* START OF COMPILED CODE */

class mySceneManager extends Phaser.Scene {
	
	/** 
	 * mySceneManager	
     * @description The scene manager give you all the function that you needed
	 * for the map
     * @interface mySceneManager
	 */
	constructor() {
		super("mySceneManager");
		
	}

	
	/* START-USER-CODE */
	/** 
	 * @description  Initialize the map scene, for using the MySceneManager:
	 * 1. create a new scene file.
     * 2. Go in the scene file.
	 * 3. Go to the propertie scene file and in compiler properties, set the Create method to
	 *    _create. Save the file.
     * 4. Add the function 
	 * 			init(data){ this.myData = data }  
     * 5. Add   
		 * 		 create(){
		 *				_create();
		 *				this.scene.get("mySceneManager").createMap(this); 
		 *				} 
	 * 6. Add   
		update(){
		if(!this.sys.isTransitioning()){  
		this.scene.get("mySceneManager").updateMap(this);  
		// put your code here !  
		}
		}
	 * @param {Phaser.Scene} Scene
	*/
	createMap() {
		this.transitionstart = this.scene.get("mySceneManager").transitionstart.bind(this)
		this.transitioncomplete = this.scene.get("mySceneManager").transitioncomplete.bind(this)
		this.changeTransitionMap = this.scene.get("mySceneManager").changeTransitionMap.bind(this)
		this.events.on("transitionstart",this.transitionstart,this)
		this.events.on("transitioncomplete",this.transitioncomplete,this)

		if(this.fHero === undefined){
			this.fHero = this.add.hero(1075.0101, 1528.0022, "hero");
		}else{
			this.fHero = this.add.hero(this.dataScene.x,this.dataScene.y,"hero")
		}
		
		if(this.fMapScene !== undefined){
			let w = Math.floor(this.fMapScene.width/3328) 
			let h = Math.floor(this.fMapScene.height/3072)
			this.widthMap = w
			this.heightMap = h
		}
		
		this.physics.world.setBounds(-200,-200,3720*this.widthMap,3380*this.heightMap)

		this.fHero.setPosition(this.dataScene.x,this.dataScene.y)
		this.heroAttack = this.add.group();
		this.game.currentMap = this.key
		this.physics.add.collider(this.fHero,this.fObstacle)
		this.physics.add.collider(this.fNpc,this.fObstacle)
		this.physics.add.collider(this.fEnemies,this.fObstacle)
		this.attackEnemyCollision = function(hero,enemy){
			if(!enemy.invincible.state){
				
				var dirX = hero.x - enemy.x
				var dirY = hero.y - enemy.y
				
				enemy.stateVar.get_hit.x = -Math.sign(dirX)
				enemy.stateVar.get_hit.y = -Math.sign(dirY)
				enemy.state ="get_hit"
				enemy.setTint(0xff0000)
				enemy.currentHp = enemy.currentHp - hero.attack
				enemy.invincible.state = true
				if(enemy.type =="hero"){
					enemy.setTint(0xff0000)
					enemy.scene.game.hero.statuts.currentHp = enemy.currentHp
					enemy.scene.game.hero.statuts.Hp = enemy.Hp
				}
			}
		}
		this.recolteGold = function(hero,gold){
			this.game.gold += 1;
			gold.destroy()
		}
		
		this.recolteItem = function(hero,item){
			var section = item.section
			var check = false
			if(section ==="misc"){
				for(let i =0; i < this.game.hero.inventory.misc.length;i++){
					let n=this.game.hero.inventory.misc[i].name
					if(n == item.name){
						this.game.hero.inventory.misc[i].quantity ++;
						check = true
						break;
					}
				}
				
			}
			if(!check){
				this.game.hero.inventory.misc.push({
					name:item.name,
					sellGold:item.sellGold,
					quantity:1
				})
			}
			
			item.destroy()
		}
		this.isInWindowInteraction = false
		
		this.changeTransitionMap = this.changeTransitionMap;

		this.physics.add.overlap(this.heroAttack,this.fEnemies,this.attackEnemyCollision)
		this.physics.add.overlap(this.fEnemies,this.fHero,this.attackEnemyCollision)
		this.physics.add.overlap(this.fHero,this.fItems,this.recolteItem,function(){return true},this)
		this.physics.add.overlap(this.fHero,this.fGold,this.recolteGold,function(){return true},this)
		//scene.physics.add.overlap(scene.fHero,scene.fObstacle,function(){console.log("overlaps with obtstaclte")})
		this.keys=this.input.keyboard.addKeys('Z,S,Q,D,M,SPACE')
		
		// check active child in group and disable if not in the display zone
		//console.log(scene.fEnemies)
		
		/*
		let a_enemies = this.fEnemies.getChildren()
		let length_enemies = this.fEnemies.getLength()
		let a_npc = this.fNpc.getChildren()
		let length_npc = this.fNpc.getLength()
		let a_warp = this.fWarp.getChildren()
		let length_warp = this.fWarp.getLength()
		let hero = this.fHero;
		let top = -3060
		let bottom = 3060
		let right =3300
		let left  = -3300
		for(let i =0; i <length_enemies;i++){
			let item = a_enemies[i]

			if(
				item.x> hero.x+right ||
				item.x< hero.x+left ||
				item.y> hero.y+bottom ||
				item.y< hero.y+top
			){
				//sleep gameobject
				item.setActive(false)
			}else{
				//no sleep
				item.setActive(true)
			}
		}
		*/
		
 		this.events.emit("endSceneManager",this);
	}
	
	
	/** 
	 * @description Give a transition effect to go into map 01 to map 02
	 * @param {string} map - The string name for the next map for transitionning
	 * @param {number} posX
	 * @param {number} posY	
	 * @param {string} dir - Give the direction needed (right,left,bottom,top)	
	*/
	changeTransitionMap(map,posX,posY,dir = "right"){
			//console.log(this.fEnemies)
			//console.log(this)
			/*
			this.fEnemies.clear()
			this.fWarp.clear()
			this.fItems.clear()
			this.fCoffres.clear()
			this.fNpc.clear()
			this.fGold.clear() */
			//console.log("clear group!")

			if(dir==="right"){
				this.tweens.add({
					targets:this.fMapScene,
					x:-1650,
			       ease: 'Power1',
					duration:1500
				})
			}else if(dir==="left"){
				this.tweens.add({
					targets:this.fMapScene,
					x:4950,
			        ease: 'Power1',
					duration:1500
				}) 
			}else if(dir==="top"){
				this.tweens.add({
					targets:this.fMapScene,
					y:4590,
			        ease: 'Power1',
					duration:1500
				}) 
			}else if(dir ==="bottom"){
				this.tweens.add({
					targets:this.fMapScene,
					y:-1530,
			        ease: 'Power1',
					duration:1500
				}) 
			}
 
		
			this.scene.transition({
				target:map,
				duration:1500,
				moveAbove:true,
				data:{x:posX,y:posY,dir:dir},
				sleep:true
			},this)  
	}
	
	
	/** 
	 * TransitionStart will start the effect between 2 map.
     * /!\Do not use this function in your map, only modify in the mySceneManager.js/!\
	 * @param {mySceneManager} from - The mapScene that will disable.
	 * @param {number} duration 
	*/
	transitionstart(from,duration){
		console.log("fromthatDisable : " + from.scene.key)
		console.log("isWillSceneStay : " + this.scene.key)
		console.log("start Transition!")
			if(this.dataScene.dir ==="left"){
				this.fMapScene.x = -1650 * this.widthMap
			}else if(this.dataScene.dir ==="right"){
				this.fMapScene.x =4950 * this.widthMap
			}else if(this.dataScene.dir ==="top"){
				this.fMapScene.y =-1530 * this.heightMap
			}else if(this.dataScene.dir ==="bottom"){
				this.fMapScene.y =4590 * this.heightMap
			}
			console.log("npc")
			console.log(from.fNpc)
			console.log("enemies")
			console.log(from.fEnemies)
			//scene that have implied transition //
			//-----------------------------------//
			from.fHero.setActive(false)
			//console.log("widthMap : " +  this.widthMap)
			//console.log("heightMap : " + this.heightMap)
			
			// Probleme with fEnemie From *_*
			
			if(from.fEnemies !== undefined){
				Phaser.Actions.Call(from.fEnemies.getChildren(),function(item){
					item.setVisible(false)
					//item.setActive(false)
				})
				
			}  
			//from.fHero = null

			if(from.fWarp !== undefined){
				Phaser.Actions.Call(from.fWarp.getChildren(),function(item){
					item.setVisible(false)
					//item.setActive(false)
				})
			}
			
			if(from.fNpc !== undefined){
				Phaser.Actions.Call(from.fNpc.getChildren(),function(item){
					item.setVisible(false)
					//item.setActive(false)
				})
			}

			if(from.fItems !== undefined){
				Phaser.Actions.Call(from.fItems.getChildren(),function(item){
					item.setVisible(false)
					//item.setActive(false)
				})
			}
			
			if(from.fCoffres !== undefined){
				Phaser.Actions.Call(from.fCoffres.getChildren(),function(item){
					item.setVisible(false)
					//item.setActive(false)
				})
			}

			/*from.fWarp.setVisible(false)
			from.fNpc.setVisible(false) */
			
			
			//scene that transition //
			//-----------------------------------//
			this.fHero.setVisible(false)
			
			if(this.fEnemies !== undefined){
				Phaser.Actions.Call(this.fEnemies.getChildren(),function(item){
					item.setVisible(false)
					//item.setActive(false)
				})
			}
			
			
			if(this.fWarp !== undefined){
				Phaser.Actions.Call(this.fWarp.getChildren(),function(item){
					item.setVisible(false)
					//item.setActive(false)
				})
			}
			
			if(this.fNpc !== undefined){
				Phaser.Actions.Call(this.fNpc.getChildren(),function(item){
					item.setVisible(false)
					//item.setActive(false)
				})
			}
			
			if(this.fItems !== undefined){
				Phaser.Actions.Call(this.fItems.getChildren(),function(item){
					item.setVisible(false)
					//item.setActive(false)
				})
			}

			if(this.fCoffres !== undefined){
				Phaser.Actions.Call(this.fCoffres.getChildren(),function(item){
					item.setVisible(false)
					//item.setActive(false)
				})
			}

			
			
			this.scene.bringToTop("menu_hud")
			this.scene.bringToTop("dialogueWindow")
			this.scene.bringToTop("windowEquip")
			this.scene.bringToTop("windowInventory")
			this.scene.bringToTop("windowSkills")
			this.scene.bringToTop("windowStatut")
			this.scene.bringToTop("menu_bag")
			this.scene.bringToTop("gameMenuScreen")
			this.scene.bringToTop("optionScreen")
			this.scene.bringToTop("loadGameScreen")
			this.scene.bringToTop("gameOver")
			this.scene.bringToTop("titleScreen")
			
			this.tweens.add({
				targets:this.fMapScene,
				x:1650 * this.widthMap,
				y:1530 * this.heightMap,
		      ease: 'Power1',
				duration:duration
			})
			
		
	}

	
	
	/** 
	 * transitioncomplete : the end thing to do after transitionning.
     * /!\Do not use this function in your map, only modify in the mySceneManager.js/!\
	 * @param {mySceneManager} myScene
	*/
	transitioncomplete(myScene){
			if(this.fEnemies !== undefined){
			Phaser.Actions.Call(this.fEnemies.getChildren(),function(item){
				item.setVisible(true)
				//item.setActive(true)
			})
			}

			if(this.fWarp !== undefined){
			Phaser.Actions.Call(this.fWarp.getChildren(),function(item){
				item.setVisible(true)
				//item.setActive(true)
			})
			}

			if(this.fNpc !== undefined){
			Phaser.Actions.Call(this.fNpc.getChildren(),function(item){
				item.setVisible(true)
				//item.setActive(true)
			})
			}
			
			if(this.fCoffres !== undefined){
			Phaser.Actions.Call(this.fCoffres.getChildren(),function(item){
				item.setVisible(true)
				//item.setActive(true)
			})
			}

			this.fHero.setVisible(true)
	}
	
	
	preCreateMap(){
		this.dialogueIteration = 0;
		this.dialogueState = false;
		this.widthMap = 1;
		this.heightMap = 1;
		/*
		if(this.fCoffres === undefined){
			this.fCoffres = this.add.group();
		}
		
		if(this.fEnemies === undefined){
			this.fEnemies = this.add.group();
		}
		
		if(this.fWarp === undefined){
			this.fWarp = this.add.group();
		}
		
		if(this.fNpc === undefined){
			this.fNpc = this.add.group();
		}
		if(this.fObstacle === undefined){
			this.fObstacle = this.add.group();
		}
		
		if(this.fGold === undefined){
			this.fGold = this.add.group();
		}
		
		if(this.fItems === undefined){
			this.fItems = this.add.group();
		}  */
		
		/*
		this.fNpc = this.add.group();
		this.fObstacle = this.add.group();
		this.fGold = this.add.group();
		this.fItems = this.add.group();
		*/
	}
	
		/** 
	 * @description  update the map scene
	 * @param {Phaser.Scene} Scene
		*/
	updateMap(scene) {
		
		if(scene.fHero.currentHp <=0){
			scene.scene.sleep("menu_hud")
			scene.scene.sleep("dialogueWindow")
			scene.scene.sleep("menu_bag")
			scene.scene.sleep("windowInventory")
			scene.scene.sleep(scene.currentMap)
			scene.scene.run("gameOver")
		}
		
		//let a_enemies = scene.fEnemies.getChildren()
		//let length_enemies = scene.fEnemies.getLength()
		//console.log(length_enemies)
		//console.log(scene.fEnemies)
		/*
		for(let i =0; i <length_enemies;i++){
			let item = a_enemies[i]
			
			
			if(
				i.x> hero.x+right &&
				i.x< hero.x+left &&
				i.y> hero.y+bottom &&
				i.y< hero.y+top
			){
				//sleep gameobject
				i.setActive(false)
			}else{
				//no sleep
				i.setActive(true)
			}
		} */
		

		if(!scene.dialogueState){
			
					if(scene.fHero.state!=="get_hit" || scene.dialogueState){
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

					
					if (Phaser.Input.Keyboard.JustDown(scene.keys.M) ){
								scene.scene.run("worldMapScreen")
								scene.scene.sleep(scene.game.currentMap)
								scene.scene.bringToTop("worldMapScreen")
								scene.scene.sleep("menu_hud")
					}
					
				}
				
				
				if(scene.input.activePointer.leftButtonDown( ) && !scene.isInWindowInteraction ){
					//console.log("click left!")
					if(  (scene.fHero.timeAttack.state) && scene.input.activePointer.y <=3060 ){
						
						// Change angle 
						let angle = scene.utils.findAngle(scene.fHero.x,scene.fHero.y,scene.input.activePointer.worldX,scene.input.activePointer.worldY)
						angle -=0.5
						let a =scene.add.slash(scene.fHero,angle)
						scene.heroAttack.add(a)
						scene.fHero.timeAttack.state = false
					}
		
				}
				
				if(this.input.activePointer.rightButtonDown( ) ){
					//console.log("click right!")
				}
				//console.log("posX hero: "+scene.fHero.x)
				
				if(scene.cameras.main !==undefined){
				
					if((scene.fHero.x >= 1680  && scene.fHero.x <= (3328*scene.widthMap) - 1650))
					{
					scene.cameras.main.centerOnX(scene.fHero.x)
					}
					
					if((scene.fHero.y >= 1730 && scene.fHero.y <= (3072*scene.heightMap) - 1530))
					{
					scene.cameras.main.centerOnY(scene.fHero.y)
					}
					
					
				}
				
				/*
				if(scene.fHero.x >= 1650 && scene.fHero.y >= 1530){
					if(scene.cameras.main !==undefined){
						scene.cameras.main.startFollow(scene.fHero)
					}
					
					//console.log(scene.cameras.main)
				}
				
				if( scene.fHero.x >((3328*scene.widthMap ) -1650) || scene.fHero.y >((3072*scene.heightMap) - 1530) ||
					scene.fHero.x <(1650) || scene.fHero.y <(1550)
					){
						if(scene.cameras.main !==undefined){
							scene.cameras.main.stopFollow()
						}
						//console.log(scene.cameras.main)
					//
				} */
				if(Phaser.Input.Keyboard.JustDown(scene.keys.SPACE)){
				
				
				/*
				for(let i = 0; i< scene.fEnemies.getLength();i++){
					let a = scene.fEnemies.getChildren()[i]
					if(a.active){
						//console.log("isActive")
					}
				} */
					
				for(let i = 0; i< scene.fNpc.getLength();i++){
						let a = scene.fNpc.getChildren()[i]
						if(a.active){
							if(Phaser.Math.Distance.Between(scene.fHero.x,scene.fHero.y,a.x,a.y) < 350 ){
								scene.dialogueState = true;
								scene.fHero.body.setVelocity(0,0)
								var textConfig =  {
								    state:scene.dialogueState,
									tagName:undefined,
									text: undefined,
								}	
								if(a.getTaskId() >= a.getLengthTask() ){
										scene.dialogueState = false;
										textConfig.state = this.dialogueState;
										a.resetTaskId();
								}
								
								
								var [task,page] = a.retrieveTask();
								var task_choice = {};

									
								
														
								if(page.mode =="action"){

									
									
									
									if(task.type=="choice"){
										task_choice = task[task["choice_id"] ]
										//task choice 
										// not integrated yet, future update!
										//textConfig.tagName=
										textConfig.tagName="choice"
										textConfig.text="Functionality 'Choice' is currently\n in progress for a future update!"
										a.incTaskId();
										
										
										
									}else if(task.type=="dialogue"){
										//task dialogue 
										
										
										if(scene.dialogueState != false){
											textConfig = {
											    state:scene.dialogueState,
												tagName:task.tagName,
												text: task.text,
												}
												a.incTaskId();
										}

										
										
										
										
										
										
										
									}else if(task.type=="shop"){
										//task shop
										// not integrated yet, future update!

										
										textConfig.tagName="shop"
										textConfig.text="Functionality 'Shop' is currently\n in progress for a future update!";
										a.incTaskId();
										
										
										 
									}
									scene.scene.run("dialogueWindow", textConfig)
									
								}

							}
						}

					}
					
					
				}

		
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

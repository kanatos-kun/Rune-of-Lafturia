
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
		this.endSceneManager = this.scene.get("mySceneManager").endSceneManager.bind(this);
		this.transitionstart = this.scene.get("mySceneManager").transitionstart.bind(this);
		this.transitioncomplete = this.scene.get("mySceneManager").transitioncomplete.bind(this);
		this.changeTransitionMap = this.scene.get("mySceneManager").changeTransitionMap.bind(this);
		this.addDebugMap = this.scene.get("mySceneManager").addDebugMap.bind(this);
		this.debug = {pathfinding : [],
		};
		
		this.events.on("endSceneManager",this.endSceneManager,this);
		this.events.on("transitionstart",this.transitionstart,this);
		this.events.on("transitionwake",this.transitionstart,this);
		this.events.on("transitioncomplete",this.transitioncomplete,this);
		this.map.obstacle.alpha = (this.game.debug.obstacle?0.5:0);
		this.enemyManager = new EnemyManager(this);
		if(this.fHero === undefined){
			this.fHero = this.add.hero(1075.0101, 1528.0022, "hero");
		}else{
			this.fHero = this.add.hero(this.dataScene.x,this.dataScene.y,"hero")
		}
		

		if(this.map !== undefined){
			let w = Math.floor(this.map.width/13) 
			let h = Math.floor(this.map.height/12)
			this.widthMap = w
			this.heightMap = h
		}
		
		// add object to map
		//---------------------------------------------------------------------------
		
		var obstacle = this.map.createFromObjects("InfoMap","obstacle",{key:"info",frame:0})
		obstacle.map((o,i)=>{
			let itemObstacle = this.add.obstacle(o.x,o.y);
			itemObstacle.setScale(o.scaleX,o.scaleY);
			this.fObstacle.add(itemObstacle);
			o.destroy();
		})
		var warp = this.map.createFromObjects("InfoMap","warp",{key:"info",frame:1})
		warp.map((o,i)=>{
			let itemWarp = this.add.warp(o.x,o.y);
			itemWarp.setData("dir",o.getData(0).value)
			itemWarp.setData("loadZone",o.getData(1).value)
			itemWarp.setData("x",o.getData(2).value)
			itemWarp.setData("y",o.getData(3).value)
			itemWarp.setData("zone",o.getData(4).value)
			this.fWarp.add(itemWarp);
			o.destroy();
		})
		var npc = this.map.createFromObjects("InfoMap","npc",{key:"info",frame:3})
		npc.map((o,i)=>{
			let itemNpc = this.add.npc(o.x,o.y);
			itemNpc.setData("eventName",o.getData(0).value)
			this.fNpc.add(itemNpc);
			o.destroy();
		})
		
		var coffre = this.map.createFromObjects("InfoMap","coffre",{key:"info",frame:2})
		coffre.map((o,i)=>{
			let itemCoffre = this.add.coffre(o.x,o.y);
			itemCoffre.setData("globalSwitchId",o.getData(0).value)
			itemCoffre.setData("number",o.getData(1).value)
			itemCoffre.setData("type",o.getData(2).value)
			this.fCoffres.add(itemCoffre);
			o.destroy();
		})

		
		// /add object to map
		//---------------------------------------------------------------------------
		
		this.isInWindowInteraction = false;
		this.leftMouseKeyPress = false;
		this.physics.world.setBounds(-200,-200,3720*this.widthMap,3380*this.heightMap)
		
		
		this.fHero.setPosition(this.dataScene.x,this.dataScene.y)
		this.heroAttack = this.add.group();
		this.game.currentMap = this.scene.key
		this.physics.add.collider(this.fHero,this.fObstacle)
		this.physics.add.collider(this.fNpc,this.fObstacle)
	//	this.physics.add.collider(this.fEnemies,this.fObstacle)
		this.attackEnemyCollision = function(hero,enemy){
			if(!enemy.invincible.state){
				
				var dirX = hero.x - enemy.x
				var dirY = hero.y - enemy.y
				
				enemy.stateVar.get_hit.x = -Math.sign(dirX)
				enemy.stateVar.get_hit.y = -Math.sign(dirY)
				enemy.state ="get_hit"
				enemy.setTint(0xff0000);
				enemy.stats.currentHp = enemy.stats.currentHp - hero.stats.atk
				enemy.invincible.state = true
				if(enemy.type =="hero"){
					enemy.setTint(0xff0000)
					enemy.stats.currentHp = enemy.stats.currentHp;
					enemy.stats.Hp = enemy.stats.Hp;
				}
			}
		}
		
		
		this.fSPawnMob = []
		this.map.findObject("InfoMap",(spawner,index,array)=>{
			if(spawner.name ==="spawn"){
				var spawner = this.add.spawnMob(spawner)

				this.fSPawnMob.push(spawner)
				this.physics.add.collider(spawner,this.fObstacle)
				this.physics.add.overlap(this.heroAttack,spawner,this.attackEnemyCollision)
				this.physics.add.overlap(spawner,this.fHero,this.attackEnemyCollision)
			}
		})
		
		
		
		this.recolteGold = function(hero,gold){
			this.game.hero.gold += 1;
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
		this.scene.bringToTop("windowSkills")
		this.scene.bringToTop("windowStatut")
		this.scene.bringToTop("windowEquip")
		this.scene.bringToTop("windowInventory")
		this.scene.bringToTop("menu_hud")
		this.scene.bringToTop("gameMenuScreen")
		this.scene.sleep("loadGameScreen")
		this.scene.sleep("optionScreen")
		this.scene.sleep("creditScreen")
		this.scene.sleep("saveGameScreen")
		this.scene.sleep("LoadZoneAssets")
		if(this.game.config.physics.arcade.debug){
			this.addDebugMap()
		}
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
			this.fGold.clear()  */
			//console.log("clear group!")
			var duration = 100
			if(dir==="right"){
				this.tweens.add({
					targets:this.fMapScene,
					x:-1650,
			       ease: 'Power1',
					duration:duration
				})
			}else if(dir==="left"){
				this.tweens.add({
					targets:this.fMapScene,
					x:4950,
			        ease: 'Power1',
					duration:duration
				}) 
			}else if(dir==="top"){
				this.tweens.add({
					targets:this.fMapScene,
					y:4590,
			        ease: 'Power1',
					duration:duration
				}) 
			}else if(dir ==="bottom"){
				this.tweens.add({
					targets:this.fMapScene,
					y:-1530,
			        ease: 'Power1',
					duration:duration
				}) 
			}
 			var data = {x:posX,y:posY,dir:dir}
		    this.dataScene = data
			//this.scene.wake(map,data);
			this.scene.transition({
				target:map,
				duration:duration,
				moveAbove:true,
				sleep:true,
			},this)  
	}
	
	
	wakeScene(sys,data){
		//console.log("thohoho")
	    //sys.scene.dataScene = data
		//console.log(data)
	}
	
	addDebugMap(){
		this.debugMap = {
			bg: this.add.rectangle(1000,50,1200,800,0x000000,0.2),
			text : this.add.text(1000,12,"debug mode",{fontSize:'100px'})
		}
		this.debugMap.bg.setScrollFactor(this.cameras.main.scrollX,this.cameras.main.scrollY)
		this.debugMap.bg.setOrigin(0);
		this.debugMap.bg.setDepth(2000);
		this.debugMap.text.setScrollFactor(this.cameras.main.scrollX,this.cameras.main.scrollY)
		this.debugMap.text.setOrigin(0);
		this.debugMap.text.setDepth(2000);
	}
	
	
	endSceneManager(){
			this.keys.Q.reset()
			this.keys.D.reset()
			this.keys.S.reset()
			this.keys.Z.reset()
			this.fHero.setVisible(true)
			this.fHero.setActive(true)
			
			//reposition cameras
			if(this.fHero.x >= (this.widthMap * 3328)-1650){
				this.cameras.main.scrollX =(this.widthMap * 3328)  - 3328;
				//this.cameras.main.setPosition(100)
			}
			
			if(this.fHero.x >= (this.heightMap * 3072)-1530){
				this.cameras.main.scrollY = (this.heightMap * 3072)-3072;
			}
			
			/*
					if((scene.fHero.x >= 1680  && scene.fHero.x <= (3328*scene.widthMap) - 1650))
					{
					scene.cameras.main.centerOnX(scene.fHero.x)
					}
					
					if((scene.fHero.y >= 1730 && scene.fHero.y <= (3072*scene.heightMap) - 1530))
					{
					scene.cameras.main.centerOnY(scene.fHero.y)
					}
					 */
	}
	
	
	/** 
	 * TransitionStart will start the effect between 2 map.
     * /!\Do not use this function in your map, only modify in the mySceneManager.js/!\
	 * @param {mySceneManager} from - The mapScene that will disable.
	 * @param {number} duration 
	*/
	transitionstart(from,duration){
			/*		
		console.log("fromthatDisable : " + from.scene.key)
		console.log("isWillSceneStay : " + this.scene.key)
		console.log("start Transition!") */
			if(from.dataScene.dir ==="left"){
				this.fMapScene.x = -1650 * this.widthMap
			}else if(from.dataScene.dir ==="right"){
				this.fMapScene.x =4950 * this.widthMap
			}else if(from.dataScene.dir ==="top"){
				this.fMapScene.y =-1530 * this.heightMap
			}else if(from.dataScene.dir ==="bottom"){
				this.fMapScene.y =4590 * this.heightMap
			}
			
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
			this.fHero.x = from.dataScene.x
			this.fHero.y = from.dataScene.y
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
			this.fHero.setActive(true)
			this.fHero.body.setVelocity(0,0)
			this.keys.Q.reset()
			this.keys.D.reset()
			this.keys.S.reset()
			this.keys.Z.reset()

	}
	
	
	preCreateMap(){
		this.dialogueIteration = 0;
		this.dialogueState = false;
		this.sceneGfx = this.add.graphics();
		this.sceneGfx.setDepth(11000);
		this.widthMap = 1;
		this.heightMap = 1;

		this.map = this.add.tilemap(this.scene.key.toLowerCase() );
		this.pathfindingMap= this.map.getLayer("pathfinding").data;
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
		}  
		
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
	updateMap(scene, time, delta) {
		scene.input.activePointer.updateWorldPoint(scene.cameras.main)
		if(scene.fHero.currentHp <=0){
			scene.scene.sleep("menu_hud")
			scene.scene.sleep("dialogueWindow")
			scene.scene.sleep("menu_bag")
			scene.scene.sleep("windowInventory")
			scene.scene.sleep(scene.currentMap)
			scene.scene.run("gameOver")
		}
		
		scene.fHero.drawPathFinding();
		
		/*
		if(scene.fSPawnMob !== undefined){
			for(let i=0;i<scene.fSPawnMob.length;i++){
				let spawner = scene.fSPawnMob[i];
				spawner.update();
			}
		}else{
			console.log(scene.fSPawnMob)
		} */
		

		//console.log(length_enemies)
		//console.log(scene.fEnemies)
		
		
		var right = scene.cameras.main.scrollX + scene.cameras.main.width + 100;
		var left = scene.cameras.main.scrollX - 100;
		var bottom = scene.cameras.main.scrollY + scene.cameras.main.height + 100;
		var top = scene.cameras.main.scrollY - 100;
		var enemy_inactive= 0;
		var enemy_active=0;
		let length_enemies=0;
		/*
		for(let i =0; i <length_enemies;i++){

		} */

		if(scene.fSPawnMob !== undefined){
			
			for(let i =0; i < scene.fSPawnMob.length;i++){
				let spawnChildrens = scene.fSPawnMob[i].getChildren();
				let spawnLength = scene.fSPawnMob[i].getLength();
				length_enemies += spawnLength;
				for(let y=0; y < spawnLength;y++){
					
					
				let item = spawnChildrens[y]
				
				
				if(
					item.x<right &&
					item.x> left &&
					item.y< bottom &&
					item.y> top
				){
					//sleep gameobject
					item.setActive(true)
					enemy_active++;
				}else{
					//no sleep
					item.setActive(false)
					item.body.setVelocity(0)
					enemy_inactive++;
				}
					
				}
			}
			
		}

		
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
				
				if(scene.input.activePointer.leftButtonDown( ) && !scene.isInWindowInteraction && !scene.leftMouseKeyPress){
					//TODO: Add the pathfinding debug into the game debug variable
					scene.leftMouseKeyPress = true;
					//console.log("click left!")
					//-- setting ray localization mouse in map
					var xMap = Phaser.Math.FloorTo(scene.input.activePointer.worldX/256);
					var yMap = Phaser.Math.FloorTo(scene.input.activePointer.worldY/256);
					scene.fHero.pathfinding.goal.x = xMap;
					scene.fHero.pathfinding.goal.y = yMap;
					scene.fHero.pathfinding.openList = [];
					scene.fHero.pathfinding.openList.push(
						scene.utils.aStar_openList(
							{x:scene.fHero.x,y:scene.fHero.y},
							{x:scene.fHero.pathfinding.goal.x,y:scene.fHero.pathfinding.goal.y}
							) 
						);
					var safetyLoop = 0;
					var currentIndex = 0;
					var safetyLoop_max= 30;
					//console.log(scene.pathfindingMap[yMap][xMap].index);//489 == obstacle
					while(safetyLoop<safetyLoop_max){
						
						if(scene.debug.pathfinding.length> 0 && safetyLoop ==0){
							for (let i =0; i < scene.debug.pathfinding.length; i++ ){
								let rect = scene.debug.pathfinding[i];

								rect.textHelp.destroy();
								rect.destroy();
								
							}
							scene.fHero.pathfinding.closedList= [];
						}
						
						//if the currentIndex is out of the list
						//if(currentIndex > scene.fHero.pathfinding.openList.length) break;
						var myNode = scene.fHero.pathfinding.openList[currentIndex];
						xMap = myNode.x;
						yMap = myNode.y;
						
						if(safetyLoop ==safetyLoop_max-1){
							if(scene.game.debug.pathfinding){

								for(let i=0;i < scene.fHero.pathfinding.openList.length;i++){
									let temp = scene.fHero.pathfinding.openList[i];
									let color = (i!==0?0xff0000:0x00ff00);
									let alpha = (i!==0?0.5:1);
									let rect = scene.add.rectangle(temp.x*256,temp.y*256,256,256,color,alpha).setStrokeStyle(2,0x000000,0.5).setOrigin(0);
									rect.textHelp = scene.add.text(temp.x*256,temp.y*256,"f:"+temp.f+"\nstep:"+temp.step,{color:'#000000',fontSize:'70px'})
									scene.debug.pathfinding.push(rect);
								}
								
							}

							console.log("out of memory, break while loop...");

							break;
						}
						
						
						if(xMap == scene.fHero.pathfinding.goal.x && yMap == scene.fHero.pathfinding.goal.y){
							//1) reverse flow closed list
							//2) add the rect help 
							//3) break
							if(scene.game.debug.pathfinding){
								for(let i=0;i < scene.fHero.pathfinding.openList.length;i++){
									let temp = scene.fHero.pathfinding.openList[i];
									let color = (i!==0?0xff0000:0x00ff00);
									let alpha = (i!==0?0.5:1);
									let rect = scene.add.rectangle(temp.x*256,temp.y*256,256,256,color,alpha).setStrokeStyle(2,0x000000,0.5).setOrigin(0);
									rect.textHelp = scene.add.text(temp.x*256,temp.y*256,"f:"+temp.f+"\nstep:"+temp.step,{color:'#000000',fontSize:'70px'})
									scene.debug.pathfinding.push(rect);
								}
							}
							scene.fHero.pathfinding.closedList.push(myNode);
							scene.fHero.pathfinding.closedList.reverse();
							scene.fHero.initPathFinding();
							console.log("goal achieve !");
							
							
							break;
						}

						safetyLoop++;
						// 1) take the last node
						// 	1-1) if MyNode == goal then quit loop
						// 2) check the 8 direction probable square grid
						//  2-1)check the cell value.
						// 	2-2) If non walkable then skip step for finding direction cell
						// 3) add the node in the closed list
						
								//  1) top
								//  2) top-right
								//  3) right
								//  4) bottom-right
								//  5) bottom
								//  6) bottom-left
								//  7) left
								//  8) top-left
						
						var indexCell = [-1,-1,-1,-1,-1,-1,-1,-1];
						//  1) top
						if(scene.pathfindingMap[yMap-1] !==undefined){
							if(scene.pathfindingMap[yMap-1][xMap] !==undefined){
							  indexCell[0] = scene.pathfindingMap[yMap-1][xMap].index;
							}
							
						//	console.log(indexCell[0])
						}else{
							indexCell[0] = null;
						}
						//  2) top-right
						if(scene.pathfindingMap[yMap-1] !==undefined){
							if(scene.pathfindingMap[yMap-1][xMap+1] !==undefined){
								indexCell[1] = scene.pathfindingMap[yMap-1][xMap+1].index;
								
							}
							
						}else{
							indexCell[1] = null;
						}
						//  3) right
						if(scene.pathfindingMap[yMap] !==undefined){
							if(scene.pathfindingMap[yMap][xMap+1] !==undefined){
								indexCell[2] = scene.pathfindingMap[yMap][xMap+1].index;
								
							}

						}else{
							indexCell[2] = null;
						}
						//  4) bottom-right
						if(scene.pathfindingMap[yMap+1] !==undefined){
							if(scene.pathfindingMap[yMap+1][xMap+1] !==undefined){
								indexCell[3] = scene.pathfindingMap[yMap+1][xMap+1].index;
								
							}
							
						}else{
							indexCell[3] = null;
						}
						//  5) bottom
						if(scene.pathfindingMap[yMap+1] !==undefined){
							if(scene.pathfindingMap[yMap+1][xMap] !==undefined){
								indexCell[4] = scene.pathfindingMap[yMap+1][xMap].index;
							}
							
						}else{
							indexCell[4] = null;
						}
						//  6) bottom-left
						if(scene.pathfindingMap[yMap+1]!==undefined){
							if(scene.pathfindingMap[yMap+1][xMap-1] !==undefined){
								indexCell[5] = scene.pathfindingMap[yMap+1][xMap-1].index;
							}

						}else{
							indexCell[5] = null;
						}
						//  7) left
						if(scene.pathfindingMap[yMap] !==undefined){
							if(scene.pathfindingMap[yMap][xMap-1] !==undefined){
								indexCell[6] = scene.pathfindingMap[yMap][xMap-1].index;
							}

						}else{
							indexCell[6] = null;
						}
						//  8) top-left
						if(scene.pathfindingMap[yMap-1] !==undefined){
							if(scene.pathfindingMap[yMap-1][xMap-1] !==undefined){
								indexCell[7] = scene.pathfindingMap[yMap-1][xMap-1].index;
							}
						}else{
							indexCell[7] = null;
						}

						
						
						
						
						var t_node = null;
						var tr_node = null;
						var r_node = null;
						var br_node = null;
						var b_node = null;
						var bl_node = null;
						var l_node = null;
						var tl_node = null;
						
						/*
						if(indexCell[0] !== null && indexCell[0] !==489){
							t_node = scene.utils.aStar_addNode(myNode,
							{x:scene.fHero.pathfinding.goal.x,y:scene.fHero.pathfinding.goal.y},1);
							
							
						} */
						
						var c ={};// var that will get the state of the cell (state,index)
						
						
								if(indexCell[0]!== null && indexCell[0] !== 489){
								t_node = scene.utils.aStar_addNode(myNode,
								{x:scene.fHero.pathfinding.goal.x,y:scene.fHero.pathfinding.goal.y},1);
								}
								if(indexCell[1]!== null && indexCell[1] !== 489){
								tr_node = scene.utils.aStar_addNode(myNode,
								{x:scene.fHero.pathfinding.goal.x,y:scene.fHero.pathfinding.goal.y},2);
								}
								if(indexCell[2]!== null && indexCell[2] !== 489){
								r_node = scene.utils.aStar_addNode(myNode,
								{x:scene.fHero.pathfinding.goal.x,y:scene.fHero.pathfinding.goal.y},3);
								}
								if(indexCell[3]!== null && indexCell[3] !== 489){
								br_node = scene.utils.aStar_addNode(myNode,
								{x:scene.fHero.pathfinding.goal.x,y:scene.fHero.pathfinding.goal.y},4);
								}
								if(indexCell[4]!== null && indexCell[4] !== 489){
								b_node = scene.utils.aStar_addNode(myNode,
								{x:scene.fHero.pathfinding.goal.x,y:scene.fHero.pathfinding.goal.y},5);
								}
								if(indexCell[5]!== null && indexCell[5] !== 489){
								bl_node = scene.utils.aStar_addNode(myNode,
								{x:scene.fHero.pathfinding.goal.x,y:scene.fHero.pathfinding.goal.y},6);
								}
								if(indexCell[6]!== null && indexCell[6] !== 489){
								l_node = scene.utils.aStar_addNode(myNode,
								{x:scene.fHero.pathfinding.goal.x,y:scene.fHero.pathfinding.goal.y},7);
								}
								if(indexCell[7]!== null && indexCell[7] !== 489){
								tl_node = scene.utils.aStar_addNode(myNode,
								{x:scene.fHero.pathfinding.goal.x,y:scene.fHero.pathfinding.goal.y},8);
								}



								for(let i =0;i < scene.fHero.pathfinding.openList.length;i++){
									let obj=scene.fHero.pathfinding.openList[i];
									//1) top
									//----------------------------------------------------------
									if(t_node!==null){
										if(obj.x == t_node.x && obj.y == t_node.y){
											if(t_node.f <obj.f){
												obj = t_node;
											}
											t_node =null;
										}
									}
									//2) top-right
									//----------------------------------------------------------
									if(tr_node!==null){
										if(obj.x == tr_node.x && obj.y == tr_node.y){
											if(tr_node.f <obj.f){
												obj = tr_node;
											}
											tr_node =null;
										}
									}
									//3) right
									//----------------------------------------------------------
									if(r_node!==null){
										if(obj.x == r_node.x && obj.y == r_node.y){
											if(r_node.f <obj.f){
												obj = r_node;
											}
											r_node =null;
										}
									}
									//4) bottom-right
									//----------------------------------------------------------
									if(br_node!==null){
										if(obj.x == br_node.x && obj.y == br_node.y){
											if(br_node.f <obj.f){
												obj = br_node;
											}
											br_node =null;
										}
									}
									//5) bottom
									//----------------------------------------------------------
									if(b_node!==null){
										if(obj.x == b_node.x && obj.y == b_node.y){
											if(b_node.f <obj.f){
												obj = b_node;
											}
											b_node =null;
										}
									}
									//6) bottom-left
									//----------------------------------------------------------
									if(bl_node!==null){
										if(obj.x == bl_node.x && obj.y == bl_node.y){
											if(bl_node.f <obj.f){
												obj = bl_node;
											}
											bl_node =null;
										}
									}
									//7)left
									//----------------------------------------------------------
									if(l_node!==null){
										if(obj.x == l_node.x && obj.y == l_node.y){
											if(l_node.f <obj.f){
												obj = l_node;
											}
											l_node =null;
										}
									}
									//4) top-left
									//----------------------------------------------------------
									if(tl_node!==null){
										if(obj.x == tl_node.x && obj.y == tl_node.y){
											if(tl_node.f <obj.f){
												obj = tl_node;
											}
											tl_node =null;
										}
									}
									
									
									

									

								}
								
								
								
								if(t_node !== null){scene.fHero.pathfinding.openList.push(t_node);}
								if(tr_node !== null){scene.fHero.pathfinding.openList.push(tr_node);}
								if(r_node !== null){scene.fHero.pathfinding.openList.push(r_node);}
								if(br_node !== null){scene.fHero.pathfinding.openList.push(br_node);}
								if(b_node !== null){scene.fHero.pathfinding.openList.push(b_node);}
								if(bl_node !== null){scene.fHero.pathfinding.openList.push(bl_node);}
								if(l_node !== null){scene.fHero.pathfinding.openList.push(l_node);}
								if(tl_node !== null){scene.fHero.pathfinding.openList.push(tl_node);}
								
								
								
								scene.fHero.pathfinding.closedList.push(myNode);
								myNode.inCloseList = true;
								var min_f = 999999;
								for(let i =0;i< scene.fHero.pathfinding.openList.length;i++){
									let obj = scene.fHero.pathfinding.openList[i];
									//check if F is the lowest and if then
									//change the next id node;
									if(!obj.inCloseList){
										if(obj.f < min_f){
											min_f = obj.f;
											currentIndex = i;
										}
									}
		
								}

								
			
					}
					
					//console.log("(x:"+xMap+";y:"+yMap+")");
					//console.log(scene.fHero.pathfinding);
					
					if(  (scene.fHero.timeAttack.state) && scene.input.activePointer.y <=3060 ){
						// Change angle 
						let angle = scene.utils.findAngle(scene.fHero.x,scene.fHero.y,scene.input.activePointer.worldX,scene.input.activePointer.worldY)
						angle -=0.5
						/*console.log("heroX :" +scene.fHero.x)
						console.log("heroY :" +scene.fHero.y)
						console.log("worldX :" +scene.input.activePointer.worldX)
						console.log("worldY :" +scene.input.activePointer.worldY) */
						let a =scene.add.slash(scene.fHero,angle)
						scene.heroAttack.add(a)
						scene.fHero.timeAttack.state = false
					}
		
				}
				
				
				//restart the'state' of the left button (keypress)
				if(scene.input.activePointer.leftButtonReleased( ) && scene.leftMouseKeyPress){
					scene.leftMouseKeyPress = false;
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
								
								var textObj = a.getTypeDialogue();
								var textConfig =  {
									tagName:undefined,
									text: "",
								}	
								console.log(textObj.type)
								if(textObj.type =="dialogue"){
									scene.dialogueState = true;
									textConfig.text = textObj.content;
									scene.scene.run("dialogueWindow", textConfig);
									scene.scene.bringToTop("dialogueWindow");
								}
								else if(textObj.type =="choice"){
									scene.dialogueState = true;
									textConfig.ch1 = textObj.ch1;
									textConfig.ch2 = textObj.ch2;
									textConfig.ch3 = textObj.ch3;
									textConfig.ch4 = textObj.ch4;
									scene.scene.run("windowChoice",textConfig);
									scene.scene.bringToTop("windowChoice");
								}
								else if(textObj.type =="shop"){
									scene.dialogueState = true;

									textConfig.consumable = textObj.Consumable.split(",");
									textConfig.weapon = textObj.Weapon.split(",");
									textConfig.armor = textObj.Armor.split(",");
									textConfig.accesory = textObj.Accesory.split(",");
									textConfig.misc = textObj.Misc.split(",");
									textConfig.itemList = [];
									console.log(textConfig);
									scene.scene.run("windowShop",textConfig);
									scene.scene.bringToTop("windowShop");	
									console.log(scene.scene.isVisible("windowShop"))				
								}
							    else if(textObj.type =="end"){
									scene.dialogueState = false;
									//scene.scene.sleep("dialogueWindow");
									a.eventPage.dialogue?scene.scene.sleep("dialogueWindow"):"";
									a.eventPage.shop?scene.scene.sleep("windowShop"):"";
									a.eventPage.choice?scene.scene.sleep("windowChoice"):"";
									scene.scene.sleep("windowShop");
								}

								
								/*
								
								
								
								
								
								
								scene.dialogueState = true;
								scene.fHero.body.setVelocity(0,0)
								var textConfig =  {
								    state:scene.dialogueState,
									tagName:undefined,
									text: undefined,
								}	
								if(a.getCurrentTaskIterator() >= a.getLengthTask() || !a.isSameTaskId() ){
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

							*/
							}
						}

					}
					
					
					
				}


				if(scene.game.config.physics.arcade.debug){
					var text = "enemy : " + length_enemies + "\n"+ 
					"enemy active : " + enemy_active + "\n" + 
					"enemy inactive : " + enemy_inactive
					scene.debugMap.text.setText(text)
				}

		
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

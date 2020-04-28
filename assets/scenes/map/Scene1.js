
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Map01");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(1658.8756, 1532.0128, "map01");
		
		var bee = this.add.enemy_bee(2275.6448, 2035.4805, "bee");
		bee.flipX = true;
		
		var rect815 = this.add.obstacle(-30.005621, -47.35043, "obstacle");
		rect815.setOrigin(0.0, 0.0);
		rect815.setScale(59.394684, 4.434119);
		
		var rect_1 = this.add.obstacle(-76.03509, 171.09714, "obstacle");
		rect_1.setOrigin(0.0, 0.0);
		rect_1.setScale(4.0498815, 15.461963);
		
		var rect_2 = this.add.obstacle(3129.9895, 169.98428, "obstacle");
		rect_2.setOrigin(0.0, 0.0);
		rect_2.setScale(4.2151246, 57.674435);
		
		var rect_3 = this.add.obstacle(-71.663734, 1506.5342, "obstacle");
		rect_3.setOrigin(0.0, 0.0);
		rect_3.setScale(4.2151246, 31.387602);
		
		var rect_4 = this.add.obstacle(2430.4614, 1573.1587, "obstacle");
		rect_4.setOrigin(0.0, 0.0);
		rect_4.setScale(4.2151246, 4.589697);
		
		var bee_1 = this.add.enemy_bee(1071.6118, 1024.0619, "bee");
		
		var warp = this.add.warp(1658.086, 3055.5156, "warp");
		warp.setData("zone", "Map02");
		warp.setData("x", 1650);
		warp.setData("y", 250);
		warp.setData("dir", "bottom");
		warp.setScale(1.6189777, 1.5708395);
		
		var warp_1 = this.add.warp(-1.4731033, 1292.9915, "warp");
		warp_1.setData("zone", "Map05");
		warp_1.setData("x", 2984);
		warp_1.setData("y", 1252);
		warp_1.setData("dir", "left");
		warp_1.setScale(1.6189777, 1.5708395);
		
		this.fEnemies = this.add.group([ bee, bee_1 ]);
		this.fObstacle = this.add.group([ rect815, rect_4, rect_3, rect_2, rect_1 ]);
		this.fWarp = this.add.group([ warp, warp_1 ]);
		
		this.fMapScene = mapScene;
		
	}
	
	
	
	
	
	/* START-USER-CODE */
	init(data){
		this.dataScene = data
	}
	create() {
		this._create();
		this.scene.get("mySceneManager").createMap(this);
		//this.fHero.setDepth(10)
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
		

		if(!this.sys.isTransitioning()){//
				this.scene.get("mySceneManager").updateMap(this);
				/*
				if(this.fHero.y >=2900 && this.fHero.x >= 1590){
					//go in map02
					this.changeTransitionMap("Map02",1650,100,"bottom")
				}else if(this.fHero.y <=1391 && this.fHero.x <= 50){
					//go in map05
					this.changeTransitionMap("Map05",2984,1252,"left")
				} */
		}

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

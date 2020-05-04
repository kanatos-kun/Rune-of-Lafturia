
// You can write more code here

/* START OF COMPILED CODE */

class Map08 extends Phaser.Scene {
	
	constructor() {
	
		super("Map08");
		
	}
	
	_create() {
	
		var mapScene = this.add.image(3328.0, 3072.0, "map08");
		
		var obstacle = this.add.obstacle(13.953856, -110.22453, "obstacle");
		obstacle.setOrigin(0.0, 0.0);
		obstacle.setScale(89.24969, 8.264442);
		
		var bee = this.add.enemy_bee(2242.92, 1628.5172, "bee");
		bee.setOrigin(0.4420016, 0.49999967);
		bee.flipX = true;
		
		var bee_1 = this.add.enemy_bee(5097.9077, 2632.2666, "bee");
		bee_1.setOrigin(0.4420016, 0.49999967);
		bee_1.flipX = true;
		
		var bee_2 = this.add.enemy_bee(1844.5498, 4978.2256, "bee");
		bee_2.setOrigin(0.4420016, 0.49999967);
		bee_2.flipX = true;
		
		var bee_3 = this.add.enemy_bee(2309.3152, 5210.6084, "bee");
		bee_3.setOrigin(0.4420016, 0.49999967);
		bee_3.flipX = true;
		
		var bee_4 = this.add.enemy_bee(1501.5085, 5409.7935, "bee");
		bee_4.setOrigin(0.4420016, 0.49999967);
		bee_4.flipX = true;
		
		var bee_5 = this.add.enemy_bee(5252.8296, 5243.8057, "bee");
		bee_5.setOrigin(0.4420016, 0.49999967);
		bee_5.flipX = true;
		
		var bee_6 = this.add.enemy_bee(3736.809, 3207.6904, "bee");
		bee_6.setOrigin(0.4420016, 0.49999967);
		bee_6.flipX = true;
		
		var obstacle_1 = this.add.obstacle(1829.4246, 797.0171, "obstacle");
		obstacle_1.setOrigin(0.0, 0.0);
		obstacle_1.setScale(3.9520853, 4.4263372);
		
		var obstacle_2 = this.add.obstacle(1312.9752, 1449.902, "obstacle");
		obstacle_2.setOrigin(0.0, 0.0);
		obstacle_2.setScale(-4.3472967, 4.4263372);
		
		var obstacle_3 = this.add.obstacle(321.77295, 3271.2317, "obstacle");
		obstacle_3.setOrigin(0.0, 0.0);
		obstacle_3.setScale(-5.236517, 5.754239);
		
		var obstacle_4 = this.add.obstacle(1078.3619, 3594.35, "obstacle");
		obstacle_4.setOrigin(0.0, 0.0);
		obstacle_4.setScale(-5.7305284, 7.303461);
		
		var obstacle_5 = this.add.obstacle(1067.296, 4136.577, "obstacle");
		obstacle_5.setOrigin(0.0, 0.0);
		obstacle_5.setScale(-5.7305284, 7.303461);
		
		var obstacle_6 = this.add.obstacle(1635.4979, 3826.7332, "obstacle");
		obstacle_6.setOrigin(0.0, 0.0);
		obstacle_6.setScale(5.730526, 7.303461);
		
		var obstacle_7 = this.add.obstacle(3150.319, 3794.1802, "obstacle");
		obstacle_7.setOrigin(0.0, 0.0);
		obstacle_7.setScale(5.730526, 7.303461);
		
		var obstacle_8 = this.add.obstacle(3692.5457, 3805.246, "obstacle");
		obstacle_8.setOrigin(0.0, 0.0);
		obstacle_8.setScale(5.730526, 7.303461);
		
		var obstacle_9 = this.add.obstacle(3980.2576, 4590.921, "obstacle");
		obstacle_9.setOrigin(0.0, 0.0);
		obstacle_9.setScale(9.682612, 7.303461);
		
		var obstacle_10 = this.add.obstacle(4743.8003, 4624.1187, "obstacle");
		obstacle_10.setOrigin(0.0, 0.0);
		obstacle_10.setScale(4.9401164, 7.303461);
		
		var obstacle_11 = this.add.obstacle(4489.286, 4834.3696, "obstacle");
		obstacle_11.setOrigin(0.0, 0.0);
		obstacle_11.setScale(4.9401164, 7.303461);
		
		var obstacle_12 = this.add.obstacle(5418.8174, 5597.9126, "obstacle");
		obstacle_12.setOrigin(0.0, 0.0);
		obstacle_12.setScale(4.9401164, 5.754237);
		
		var obstacle_13 = this.add.obstacle(5518.4097, 4900.7646, "obstacle");
		obstacle_13.setOrigin(0.0, 0.0);
		obstacle_13.setScale(9.880219, 6.860822);
		
		var obstacle_14 = this.add.obstacle(6226.6235, 2908.9128, "obstacle");
		obstacle_14.setOrigin(0.0, 0.0);
		obstacle_14.setScale(3.556883, 2.6557996);
		
		var obstacle_15 = this.add.obstacle(6035.31, 1365.855, "obstacle");
		obstacle_15.setOrigin(0.0, 0.0);
		obstacle_15.setScale(3.713444, -6.860824);
		
		var obstacle_16 = this.add.obstacle(5571.8223, 6.033896, "obstacle");
		obstacle_16.setOrigin(0.0, 0.0);
		obstacle_16.setScale(5.1377134, -5.7542396);
		
		var warp_1 = this.add.warp(8.312955, 2174.1528, "warp");
		warp_1.setData("zone", "Map07");
		warp_1.setData("x", 3096);
		warp_1.setData("y", 2080);
		warp_1.setData("dir", "left");
		warp_1.setScale(1.6189777, 1.5708395);
		
		this.fObstacle = this.add.group([ obstacle, obstacle_16, obstacle_15, obstacle_14, obstacle_13, obstacle_12, obstacle_11, obstacle_10, obstacle_9, obstacle_8, obstacle_7, obstacle_6, obstacle_5, obstacle_4, obstacle_3, obstacle_2, obstacle_1 ]);
		this.fEnemies = this.add.group([ bee, bee_4, bee_2, bee_3, bee_5, bee_1, bee_6 ]);
		this.fWarp = this.add.group([ warp_1 ]);
		
		this.fMapScene = mapScene;
		
	}
	
	
	
	
	
	/* START-USER-CODE */
	init(data){
		this.dataScene = data
	}
	create(){
		this.scene.get("mySceneManager").preCreateMap(this);
		this._create()
		this.scene.get("mySceneManager").createMap(this);
	}
	// Write your code here.
	update(){
		if(!this.sys.isTransitioning()){//
			this.scene.get("mySceneManager").updateMap(this);
			/*
			if(this.fHero.y >=1748 && this.fHero.x <=50){
				this.changeTransitionMap("Map07",3096,2080,"left")
			} */
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

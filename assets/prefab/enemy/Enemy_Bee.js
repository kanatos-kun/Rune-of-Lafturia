class Bee extends Phaser.Physics.Arcade.Sprite {

	/**
	 * Bee
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param texture
	 * @param frame
	 */
	constructor(scene, x, y) {
		super(scene, x, y,"bee");
		scene.physics.add.existing(this)
		this.type = "enemy";
		this.state = "idle_wait";
		this.stateVar = {
			idle_wait:{c:0,t:2},
			idle_move:{rndX : 0,rndY : 0},
			get_hit:{x:0,y:0,pX:900,pY:900,c:0,t:1}
		}
		this.stats = {
			hp:24,
			currentHp:24,
			atk :1
		}
		this.hp = 4;
		this.tweenCounter = 0;
		this.currentHp = 4;
		this.invincible = {
			state: false,
			c:0,
			t:4
		}
		this.attack = 1;
		this.setCollideWorldBounds(true)
		this.body.setSize(100,100)
		if(this.scene.game.config.physics.arcade.debug){
		this.popup_debug = scene.add.window_debug_popup(this,"hp:" + this.stats.currentHp + "/" + this.stats.hp)//new Window_debug_popup(this.scene,this,"hp:" + this.currentHp + "/" + this.hp)
		//this.scene.add.existing(this.popup_debug)
		this.detectionZone_debug = scene.add.detectionZone(this,1000)//new DetectionZone(this.scene,this,1000)
		//this.scene.add.existing(this.detectionZone_debug)
		
		}
		
		/*scene.events.on("ready",function(sys){
			sys.scene.fEnemies.add(this)
		},this) */
	//console.log(scene.fEnemies);
	   //scene.fEnemies.add(this)
	}
	
	stateManager(delta){
		if(this.state =="idle_wait"){
			this.stateVar.idle_wait.c += delta/100
			if(this.stateVar.idle_wait.c > this.stateVar.idle_wait.t){
				this.stateVar.idle_wait.c =0
				this.state = "idle_move"
				this.stateVar.idle_move.rndX = Phaser.Math.RND.realInRange(-50,50)
				this.stateVar.idle_move.rndY = Phaser.Math.RND.realInRange(-50,50)
				
				this.scene.tweens.add({	
					targets:this,
					tweenCounter : 1,
				//	x:this.stateVar.idle_move.rndX,
				//	y:this.stateVar.idle_move.rndY,
					duration: 500,
					onUpdate: function(){
						if(this.targets[0].body !== undefined){
							if(this.targets[0].state=="idle_move"){
									this.targets[0].body.setVelocity(this.targets[0].stateVar.idle_move.rndX,this.targets[0].stateVar.idle_move.rndY)
							}else{
								this.remove(this)
								this.targets[0].tweenCounter = 0
							}
							
						}
					},
					onComplete: function(){ 
						this.state ="idle_wait" 
						this.tweenCounter = 0
						},
					onCompleteScope : this
				})
			}
		}else if(this.state =="get_hit"){
			if(this.stateVar.get_hit.c > this.stateVar.get_hit.t){
				this.body.setVelocity(0,0)
				this.stateVar.get_hit.c = 0
				this.state="idle_wait"
			}else{
				this.body.setVelocity(this.stateVar.get_hit.pX * this.stateVar.get_hit.x,this.stateVar.get_hit.pY * this.stateVar.get_hit.y)
				this.stateVar.get_hit.c += delta/100
			}
			
		}
		
		
		
	}
	
	preUpdate(time,delta){
		super.preUpdate(time,delta)
			
			
				this.stateManager(delta)
					if(this.scene.game.config.physics.arcade.debug){
							this.popup_debug.setText("hp:" + this.stats.currentHp + "/" + this.stats.hp)
					}
		
				if(this.invincible.state){
		
					if(this.invincible.c > this.invincible.t){
						this.setTint(0xffffff)
						this.invincible.state = false
						this.invincible.c = 0
					}else{
					    this.invincible.c += delta/100
					}
				}
				
				
				if(this.stats.currentHp <= 0){
					this.scene.add.coin(this.x,this.y)
					this.scene.add.itemInventory_misc_sting(this.x,this.y)
					this.destroy()
				}
			
		

	}

}

Phaser.GameObjects.GameObjectFactory.register("enemy_bee", function (x, y) {
	
	var sprite = new Bee(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
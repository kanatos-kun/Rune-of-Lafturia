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
			idle_move:{rndX : 0,rndY : 0}
		}
		this.hp = 2;
		this.currentHp = 2;
		this.invincible = {
			state: false,
			c:0,
			t:4
		}
		this.attack = 1;
		this.setCollideWorldBounds(true)
		if(this.scene.game.config.physics.arcade.debug){
		this.popup_debug = new Window_debug_popup(this.scene,this,"hp:" + this.currentHp + "/" + this.hp)
		this.scene.add.existing(this.popup_debug)
		this.detectionZone_debug = new DetectionZone(this.scene,this,1000)
		this.scene.add.existing(this.detectionZone_debug)
	}
		
	}
	
	stateManager(delta){
		if(this.state =="idle_wait"){
			this.stateVar.idle_wait.c += delta/100
			if(this.stateVar.idle_wait.c > this.stateVar.idle_wait.t){
				this.stateVar.idle_wait.c =0
				this.state = "idle_move"
				this.stateVar.idle_move.rndX = Phaser.Math.RND.realInRange(this.x-50,this.x+50)
				this.stateVar.idle_move.rndY = Phaser.Math.RND.realInRange(this.y-50,this.y+50)

				this.scene.tweens.add({
					targets:this,
					x:this.stateVar.idle_move.rndX,
					y:this.stateVar.idle_move.rndY,
					duration: 500,
					onComplete: function(){ this.state ="idle_wait" },
					onCompleteScope : this
				})
			}
		}else if(this.state =="idle_move"){
			
		}
		
		
		
	}
	
	preUpdate(time,delta){
		super.preUpdate(time,delta)
		this.stateManager(delta)
			if(this.scene.game.config.physics.arcade.debug){
					this.popup_debug.setText("hp:" + this.currentHp + "/" + this.hp)
			}

		if(this.invincible.state){

			if(this.invincible.c > this.invincible.t){
				this.invincible.state = false
				this.invincible.c = 0
			}else{
			    this.invincible.c += delta/100
			}
		}
		
		
		if(this.currentHp <= 0){
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
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
		this.state = "idle";
		this.hp = 2;
		this.currentHp = 2;
		this.invincible = {
			state: false,
			c:0,
			t:4
		}
		if(this.scene.game.config.physics.arcade.debug){
		this.popup_debug = new Window_debug_popup(this.scene,this,"hp:" + this.currentHp + "/" + this.hp)
		this.scene.add.existing(this.popup_debug)
		this.detectionZone_debug = new DetectionZone(this.scene,this,1000)
		this.scene.add.existing(this.detectionZone_debug)
	}
		
	}
	
	preUpdate(time,delta){
		super.preUpdate(time,delta)

		this.popup_debug.setText("hp:" + this.currentHp + "/" + this.hp)
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
			this.destroy()
		}
	}

}

Phaser.GameObjects.GameObjectFactory.register("bee", function (x, y) {
	
	var sprite = new Bee(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
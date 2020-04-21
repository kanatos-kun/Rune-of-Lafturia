class Hero extends Phaser.Physics.Arcade.Sprite {

	/**
	 * Hero
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param texture
	 * @param frame
	 */
	constructor(scene, x, y) {
		super(scene, x, y, "hero");
		scene.physics.add.existing(this)
		this.setCollideWorldBounds(true)
		this.timeAttack={
			c:0,t:5,state:true
		}
		this.hp = 12;
		this.currentHp=11;
		this.body.setBounce(1)
		this.body.setSize(200,200)
		if(this.scene.game.config.physics.arcade.debug){
		this.popup_debug = new Window_debug_popup(this.scene,this,"hp:" + this.currentHp + "/" + this.hp)
		this.scene.add.existing(this.popup_debug)
	}
	}
	
	preUpdate(time,delta){
		super.preUpdate(time,delta)
		
		this.popup_debug.setText("hp:" + this.currentHp + "/" + this.hp +"\ngold:" + this.scene.game.gold)
		if(!this.timeAttack.state){

			if(this.timeAttack.c > this.timeAttack.t){
				this.timeAttack.state = true
				this.timeAttack.c = 0
			}else{
				this.timeAttack.c += delta/100
			}
		}
	}

}

Phaser.GameObjects.GameObjectFactory.register("hero", function (x, y) {
	
	var sprite = new Hero(this.scene, x, y);
	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
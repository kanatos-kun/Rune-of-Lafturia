class Hero extends Phaser.Physics.Arcade.Sprite {

	/**
	 * Hero
	 *
	 * @param {Phaser.Scene} scene
	 * @param {number} x 
	 * @param {number} y 
	 */
	constructor(scene, x, y) {
		super(scene, x, y, "hero");
		scene.physics.add.existing(this)
		this.type = "hero"
		this.setCollideWorldBounds(true)
		this.timeAttack={
			c:0,t:5,state:true
		}
		this.hp = scene.game.hero.statuts.hp;
		this.currentHp=scene.game.hero.statuts.currentHp;
		this.invincible = {
			state: false,
			c:0,
			t:10
		}
		this.body.setBounce(1)
		this.body.setSize(200,200)
		if(this.scene.game.config.physics.arcade.debug){
		this.popup_debug = new Window_debug_popup(this.scene,this,"hp:" + this.currentHp + "/" + this.hp)
		this.scene.add.existing(this.popup_debug)
	}
	}
	
	preUpdate(time,delta){
		super.preUpdate(time,delta)
		
		
		
		if(this.scene.game.config.physics.arcade.debug){
				this.popup_debug.setText("hp:" + this.currentHp + "/" + this.hp +"\ngold:" + this.scene.game.gold +"\nx:" + this.x +"\ny:"+this.y)
		}
		if(this.invincible.state){

			if(this.invincible.c > this.invincible.t){
				this.invincible.state = false
				this.invincible.c = 0
			}else{
			    this.invincible.c += delta/100
			}
		}
		
		
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
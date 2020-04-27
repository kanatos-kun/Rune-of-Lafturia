class Slash extends Phaser.Physics.Arcade.Sprite {

	/**
	 * Slash
	 *
	 * @param {Phaser.Scene} scene
	 * @param {Phaser.GameObjects.GameObjectFactory} target
	 * @param {number} angle
	 */
	constructor(scene,target,angle) {
		let angleX = (150 *Math.cos(angle) ) - (150 * Math.sin(angle))
		let angleY = (150*Math.sin(angle) ) + (150* Math.cos(angle))
		super(scene,angleX + target.x,angleY +target.y,"slash_anim_atlas","slash_anim2.png");
		scene.physics.add.existing(this)
		this.target = target;
		this.targetAngle = angle;
		this.body.setSize(180,180)
		this.body.setAllowRotation(true)

		this.rotation = 4+angle;
		this.counter = {
			t:3,c:0
		}
		this.type = "attack hero";
		this.attack = 1;
		
	}
	
	preUpdate(time,delta){
		super.preUpdate(time,delta)
		this.counter.c+= delta /100
		let angleX = (150 *Math.cos(this.targetAngle) ) - (150 * Math.sin(this.targetAngle))
		let angleY = (150*Math.sin(this.targetAngle) ) + (150* Math.cos(this.targetAngle))
		this.setPosition(angleX + this.target.x,angleY +this.target.y)
		this.body.setSize(550,550)
		if(this.counter.c > this.counter.t){
			this.destroy()
		}
	}
	

}

Phaser.GameObjects.GameObjectFactory.register("slash", function (target,angle) {
	
	var sprite = new Slash(this.scene, target,angle);
	sprite.setScale(0.7)
	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
class Slash extends Phaser.Physics.Arcade.Sprite {

	/**
	 * Slash
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param texture
	 * @param frame
	 */
	constructor(scene,target,angle) {
		let angleX = (150 *Math.cos(angle) ) - (150 * Math.sin(angle))
		let angleY = (150*Math.sin(angle) ) + (150* Math.cos(angle))
		super(scene,angleX + target.x,angleY +target.y,"slash_anim_atlas","slash_anim1.png");
		scene.physics.add.existing(this)
		this.target = target;
		this.targetAngle = angle;
		this.body.setSize(180,180)
		this.body.setAllowRotation(true)

		this.rotation = 0.5+angle;

		
		this.scale = 2
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
		if(this.counter.c > this.counter.t){
			this.destroy()
		}
	}
	

}

Phaser.GameObjects.GameObjectFactory.register("slash", function (target,angle) {
	
	var sprite = new Slash(this.scene, target,angle);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
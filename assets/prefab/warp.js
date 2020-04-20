class Warp extends Phaser.Physics.Arcade.Sprite {

	/**
	 * Warp
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param texture
	 * @param frame
	 */
	constructor(scene, x, y) {
		super(scene, x, y, "warp");
		scene.physics.add.existing(this)
	}
	
	preUpdate(time,delta){
		super.preUpdate(time,delta)
	}

}

Phaser.GameObjects.GameObjectFactory.register("warp", function (x, y) {
	
	var sprite = new Warp(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
class Coin extends Phaser.Physics.Arcade.Sprite {

	/**
	 * Coin
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param texture
	 * @param frame
	 */
	constructor(scene, x, y) {
		super(scene, x, y, "coin");
		scene.physics.add.existing(this)
		this.type = "coin";
		this.setCollideWorldBounds(true)
		scene.fGold.add(this)
	}

}

Phaser.GameObjects.GameObjectFactory.register("coin", function (x, y) {
	
	var sprite = new Coin(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
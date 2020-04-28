class Sting extends Phaser.Physics.Arcade.Sprite {

	/**
	 * Sting
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param texture
	 * @param frame
	 */
	constructor(scene, x, y) {
		super(scene, x, y, "sting");
		this.section = "misc"
		this.name = "sting"
		this.sellGold = 1
		scene.physics.add.existing(this)
		this.setCollideWorldBounds(true)
		scene.fItems.add(this)
	}

}

Phaser.GameObjects.GameObjectFactory.register("itemInventory_misc_sting", function (x, y) {
	
	var sprite = new Sting(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
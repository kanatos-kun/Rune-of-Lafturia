class Obstacle extends Phaser.Physics.Arcade.Image {

	/**
	 * Obstacle
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param texture
	 * @param frame
	 */
	constructor(scene, x, y ) {
		super(scene, x, y, "obstacle");
		scene.physics.add.existing(this)
		//this.body.setSize(1500,300)
		this.body.setImmovable(true)
		this.setVisible(false)
	}
	
	preUpdate(time,delta){
		//super.preUpdate(time,delta)
		
	}

}

Phaser.GameObjects.GameObjectFactory.register("obstacle", function (x, y) {
	
	var sprite = new Obstacle(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
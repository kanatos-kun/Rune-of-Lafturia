class Villager_01 extends Phaser.GameObjects.Sprite {

	/**
	 * Villager_01
	 *
	 * @param {Phaser.Scene} scene
	 * @param {number} x 
	 * @param {number} y 
	 */
	constructor(scene, x, y) {
		super(scene, x, y,"villager_01");
		
		if(this.scene.game.config.physics.arcade.debug){
		this.detectionZone_debug = new DetectionZone(this.scene,this,700)
		this.scene.add.existing(this.detectionZone_debug)
		}
		
		this.isDetectedHero = false
	}

}

Phaser.GameObjects.GameObjectFactory.register("villager_01", function (x, y) {
	
	var sprite = new Villager_01(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
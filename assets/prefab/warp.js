class Warp extends Phaser.GameObjects.Image  {

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
		
		if(this.scene.game.config.physics.arcade.debug){
		this.detectionZone_debug = new DetectionZone(this.scene,this,400)
		this.scene.add.existing(this.detectionZone_debug)
		}
		
		
	}
	
	preUpdate(time,delta){
		//super.preUpdate(time,delta)
		if(Phaser.Math.Distance.Between(this.scene.fHero.x,this.scene.fHero.y,this.x,this.y) < 200 ){
			console.log(this.data.get("zone"))
			this.scene.scene.start(this.data.get("zone"),{x:this.data.get("x"),y:this.data.get("y")})
		}
	}

}

Phaser.GameObjects.GameObjectFactory.register("warp", function (x, y) {
	
	var sprite = new Warp(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
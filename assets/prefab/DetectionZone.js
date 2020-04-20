class DetectionZone extends Phaser.GameObjects.Ellipse  {

	/**
	 * DetectionZone
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param rayon
	 */
	constructor(scene, target, rayon) {
		super(scene, target.x, target.y, rayon,rayon,0xff00ff,0.3);
		this.target = target
				this.setDepth(998)
	}
	
	
	preUpdate(time,delta){
		this.setPosition(this.target.x,this.target.y-40)
		if(this.target.scene === undefined){
			this.destroy()
		}
	}

}

Phaser.GameObjects.GameObjectFactory.register("detectionZone", function (target, rayon) {
	
	var ellipse = new DetectionZone(this.scene, target, rayon);

	this.scene.sys.displayList.add(ellipse);
	this.scene.sys.updateList.add(ellipse);

	return ellipse;
});
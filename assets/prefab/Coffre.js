class Coffre extends Phaser.GameObjects.Sprite {

	/**
	 * Coffre
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param texture
	 * @param frame
	 */
	constructor(scene, x, y) {
		super(scene, x, y,"coffre_closed");
		this.state = "close";
		this.type="coffre";
		if(this.scene.game.config.physics.arcade.debug){
			this.detectionZone_debug = scene.add.detectionZone(this,1000)
		}
		/*
		if(this.scene.game.globalEvent[this.getData("globalEventId")]){
			this.state = "open"
		} */
		
		scene.events.on("endSceneManager",function(){
			//console.log("end of sceneManager!")
		})
		
	}
	
	preUpdate(time,delta){
		super.preUpdate(time,delta)
		
		if(this.state === "close"){
			if(Phaser.Math.Distance.Between(this.scene.fHero.x,this.scene.fHero.y,this.x,this.y) < 200 ){
				
				this.scene.game.globalSwitchId[this.getData("globalSwitchId")] = true
				if(this.getData("type")=="gold"){
					console.log("vous recevez " + this.getData("number") + " X " + this.getData("type") +" !")
					this.scene.game.gold += this.getData("number");
					this.setTexture("coffre_open")
				}
				this.state = "open"
			}
		}

	}

}

Phaser.GameObjects.GameObjectFactory.register("coffre", function (x, y) {
	
	var sprite = new Coffre(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
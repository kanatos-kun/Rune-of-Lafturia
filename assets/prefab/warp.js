class Warp extends Phaser.GameObjects.Image  {

	/**
	 * Warp
	 *
	 * @param {Phaser.Scene} scene
	 * @param {number} x 
	 * @param {number} y 
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
			//this.scene.scene.start(this.data.get("zone"),{x:this.data.get("x"),y:this.data.get("y")})
			if(this.scene.fHero.active){
				if(this.data.get("loadZone") !==undefined && this.scene.game.loading["loadZone_"+this.data.get("loadZone")]===false){
					this.scene.scene.bringToTop("LoadZoneAssets_" + this.data.get("loadZone"))
					this.scene.scene.run("LoadZoneAssets_"+this.data.get("loadZone"),{packName :"packZone-"+this.data.get("loadZone"),
													  xZone : this.data.get("x"),
											          yZone : this.data.get("y"),
													  zone :  this.data.get("zone"),
													  packId: this.data.get("loadZone")
	
	
					})
					this.scene.scene.sleep()
				}else{
					console.log(this.data.get("zone"))
					this.scene.changeTransitionMap(this.data.get("zone"),this.data.get("x"),this.data.get("y"),this.data.get("dir"))
				}

			}
			
		}
	}

}

Phaser.GameObjects.GameObjectFactory.register("warp", function (x, y) {
	
	var sprite = new Warp(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});

// You can write more code here

/* START OF COMPILED CODE */

class BaseLoadAsset extends Phaser.Scene {
	
	constructor() {
	
		super("BaseLoadAsset");
		
	}
	
	preload() {
		
	    var progress = this.add.graphics();
		this.add.image(1650,2800,"UI_BARFRAME").setScale(2);
		var colorBar = this.add.image(1650,2800,"UI_COLORBAR (2)").setScale(2);
		var texLoad = this.add.text(550,2900,"file currently loading",{
			fontSize:"80px",
			color:"#ffff00"
		})
		this.add.image(1650,2800,"UI_BARMARKINGS").setScale(2)
	    this.load.on('progress', function (value) {
			colorBar.setCrop(0,0,1105*value,380)
	    });
	
	    this.load.on('complete', function () {
	        progress.destroy();
	    });

		this.load.on('filecomplete',function(key,type){
			texLoad.setText(type+"/"+key);
		})
		
		
		this.load.pack("basePack", "assets/basePack.json");
		
	}
	
	create() {
		//this.scene.sleep("BaseLoadAsset")
		this.scene.run("menu_hud")
		//this.scene.run("windowInventory")
		this.scene.bringToTop("menu_hud")
		if(this.game.loading["loadZone_"+this.game.loadZone]===false){
			this.scene.run("LoadZoneAssets",{packName :"packZone-"+this.game.loadZone})
			this.scene.bringToTop("LoadZoneAssets");
			this.game.loading["loadZone_"+this.game.loadZone] = true
		}
		
		this.game.loading.basePack = true;
		this.scene.stop("BaseLoadAsset");
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

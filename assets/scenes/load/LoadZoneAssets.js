
// You can write more code here

/* START OF COMPILED CODE */

class LoadZoneAssets extends Phaser.Scene {
	
	constructor() {
	
		super("LoadZoneAssets");
		
	}
	
	init(data){
		this.dataLoad = data
	}
	
	preload() {
		
	    var progress = this.add.graphics();
		this.add.image(1650,2800,"UI_BARFRAME").setScale(2);
		this.add.image(150,150,"spinner")
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
		
		if(this.dataLoad.packName !== undefined){
			this.load.pack("basePack", "assets/"+this.dataLoad.packName+".json");
		}

		
	}
	
	create() {
	
		
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

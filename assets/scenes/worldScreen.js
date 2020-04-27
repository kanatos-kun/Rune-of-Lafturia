
// You can write more code here

/* START OF COMPILED CODE */

class worldScreen extends Phaser.Scene {
	
	constructor() {
	
		super("worldScreen");
		
	}
	
	create() {
	
		var titleScreen_loadGame_blackScreen = this.add.image(1626.0132, 1549.1802, "titleScreen_loadGame_blackScreen");
		titleScreen_loadGame_blackScreen.setScale(1.1082801, 1.0800037);
		
		this.add.image(1680.3086, 1444.2941, "worldmap");
		
		
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

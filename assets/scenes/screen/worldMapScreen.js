
// You can write more code here

/* START OF COMPILED CODE */

class worldMapScreen extends Phaser.Scene {
	
	constructor() {
	
		super("worldMapScreen");
		
	}
	
	_create() {
	
		var titleScreen_loadGame_blackScreen = this.add.image(1626.0132, 1549.1802, "titleScreen_loadGame_blackScreen");
		titleScreen_loadGame_blackScreen.setScale(1.1082801, 1.0800037);
		
		this.add.image(1680.3086, 1444.2941, "worldmap");
		
		
	}
	
	/* START-USER-CODE */
	create(){
		this._create()
		this.keys = this.input.keyboard.addKeys('M')
	}
	// Write your code here.
	update(){

			if (Phaser.Input.Keyboard.JustDown(this.keys.M) ){
						this.scene.sleep("worldMapScreen")
						this.scene.run(this.game.currentMap)
						this.scene.run("menu_hud")
						this.scene.bringToTop("menu_hud")
			}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

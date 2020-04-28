
// You can write more code here

/* START OF COMPILED CODE */

class gameOver extends Phaser.Scene {
	
	constructor() {
	
		super("gameOver");
		
	}
	
	_create() {
	
		this.add.image(1648.847, 1524.2616, "gameOver");
		
		var buttonTitleScreen = this.add.image(2470.5508, 2536.4849, "gameOver_button_titleScreen");
		
		var buttonCheckpoint = this.add.image(849.35144, 2529.082, "gameOver_button_checkpoint");
		
		this.fButtonTitleScreen = buttonTitleScreen;
		this.fButtonCheckpoint = buttonCheckpoint;
		
	}
	
	
	
	/* START-USER-CODE */

	create(){
		this._create()

		this.fButtonCheckpoint.setInteractive()
		this.fButtonTitleScreen.setInteractive()
		
		this.fButtonTitleScreen.on("pointermove",function(pointer){
			this.setTint(0x440000aaaaaa)
		})
		this.fButtonTitleScreen.on("pointerout",function(pointer){
			this.setTint(0xffffff)
		})
		this.fButtonTitleScreen.on("pointerdown",function(pointer){
			this.scene.start("titleScreen")
		},this)
		
		this.fButtonCheckpoint.on("pointermove",function(pointer){
			this.setTint(0x4400000aaaaaa)
		})
		this.fButtonCheckpoint.on("pointerout",function(pointer){
			this.setTint(0xffffff)
		})
		

		
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

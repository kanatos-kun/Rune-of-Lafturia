
// You can write more code here

/* START OF COMPILED CODE */

class windowInventory extends Phaser.Scene {
	
	constructor() {
	
		super("windowInventory");
		
	}
	
	_create() {
	
		var window_inventory = this.add.image(1888.4213, 1052.7661, "window_inventory");
		
		this.fWindow_inventory = window_inventory;
		
	}
	
	
	/* START-USER-CODE */
	create(){
		this._create()
		this.fWindow_inventory.setInteractive()
		this.input.setDraggable(this.fWindow_inventory)

		this.fWindow_inventory.on("dragstart",function(pointer,dragX,dragY){
		this.scene.scene.get(this.scene.game.currentMap).isInWindowInteraction = true
		this.scene.scene.bringToTop()
		})

		this.fWindow_inventory.on("drag",function(pointer,dragX,dragY){
			this.x = dragX
			this.y = dragY
		})
		
		this.fWindow_inventory.on("dragend",function(pointer,dragX,dragY){
		this.scene.scene.get(this.scene.game.currentMap).isInWindowInteraction = false
		})
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

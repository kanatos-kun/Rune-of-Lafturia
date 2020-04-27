
// You can write more code here

/* START OF COMPILED CODE */

class windowEquip extends Phaser.Scene {
	
	constructor() {
	
		super("windowEquip");
		
	}
	
	_create() {
	
		var window_equipment = this.add.image(1852.281, 1383.7728, "window_equipment");
		
		this.fWindow_equipment = window_equipment;
		
	}
	
	
	/* START-USER-CODE */
	create(){
		this._create()
		this.fWindow_equipment.setInteractive()
		this.input.setDraggable(this.fWindow_equipment)

		this.fWindow_equipment.on("dragstart",function(pointer,dragX,dragY){
		this.scene.scene.get(this.scene.game.currentMap).isInWindowInteraction = true
		this.scene.scene.bringToTop()
		})

		this.fWindow_equipment.on("drag",function(pointer,dragX,dragY){
			this.x = dragX
			this.y = dragY
		})
		
		this.fWindow_equipment.on("dragend",function(pointer,dragX,dragY){
		this.scene.scene.get(this.scene.game.currentMap).isInWindowInteraction = false
		})
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

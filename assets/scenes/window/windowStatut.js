
// You can write more code here

/* START OF COMPILED CODE */

class windowStatut extends Phaser.Scene {
	
	constructor() {
	
		super("windowStatut");
		
	}
	
	_create() {
	
		var window_statut = this.add.image(1929.4006, 1551.4254, "window_statut");
		
		this.fWindow_statut = window_statut;
		
	}
	
	
	/* START-USER-CODE */
	create(){
		this._create()
		this.fWindow_statut.setInteractive()
		this.input.setDraggable(this.fWindow_statut)

		this.fWindow_statut.on("dragstart",function(pointer,dragX,dragY){
		this.scene.scene.get(this.scene.game.currentMap).isInWindowInteraction = true
		this.scene.scene.bringToTop()
		})

		this.fWindow_statut.on("drag",function(pointer,dragX,dragY){
			this.x = dragX
			this.y = dragY
		})
		
		this.fWindow_statut.on("dragend",function(pointer,dragX,dragY){
		this.scene.scene.get(this.scene.game.currentMap).isInWindowInteraction = false
		})
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

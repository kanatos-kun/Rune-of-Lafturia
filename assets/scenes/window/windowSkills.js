
// You can write more code here

/* START OF COMPILED CODE */

class windowSkills extends Phaser.Scene {
	
	constructor() {
	
		super("windowSkills");
		
	}
	
	_create() {
	
		var window_skills = this.add.image(1673.3428, 1483.1191, "window_skills");
		
		this.fWindow_skills = window_skills;
		
	}
	
	
	/* START-USER-CODE */
	create(){
		this._create()
		this.fWindow_skills.setInteractive()
		this.input.setDraggable(this.fWindow_skills)

		this.fWindow_skills.on("dragstart",function(pointer,dragX,dragY){
		this.scene.scene.get(this.scene.game.currentMap).isInWindowInteraction = true
		this.scene.scene.bringToTop()
		})

		this.fWindow_skills.on("drag",function(pointer,dragX,dragY){
			this.x = dragX
			this.y = dragY
		})
		
		this.fWindow_skills.on("dragend",function(pointer,dragX,dragY){
		this.scene.scene.get(this.scene.game.currentMap).isInWindowInteraction = false
		})
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

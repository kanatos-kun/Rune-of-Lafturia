
// You can write more code here

/* START OF COMPILED CODE */

class optionScreen extends Phaser.Scene {
	
	constructor() {
	
		super("optionScreen");
		
	}
	
	_create() {
	
		var black = this.add.image(1647.8185, 1528.0615, "titleScreen_loadGame_blackScreen");
		black.setScale(1.0648892, 1.0664418);
		
		var buttonPrecedent = this.add.uiButton(559.33514, 2799.2595, "button_empty");
		buttonPrecedent.setData("text", "<=");
		
		this.fButtonPrecedent = buttonPrecedent;
		
	}
	
	
	/* START-USER-CODE */
	init(data){
		
		this.data.set("windowTarget",data.windowTarget)
		this.myData = data
	}
	
	
	create(){
		this._create()
		
		this.events.on("resume",function(sys,data){
			sys.data.set("windowTarget",data.windowTarget);
		})
		this.events.on("wake",function(sys,data){
			sys.data.set("windowTarget",data.windowTarget);
		})
		
		
		this.fButtonPrecedent.on("pointerdown",function(){
			this.scene.run(this.data.get("windowTarget"))
			this.scene.sleep("optionScreen")
			/*this.scene.setActive(false)
			this.scene.setVisible(false) */
		},this) 

		
	}
	// Write your code here.
	update(){
		/*
		if(this.myData.state){
			this.scene.setActive(true)
			this.scene.setVisible(true)
		} */
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

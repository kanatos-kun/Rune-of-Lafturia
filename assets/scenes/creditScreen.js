
// You can write more code here

/* START OF COMPILED CODE */

class creditScreen extends Phaser.Scene {
	
	constructor() {
	
		super("creditScreen");
		
	}
	
	_create() {
	
		var titleScreen_loadGame_blackScreen = this.add.image(1648.0472, 1529.7695, "titleScreen_loadGame_blackScreen");
		titleScreen_loadGame_blackScreen.setScale(1.0395782, 1.0500928);
		
		var buttonPrecedent = this.add.uiButton(547.3733, 2802.8875, "button_empty");
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
			this.scene.resume(this.data.get("windowTarget"))
			this.scene.sleep("creditScreen")
		},this) 

		
	}
	// Write your code here.
	update(){

	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

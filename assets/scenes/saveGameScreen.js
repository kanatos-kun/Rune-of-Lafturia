
// You can write more code here

/* START OF COMPILED CODE */

class saveGameScreen extends Phaser.Scene {
	
	constructor() {
	
		super("saveGameScreen");
		
	}
	
	_create() {
	
		var titleScreen_loadGame_blackScreen = this.add.image(-77.05164, -67.173454, "titleScreen_loadGame_blackScreen");
		titleScreen_loadGame_blackScreen.setOrigin(0.0, 0.0);
		titleScreen_loadGame_blackScreen.setScale(1.0538101, 1.0525515);
		
		this.add.image(1609.8624, 1470.2888, "titleScreen_loadGame_window");
		
		var buttonPrecedent = this.add.uiButton(658.7889, 2650.6182, "button_empty");
		buttonPrecedent.setData("text", "<=");
		
		var titleScreen_loadGame_buttonLoad = this.add.uiButton(2686.905, 2656.2466, "button_empty");
		titleScreen_loadGame_buttonLoad.setData("text", "save");
		
		this.add.image(1631.6383, 903.501, "titleScreen_loadGame_soloSlot");
		
		this.add.image(1638.9425, 1463.2964, "titleScreen_loadGame_soloSlot");
		
		this.add.image(1636.7091, 2030.5137, "titleScreen_loadGame_soloSlot");
		
		var loadHeaderText = this.add.text(642.02716, 160.66757, "Save Game\r\n", {
    "fontSize": "300px",
    "color": "#000000"
});
		loadHeaderText.setScale(1.1996853, 1.2567106);
		
		this.fButtonPrecedent = buttonPrecedent;
		this.fTitleScreen_loadGame_buttonLoad = titleScreen_loadGame_buttonLoad;
		
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
			this.scene.sleep("saveGameScreen")
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

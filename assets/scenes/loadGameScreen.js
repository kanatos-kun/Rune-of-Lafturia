
// You can write more code here

/* START OF COMPILED CODE */

class loadGameScreen extends Phaser.Scene {
	
	constructor() {
	
		super("loadGameScreen");
		
	}
	
	_create() {
	
		var titleScreen_loadGame_blackScreen = this.add.image(-24.822256, -37.21903, "titleScreen_loadGame_blackScreen");
		titleScreen_loadGame_blackScreen.setOrigin(0.0, 0.0);
		titleScreen_loadGame_blackScreen.setScale(1.0238528, 1.0316033);
		
		this.add.image(1616.853, 1478.8574, "titleScreen_loadGame_window");
		
		var titleScreen_loadGame_buttonPrecedent = this.add.uiButton(665.7793, 2659.1868, "button_empty");
		titleScreen_loadGame_buttonPrecedent.setData("text", "<=");
		
		var titleScreen_loadGame_buttonLoad = this.add.uiButton(2693.8955, 2664.8152, "button_empty");
		titleScreen_loadGame_buttonLoad.setData("text", "load");
		
		var titleScreen_loadGame_buttonDelete = this.add.uiButton(1663.4094, 2667.5315, "button_empty");
		titleScreen_loadGame_buttonDelete.setData("text", "delete");
		
		this.add.image(1638.6287, 912.0696, "titleScreen_loadGame_soloSlot");
		
		this.add.image(1645.9329, 1471.865, "titleScreen_loadGame_soloSlot");
		
		this.add.image(1643.6997, 2039.0824, "titleScreen_loadGame_soloSlot");
		
		var loadHeaderText = this.add.text(649.0176, 169.23631, "Load Game\r\n", {
    "fontSize": "300px",
    "color": "#000000"
});
		loadHeaderText.setScale(1.1996853, 1.2567106);
		
		this.fTitleScreen_loadGame_buttonPrecedent = titleScreen_loadGame_buttonPrecedent;
		this.fTitleScreen_loadGame_buttonLoad = titleScreen_loadGame_buttonLoad;
		this.fTitleScreen_loadGame_buttonDelete = titleScreen_loadGame_buttonDelete;
		
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
		
		
		
		this.fTitleScreen_loadGame_buttonPrecedent.on("pointerdown",function(){
			this.scene.run(this.data.get("windowTarget"))
			this.scene.sleep("loadGameScreen");
		},this)

		
	}
	// Write your code here.
	update(){

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

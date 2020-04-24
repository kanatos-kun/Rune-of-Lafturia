
// You can write more code here

/* START OF COMPILED CODE */

class gameMenuScreen extends Phaser.Scene {
	
	constructor() {
	
		super("gameMenuScreen");
		
	}
	
	_create() {
	
		var titleScreen_loadGame_blackScreen = this.add.image(1645.4309, 1531.3031, "titleScreen_loadGame_blackScreen");
		titleScreen_loadGame_blackScreen.setScale(1.0604941, 1.0370245);
		
		var buttonSave = this.add.uiButton(1687.8951, 788.1626, "button_empty");
		buttonSave.setData("text", "Save");
		
		var gear = this.add.image(3104.2068, 150.79999, "gear");
		gear.setScale(3.5323193, 3.179084);
		
		var buttonLoad = this.add.uiButton(1691.2803, 1108.9409, "button_empty");
		buttonLoad.setData("text", "Load");
		
		var buttonOption = this.add.uiButton(1691.2802, 1444.5111, "button_empty");
		buttonOption.setData("text", "Option");
		
		var buttonTitle = this.add.uiButton(1686.7059, 1760.6912, "button_empty");
		buttonTitle.setData("text", "Title");
		
		this.fButtonSave = buttonSave;
		this.fGear = gear;
		this.fButtonLoad = buttonLoad;
		this.fButtonOption = buttonOption;
		this.fButtonTitle = buttonTitle;
		
	}
	
	
	
	
	
	
	/* START-USER-CODE */
	
	init(data){
		this.myData = data
	}
	
	create(){
		this._create()
		this.fGear.setInteractive()
		
		
		this.fGear.on("pointermove", function(pointer){
			this.setTint(0xff0000)
		})
		
		this.fGear.on("pointerout",function(pointer){
			this.setTint(0xffffff)
		})
		
		this.fGear.on("pointerdown",function(pointer){
			this.scene.resume("menu_hud")
			this.scene.resume(this.game.currentMap)
			this.scene.sleep("gameMenuScreen")
			this.scene.setActive(false)
			this.scene.setVisible(false)
		},this)
		this.fButtonSave.on("pointerdown",function(pointer){
			this.scene.run("saveGameScreen",{state:true,windowTarget:"gameMenuScreen"})
			this.scene.sleep("gameMenuScreen")
		},this)
		
		this.fButtonLoad.on("pointerdown",function(pointer){
			this.scene.run("loadGameScreen",{state:true,windowTarget:"gameMenuScreen"})
			this.scene.sleep("gameMenuScreen")
		},this)
		
		
		this.fButtonOption.on("pointerdown",function(pointer){
			this.scene.run("optionScreen",{state:true,windowTarget:"gameMenuScreen"})
			//console.log(this.scene.isSleeping("optionScreen"))
			this.scene.sleep("gameMenuScreen")
		},this)
		
		this.fButtonTitle.on("pointerdown",function(pointer){
			this.scene.wake("titleScreen")
			this.scene.sleep(this.game.currentMap)
			this.scene.sleep("gameMenuScreen")


		},this)
		
	}
	// Write your code here.
	update(){
		if(this.myData.state){
			this.scene.setActive(true)
			this.scene.setVisible(true)
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

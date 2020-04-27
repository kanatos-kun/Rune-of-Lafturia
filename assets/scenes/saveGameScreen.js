
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
		
		var saveButton = this.add.uiButton(2686.905, 2656.2466, "button_empty");
		saveButton.setData("text", "save");
		
		var saveSlot1 = this.add.uiButton(195.32718, 659.8456, "titleScreen_loadGame_soloSlot");
		saveSlot1.setData("backgroundColorHover", 0x555555);
		saveSlot1.setData("backgroundColor", 0x858585);
		saveSlot1.setOrigin(0.0, 0.0);
		saveSlot1.setTint(0x858585, 0x858585, 0x858585, 0x858585);
		
		var saveSlot2 = this.add.uiButton(1638.9425, 1463.2964, "titleScreen_loadGame_soloSlot");
		saveSlot2.setData("backgroundColorHover", 0x555555);
		saveSlot2.setData("backgroundColor", 0x858585);
		saveSlot2.setTint(0x858585, 0x858585, 0x858585, 0x858585);
		
		var saveSlot3 = this.add.uiButton(1636.7091, 2030.5137, "titleScreen_loadGame_soloSlot");
		saveSlot3.setData("backgroundColor", 0x858585);
		saveSlot3.setData("backgroundColorHover", 0x555555);
		saveSlot3.setTint(0x858585, 0x858585, 0x858585, 0x858585);
		
		var loadHeaderText = this.add.text(642.02716, 160.66757, "Save Game\r\n", {
    "fontSize": "300px",
    "color": "#000000"
});
		loadHeaderText.setScale(1.1996853, 1.2567106);
		
		this.fButtonPrecedent = buttonPrecedent;
		this.fSaveButton = saveButton;
		this.fSaveSlot1 = saveSlot1;
		this.fSaveSlot2 = saveSlot2;
		this.fSaveSlot3 = saveSlot3;
		
	}
	
	
	
	
	
	
	/* START-USER-CODE */
	init(data){
		this.data.set("windowTarget",data.windowTarget)
		this.myData = data
	}
	
	
	create(){
		this._create() 
		this.activeSlot=0
		this.events.on("resume",function(sys,data){
			sys.data.set("windowTarget",data.windowTarget);	
		})
		
		this.events.on("wake",function(sys,data){
			sys.data.set("windowTarget",data.windowTarget);
		})
		
		
		if(localStorage.getItem("saveSlot-1")!== "undefined"){
			this.fSaveSlot1.setTexture("titleScreen_loadGame_soloSlotSave")
		}
		if(localStorage.getItem("saveSlot-2")!== "undefined"){
			this.fSaveSlot2.setTexture("titleScreen_loadGame_soloSlotSave")
		}
		if(localStorage.getItem("saveSlot-3")!== "undefined"){
			this.fSaveSlot3.setTexture("titleScreen_loadGame_soloSlotSave")
		}
		
		this.fSaveSlot1.on("pointerdown",function(){
			this.activeSlot = 1
			this.fSaveSlot1.setData("isActive",true)
			this.fSaveSlot2.setData("isActive",false)
			this.fSaveSlot3.setData("isActive",false)
			this.fSaveSlot1.setTint(0xff0000)
			
			this.fSaveSlot2.setTint(this.fSaveSlot2.getData("backgroundColor"))
			this.fSaveSlot3.setTint(this.fSaveSlot3.getData("backgroundColor"))
		},this)
		
		this.fSaveSlot2.on("pointerdown",function(){
			this.activeSlot = 2
			this.fSaveSlot1.setData("isActive",false)
			this.fSaveSlot2.setData("isActive",true)
			this.fSaveSlot3.setData("isActive",false)
			this.fSaveSlot2.setTint(0xff0000)
			
			this.fSaveSlot1.setTint(this.fSaveSlot1.getData("backgroundColor"))
			this.fSaveSlot3.setTint(this.fSaveSlot3.getData("backgroundColor"))
		},this)
		
		
		this.fSaveSlot3.on("pointerdown",function(){
			this.activeSlot = 3
			this.fSaveSlot1.setData("isActive",false)
			this.fSaveSlot2.setData("isActive",false)
			this.fSaveSlot3.setData("isActive",true)
			this.fSaveSlot3.setTint(0xff0000)
			
			this.fSaveSlot1.setTint(this.fSaveSlot1.getData("backgroundColor"))
			this.fSaveSlot2.setTint(this.fSaveSlot2.getData("backgroundColor"))
		},this)
		
		
		this.fSaveButton.on("pointerdown",function(){
			
			if(this.activeSlot !==0){
					this.utils.saveSlot(this.activeSlot)
					
					if(this.activeSlot ==1){
					this.fSaveSlot1.setTexture("titleScreen_loadGame_soloSlotSave")
					}
					if(this.activeSlot ==2){
					this.fSaveSlot2.setTexture("titleScreen_loadGame_soloSlotSave")
					}
				   if(this.activeSlot ==3){
					this.fSaveSlot3.setTexture("titleScreen_loadGame_soloSlotSave")
					}
					
					this.scene.sleep("saveGameScreen")
					this.scene.sleep(this.data.get("windowTarget"))
					this.scene.resume(this.game.currentMap)
					this.scene.run("menu_hud")
			}

			//this.scene.run(this.data.get("windowTarget"))
			//this.scene.sleep("loadGameScreen");
		},this)
		
		this.fButtonPrecedent.on("pointerdown",function(){
			this.activeSlot = 0
			this.fSaveSlot1.setData("isActive",false)
			this.fSaveSlot2.setData("isActive",false)
			this.fSaveSlot3.setData("isActive",false)
		    this.fSaveSlot1.setTint(this.fSaveSlot1.getData("backgroundColor"))
			this.fSaveSlot2.setTint(this.fSaveSlot2.getData("backgroundColor"))
			this.fSaveSlot3.setTint(this.fSaveSlot3.getData("backgroundColor"))
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

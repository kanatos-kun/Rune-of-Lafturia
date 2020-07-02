
// You can write more code here

/* START OF COMPILED CODE */

class loadGameScreen extends Phaser.Scene {
	
	constructor() {
	
		super("loadGameScreen");
		
	}
	
	_create() {
	
		var titleScreen_loadGame_blackScreen = this.add.image(-24.822256, -37.21903, "titleScreen_loadGame_blackScreen");
		titleScreen_loadGame_blackScreen.setOrigin(0.0, 0.0);
		titleScreen_loadGame_blackScreen.setScale(1.050443, 1.0695609);
		
		this.add.image(1616.853, 1478.8574, "titleScreen_loadGame_window");
		
		var buttonPrecedent = this.add.uiButton(665.7793, 2659.1868, "button_empty");
		buttonPrecedent.setData("text", "<=");
		
		var loadButton = this.add.uiButton(2693.8955, 2664.8152, "button_empty");
		loadButton.setData("text", "load");
		
		var buttonDelete = this.add.uiButton(1663.4094, 2667.5315, "button_empty");
		buttonDelete.setData("text", "delete");
		
		var titleScreen_loadGame_soloSlot = this.add.uiButton(1638.6287, 912.0696, "titleScreen_loadGame_soloSlot");
		titleScreen_loadGame_soloSlot.setData("backgroundColor", 0x858585);
		titleScreen_loadGame_soloSlot.setData("backgroundColorHover", 0x555555);
		titleScreen_loadGame_soloSlot.setData("isActive", false);
		titleScreen_loadGame_soloSlot.setTint(0x858585, 0x858585, 0x858585, 0x858585);
		
		var titleScreen_loadGame_soloSlot_1 = this.add.uiButton(1645.9329, 1471.865, "titleScreen_loadGame_soloSlot");
		titleScreen_loadGame_soloSlot_1.setData("backgroundColorHover", 0x555555);
		titleScreen_loadGame_soloSlot_1.setData("backgroundColor", 0x858585);
		titleScreen_loadGame_soloSlot_1.setData("isActive", false);
		titleScreen_loadGame_soloSlot_1.setTint(0x858585, 0x858585, 0x858585, 0x858585);
		
		var titleScreen_loadGame_soloSlot_2 = this.add.uiButton(1643.6997, 2039.0824, "titleScreen_loadGame_soloSlot");
		titleScreen_loadGame_soloSlot_2.setData("backgroundColor", 0x858585);
		titleScreen_loadGame_soloSlot_2.setData("backgroundColorHover", 0x555555);
		titleScreen_loadGame_soloSlot_2.setData("isActive", false);
		titleScreen_loadGame_soloSlot_2.setTint(0x858585, 0x858585, 0x858585, 0x858585);
		
		var loadHeaderText = this.add.text(649.0176, 169.23631, "Load Game\r\n", {
    "fontSize": "300px",
    "color": "#000000"
});
		loadHeaderText.setScale(1.1996853, 1.2567106);
		
		this.fButtonPrecedent = buttonPrecedent;
		this.fLoadButton = loadButton;
		this.fButtonDelete = buttonDelete;
		this.fTitleScreen_loadGame_soloSlot = titleScreen_loadGame_soloSlot;
		this.fTitleScreen_loadGame_soloSlot_1 = titleScreen_loadGame_soloSlot_1;
		this.fTitleScreen_loadGame_soloSlot_2 = titleScreen_loadGame_soloSlot_2;
		
	}
	
	
	
	
	
	
	
	/* START-USER-CODE */
		
	init(data){
		this.data.set("windowTarget",data.windowTarget)
		this.myData = data
	}
	
	
	create(){
		console.log("te")
		this._create()
		this.activeSlot = 0
		this.events.on("resume",function(sys,data){
			
			sys.data.set("windowTarget",data.windowTarget);
		})
		this.events.on("wake",function(sys,data){
			
			sys.data.set("windowTarget",data.windowTarget);
		})
		
		if(localStorage.getItem("saveSlot-1")!== "undefined"){
			this.fTitleScreen_loadGame_soloSlot.setTexture("titleScreen_loadGame_soloSlotSave")
		}
		if(localStorage.getItem("saveSlot-2")!== "undefined"){
			this.fTitleScreen_loadGame_soloSlot_1.setTexture("titleScreen_loadGame_soloSlotSave")
		}
		if(localStorage.getItem("saveSlot-3")!== "undefined"){
			this.fTitleScreen_loadGame_soloSlot_2.setTexture("titleScreen_loadGame_soloSlotSave")
		}
		
		this.fTitleScreen_loadGame_soloSlot.on("pointerdown",function(){
			this.activeSlot = 1
			this.fTitleScreen_loadGame_soloSlot.setData("isActive",true)
			this.fTitleScreen_loadGame_soloSlot_1.setData("isActive",false)
			this.fTitleScreen_loadGame_soloSlot_2.setData("isActive",false)
			this.fTitleScreen_loadGame_soloSlot.setTint(0xff0000)
			
			this.fTitleScreen_loadGame_soloSlot_1.setTint(this.fTitleScreen_loadGame_soloSlot_1.getData("backgroundColor"))
			this.fTitleScreen_loadGame_soloSlot_2.setTint(this.fTitleScreen_loadGame_soloSlot_2.getData("backgroundColor"))
		},this)
		
		this.fTitleScreen_loadGame_soloSlot_1.on("pointerdown",function(){
			this.activeSlot = 2
			this.fTitleScreen_loadGame_soloSlot.setData("isActive",false)
			this.fTitleScreen_loadGame_soloSlot_1.setData("isActive",true)
			this.fTitleScreen_loadGame_soloSlot_2.setData("isActive",false)
			this.fTitleScreen_loadGame_soloSlot_1.setTint(0xff0000)
			
			this.fTitleScreen_loadGame_soloSlot.setTint(this.fTitleScreen_loadGame_soloSlot.getData("backgroundColor"))
			this.fTitleScreen_loadGame_soloSlot_2.setTint(this.fTitleScreen_loadGame_soloSlot_2.getData("backgroundColor"))
		},this)
		
		
		this.fTitleScreen_loadGame_soloSlot_2.on("pointerdown",function(){
			this.activeSlot = 3
			this.fTitleScreen_loadGame_soloSlot.setData("isActive",false)
			this.fTitleScreen_loadGame_soloSlot_1.setData("isActive",false)
			this.fTitleScreen_loadGame_soloSlot_2.setData("isActive",true)
			this.fTitleScreen_loadGame_soloSlot_2.setTint(0xff0000)
			
			this.fTitleScreen_loadGame_soloSlot.setTint(this.fTitleScreen_loadGame_soloSlot.getData("backgroundColor"))
			this.fTitleScreen_loadGame_soloSlot_1.setTint(this.fTitleScreen_loadGame_soloSlot_1.getData("backgroundColor"))
		},this)
		
		this.fButtonPrecedent.on("pointerdown",function(){
			this.activeSlot = 0
			this.fTitleScreen_loadGame_soloSlot.setData("isActive",false)
			this.fTitleScreen_loadGame_soloSlot_1.setData("isActive",false)
			this.fTitleScreen_loadGame_soloSlot_2.setData("isActive",false)
		    this.fTitleScreen_loadGame_soloSlot.setTint(this.fTitleScreen_loadGame_soloSlot.getData("backgroundColor"))
			this.fTitleScreen_loadGame_soloSlot_1.setTint(this.fTitleScreen_loadGame_soloSlot_1.getData("backgroundColor"))
			this.fTitleScreen_loadGame_soloSlot_2.setTint(this.fTitleScreen_loadGame_soloSlot_2.getData("backgroundColor"))
			
			this.scene.run(this.data.get("windowTarget"))
			this.scene.sleep("loadGameScreen");
		},this)

		this.fLoadButton.on("pointerdown",function(){
			
			if(this.activeSlot !==0){
				if(localStorage.getItem("saveSlot-"+this.activeSlot) !== "undefined"){
					console.log(typeof localStorage.getItem("saveSlot-"+this.activeSlot))
					this.utils.loadSlot(this.activeSlot)
					this.scene.run(this.game.currentMap,{x:this.game.hero.position.x,y:this.game.hero.position.y});
					this.scene.run("menu_hud")
					this.scene.bringToTop("menu_hud")
					this.scene.bringToTop("dialogueWindow")
					this.scene.bringToTop("windowInventory")
					this.scene.bringToTop("windowSkills")
					this.scene.bringToTop("windowStatut")
					this.scene.bringToTop("windowEquip")
					this.scene.sleep("titleScreen")
					this.scene.sleep("loadGameScreen")
					this.scene.sleep("optionScreen")
					this.scene.sleep("creditScreen")
					this.scene.sleep("saveGameScreen")
					
					
				}
			}

			//this.scene.run(this.data.get("windowTarget"))
			//this.scene.sleep("loadGameScreen");
		},this)
		
		this.fButtonDelete.on("pointerdown",function(){
			
			if(this.activeSlot !==0){
				console.log("delete saveSlot-" + this.activeSlot)
				if(localStorage.getItem("saveSlot-"+this.activeSlot) !== undefined){
					this.utils.deleteSlot(this.activeSlot)
					if(this.activeSlot ==1){
						this.fTitleScreen_loadGame_soloSlot.setTexture("titleScreen_loadGame_soloSlot")
					}else if(this.activeSlot ==2){
						this.fTitleScreen_loadGame_soloSlot_1.setTexture("titleScreen_loadGame_soloSlot")
					}else if(this.activeSlot ==3){
						this.fTitleScreen_loadGame_soloSlot_2.setTexture("titleScreen_loadGame_soloSlot")
					}
				}
			}
			

			//this.scene.run(this.data.get("windowTarget"))
			//this.scene.sleep("loadGameScreen");
		},this)
		
	}
	// Write your code here.
	update(){

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

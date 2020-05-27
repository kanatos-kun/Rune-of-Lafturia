
// You can write more code here

/* START OF COMPILED CODE */

class menu_hud extends Phaser.Scene {
	
	constructor() {
	
		super("menu_hud");
		
	}
	
	_create() {
	
		var background_ui_bottom = this.add.image(1638.3524, 3250.8884, "background_ui_bottom");
		background_ui_bottom.setScale(1.0450327, 1.2559277);
		
		this.add.image(1843.0378, 3254.5264, "skill_slot");
		
		var bag = this.add.image(-868.6426, 3413.4214, "bag");
		
		var gear = this.add.image(3137.3333, 122.15568, "gear");
		gear.setScale(3.5323193, 3.179084);
		
		var window_info = this.add.image(297.87125, 201.20961, "window_info");
		window_info.setScale(1.0, 1.1451725);
		
		var buttonInventory = this.add.uiButton(208.41438, 3179.9592, "button_empty");
		buttonInventory.setData("textSize", 50);
		buttonInventory.setData("text", "INV");
		buttonInventory.setScale(0.3311738, 0.43636897);
		
		var buttonSkills = this.add.uiButton(493.1458, 3179.959, "button_empty");
		buttonSkills.setData("textSize", 50);
		buttonSkills.setData("text", "SKILL");
		buttonSkills.setScale(0.3311738, 0.43636897);
		
		var buttonEquip = this.add.uiButton(204.45988, 3330.234, "button_empty");
		buttonEquip.setData("textSize", 50);
		buttonEquip.setData("text", "EQUIP");
		buttonEquip.setScale(0.3311738, 0.43636897);
		
		var buttonStatut = this.add.uiButton(493.1458, 3334.1885, "button_empty");
		buttonStatut.setData("textSize", 50);
		buttonStatut.setData("text", "STATS");
		buttonStatut.setScale(0.3311738, 0.43636897);
		
		var goldText = this.add.text(41.390854, 313.97787, "0 G", {
    "fontSize": "70px",
    "color": "#000000",
    "fixedWidth": 2000,
    "wordWrap.width": 512
});
		goldText.setScrollFactor(0.0, 0.0);
		
		var playerText = this.add.text(33.4238, 32.480545, "Player", {
    "fontSize": "70px",
    "color": "#000000",
    "fixedWidth": 512,
    "wordWrap.width": 200
});
		
		var hpText = this.add.text(32.955017, 157.16875, "hp 12/12", {
    "fontSize": "70px",
    "color": "#000000",
    "fixedWidth": 2000,
    "wordWrap.width": 700
});
		
		var mpText = this.add.text(35.535076, 234.11026, "mp 12/12", {
    "fontSize": "70px",
    "color": "#000000",
    "fixedWidth": 2000,
    "wordWrap.width": 1000
});
		
		var levelText = this.add.text(26.675161, 92.39232, "level 1", {
    "fontSize": "70px",
    "color": "#000000",
    "fixedWidth": 1000,
    "wordWrap.width": 2000
});
		
		this.fBag = bag;
		this.fGear = gear;
		this.fButtonInventory = buttonInventory;
		this.fButtonSkills = buttonSkills;
		this.fButtonEquip = buttonEquip;
		this.fButtonStatut = buttonStatut;
		this.fGoldText = goldText;
		this.fPlayerText = playerText;
		this.fHpText = hpText;
		this.fMpText = mpText;
		this.fLevelText = levelText;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	/* START-USER-CODE */

	create(){
		this._create()
		this.fBag.setInteractive()
		this.fGear.setInteractive()
		this.fBagState = false
		this.fGearState = false
		this.fButtonInventoryState = false
		this.fButtonSkillState = false
		this.fButtonStatutState = false
		this.fButtonEquipState = false
		this.scene.run("menu_bag",{state:false})
		this.fBag.on("pointermove", function(pointer){
			this.setTint(0xff0000)
		})
		
		this.fBag.on("pointerout",function(pointer){
			this.setTint(0xffffff)
		})
		
		this.fBag.on("pointerdown",function(pointer){
			this.fBagState = !this.fBagState
			this.scene.run("menu_bag",{state:this.fBagState})
			this.fBagState?this.scene.pause(this.game.currentMap):this.scene.resume(this.game.currentMap)
		},this)
		
		this.fButtonInventory.on("pointerdown",function(pointer){
			
			this.fButtonInventoryState = !this.fButtonInventoryState
			if(this.fButtonInventoryState){
				this.scene.run("windowInventory")
				this.scene.bringToTop("windowInventory")
			}else{
				this.scene.sleep("windowInventory")
			}
		},this)
		
		this.fButtonSkills.on("pointerdown",function(pointer){
			
			this.fButtonSkillState = !this.fButtonSkillState
			if(this.fButtonSkillState){
				this.scene.run("windowSkills")
			}else{
				this.scene.sleep("windowSkills")
			}
		},this)
		
		this.fButtonEquip.on("pointerdown",function(pointer){
			
			this.fButtonEquipState = !this.fButtonEquipState
			if(this.fButtonEquipState){
				this.scene.run("windowEquip")
			}else{
				this.scene.sleep("windowEquip")
			}
		},this)
		
		this.fButtonStatut.on("pointerdown",function(pointer){
			
			this.fButtonStatutState = !this.fButtonStatutState
			if(this.fButtonStatutState){
				this.scene.run("windowStatut")
			}else{
				this.scene.sleep("windowStatut")
			}
		},this)
		
		
		this.fGear.on("pointermove", function(pointer){
			this.setTint(0xff0000)
		})
		
		this.fGear.on("pointerout",function(pointer){
			this.setTint(0xffffff)
		})
		this.fGear.on("pointerdown",function(pointer){
			this.scene.run("gameMenuScreen",{state:true})
			this.scene.pause(this.game.currentMap)
			this.scene.pause("menu_hud")
		},this)
		
		this.events.on("resume",function(sys){
			sys.setActive(true)
			sys.setVisible(true)
		})
		
		this.events.on("pause",function(sys){
			sys.setActive(false)
			sys.setVisible(false)
		})
		
	}
	// Write your code here.

	update(){
		

		this.fHpText.text = "hp : " + this.game.hero.statuts.currentHp + "/" + this.game.hero.statuts.hp;


		
		this.fGoldText.text = this.game.gold +"G"
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

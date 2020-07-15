
// You can write more code here

/* START OF COMPILED CODE */

class screenCharacterChoice extends Phaser.Scene {
	
	constructor() {
	
		super("screenCharacterChoice");
		
	}
	
	_create() {
	
		var titleScreen_loadGame_blackScreen = this.add.image(0.0, 0.0, "titleScreen_loadGame_blackScreen");
		titleScreen_loadGame_blackScreen.setOrigin(0.0, 0.0);
		titleScreen_loadGame_blackScreen.setScale(1.0540057, 1.054046);
		
		this.add.image(1586.8978, 1587.7013, "titleScreen_loadGame_window");
		
		this.add.text(368.20453, 332.42032, "Create Character", {
    "fontSize": "260px",
    "color": "#000000",
    "stroke": "#000000"
});
		
		this.add.image(1858.1531, 1104.5011);
		
		var buttonArcher = this.add.uiButton(2612.4844, 1108.1846, "characterScreen_archer");
		
		var buttonMage = this.add.uiButton(708.92206, 1940.6407, "characterScreen_mage");
		
		var buttonPriest = this.add.uiButton(1659.248, 1940.6407, "characterScreen_priest");
		
		var buttonRogue = this.add.uiButton(1659.248, 1108.1846, "characterScreen_rogue");
		
		var buttonWarrior = this.add.uiButton(708.92206, 1108.1846, "characterScreen_warrior");
		
		var buttonCreate = this.add.uiButton(2630.5396, 2805.124, "button_empty");
		buttonCreate.setData("text", "create");
		
		var buttonPrecedent = this.add.uiButton(613.23474, 2805.124, "button_empty");
		buttonPrecedent.setData("text", "<=");
		
		this.fButtonArcher = buttonArcher;
		this.fButtonMage = buttonMage;
		this.fButtonPriest = buttonPriest;
		this.fButtonRogue = buttonRogue;
		this.fButtonWarrior = buttonWarrior;
		this.fButtonCreate = buttonCreate;
		this.fButtonPrecedent = buttonPrecedent;
		
	}
	
	
	
	
	
	
	
	
	/* START-USER-CODE */
	
	
	init(data){
		
		this.data.set("windowTarget",data.windowTarget)
		this.myData = data
	}
	
	create(){
		this._create();
		this.chooseClass = "Warrior";
		this.events.on("resume",function(sys,data){
			sys.data.set("windowTarget",data.windowTarget);
		})
		this.events.on("wake",function(sys,data){
			sys.data.set("windowTarget",data.windowTarget);
		})
		
		
		this.fButtonPrecedent.on("pointerdown",function(){
			this.scene.run(this.data.get("windowTarget"))
			this.scene.sleep("screenCharacterChoice");
			/*this.scene.setActive(false)
			this.scene.setVisible(false) */
		},this) 
		
		
		this.fButtonArcher.on("pointerdown",function(){
			this.chooseClass = "Archer";
		},this);
		this.fButtonMage.on("pointerdown",function(){
			this.chooseClass = "Mage";
		},this);
		this.fButtonPriest.on("pointerdown",function(){
			this.chooseClass = "Priest";
		},this);
		this.fButtonRogue.on("pointerdown",function(){
			this.chooseClass = "Rogue";
		},this);
		this.fButtonWarrior.on("pointerdown",function(){
			this.chooseClass = "Warrior";
		},this);
		
		this.fButtonCreate.on("pointerdown",function(){
			this.scene.sleep("screenCharacterChoice");
			this.scene.sleep("titleScreen");

			this.scene.run("BaseLoadAsset",{class:this.chooseClass,username:this.inputName_value});
		},this);
		this.inputName_value = "";
		var dom_inputName = this.add.dom(1100,2750).createFromCache("html_createCharacter_inputName").setOrigin(0);
		dom_inputName.addListener('input');
		dom_inputName.on("input",function(event){
			var inputNameEl = dom_inputName.getChildByName('username');
			this.scene.inputName_value = event.target.value;
			
		})
		
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

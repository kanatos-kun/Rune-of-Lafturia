
// You can write more code here

/* START OF COMPILED CODE */

class titleScreen extends Phaser.Scene {
	
	constructor() {
	
		super("titleScreen");
		
	}
	
	_create() {
	
		var titleScreen1 = this.add.image(1665.1359, 1548.7101, "titleScreen1");
		titleScreen1.setScale(1.029807, 1.027463);
		
		var buttonNewGame = this.add.uiButton(2401.0515, 1411.4105, "button_empty");
		buttonNewGame.setData("backgroundColor", 0xf2a82f);
		buttonNewGame.setData("backgroundColorHover", 0xb07b25);
		buttonNewGame.setData("text", "New Game");
		buttonNewGame.setData("textColor", "#ffffff");
		buttonNewGame.setData("textColorHover", "#cecece");
		buttonNewGame.setData("groupUI", "fTitleMenu");
		buttonNewGame.setScale(1.8232574, 1.121901);
		
		var buttonLoadGame = this.add.uiButton(2392.1, 1845.5798, "button_empty");
		buttonLoadGame.setData("backgroundColor", 0xf2a82f);
		buttonLoadGame.setData("textColorHover", "#cecece");
		buttonLoadGame.setData("backgroundColorHover", 0xb07b25);
		buttonLoadGame.setData("text", "Load Game");
		buttonLoadGame.setData("textColor", "#ffffff");
		buttonLoadGame.setData("groupUI", "fTitleMenu");
		buttonLoadGame.setScale(1.8232574, 1.121901);
		
		var buttonOptions = this.add.uiButton(2401.0518, 2266.321, "button_empty");
		buttonOptions.setData("backgroundColor", 0xf2a82f);
		buttonOptions.setData("backgroundColorHover", 0xb07b25);
		buttonOptions.setData("textColorHover", "#cecece");
		buttonOptions.setData("text", "Options");
		buttonOptions.setData("textColor", "#ffffff");
		buttonOptions.setData("groupUI", "fTitleMenu");
		buttonOptions.setScale(1.8232574, 1.121901);
		
		var buttonCredits = this.add.uiButton(2405.5273, 2696.0144, "button_empty");
		buttonCredits.setData("backgroundColor", 0xf2a82f);
		buttonCredits.setData("backgroundColorHover", 0xb07b25);
		buttonCredits.setData("textColorHover", "#cecece");
		buttonCredits.setData("text", "Credits");
		buttonCredits.setData("textColor", "#ffffff");
		buttonCredits.setData("groupUI", "fTitleMenu");
		buttonCredits.setScale(1.8232574, 1.121901);
		
		this.fTitleMenu = this.add.group([ buttonOptions, buttonCredits, buttonLoadGame, buttonNewGame ]);
		this.fTitleMenu_load = this.add.group([  ]);
		
		this.fButtonNewGame = buttonNewGame;
		this.fButtonLoadGame = buttonLoadGame;
		this.fButtonOptions = buttonOptions;
		this.fButtonCredits = buttonCredits;
		
	}
	
	
	
	
	
	
	
	/* START-USER-CODE */
	create(){
		this._create()
		this.state = "titleMenu"
		//titleMenu/newGame
		//titleMenu/loadGame
		//titleMenu/options
		//titleMenu/credits
		
		this.scene.run("loadGameScreen",{state:true,windowTarget:"titleScreen"})
		this.scene.run("optionScreen",{state:true,windowTarget:"titleScreen"})
		this.scene.run("creditScreen",{state:true,windowTarget:"titleScreen"})
		this.scene.run("saveGameScreen",{state:true,windowTarget:"gameMenuScreen"})
		this.scene.sleep("loadGameScreen")
		this.scene.sleep("optionScreen")
		this.scene.sleep("creditScreen")
		this.scene.sleep("saveGameScreen")
		
		
		this.fButtonNewGame.on("pointerdown",function(pointer){
			this.game.hero.currentHp = 12;
			this.game.hero.hp = 12;			
			this.game.gold = 0;
			this.scene.run("Map03",{x:1492,y:1628});
			this.scene.sleep("titleScreen")
			this.scene.sleep("loadGameScreen")
			this.scene.sleep("optionScreen")
			this.scene.sleep("creditScreen")
			this.scene.sleep("saveGameScreen")
		},this)		

		this.fButtonLoadGame.on("pointerdown",function(pointer){
			this.scene.run("loadGameScreen",{state:true,windowTarget:"titleScreen"})
			this.scene.pause("titleScreen")
			
		},this)
		

		this.fButtonOptions.on("pointerdown",function(pointer){
			this.scene.run("optionScreen",{state:true,windowTarget:"titleScreen"})
			this.scene.pause("titleScreen")
		},this)
		
		this.fButtonCredits.on("pointerdown",function(pointer){
			this.scene.run("creditScreen",{state:true,windowTarget:"titleScreen"})
			this.scene.pause("titleScreen")

		},this)
		
	}
	
	update(){
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

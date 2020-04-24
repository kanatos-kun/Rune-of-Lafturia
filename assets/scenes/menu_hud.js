
// You can write more code here

/* START OF COMPILED CODE */

class menu_hud extends Phaser.Scene {
	
	constructor() {
	
		super("menu_hud");
		
	}
	
	_create() {
	
		var goldText = this.add.text(78.627525, 257.8127, "X 0", {
    "fontSize": "54px",
    "color": "#000000",
    "fixedWidth": 210
});
		goldText.setScale(2.5662448, 2.9901435);
		goldText.setScrollFactor(0.0, 0.0);
		
		this.add.image(1638.3524, 3250.8884, "background_ui_bottom");
		
		this.add.image(1647.7489, 3270.8005, "skill_slot");
		
		var bag = this.add.image(250.4355, 3240.65, "bag");
		
		var gear = this.add.image(3137.3333, 122.15568, "gear");
		gear.setScale(3.5323193, 3.179084);
		
		this.fGoldText = goldText;
		this.fBag = bag;
		this.fGear = gear;
		
	}
	
	
	
	
	/* START-USER-CODE */

	create(){
		this._create()
		this.fBag.setInteractive()
		this.fGear.setInteractive()
		this.fBagState = false
		this.fGearState = false
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
		
		
		
		this.fGoldText.text = "X" + this.game.gold
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

class menu_hud extends Phaser.Scene {
	
	constructor() {
	
		super("menu_hud");
		
	}
	
	_create() {
	
		var gold_value_text = this.add.text(2790.931, 67.95386, "X 10", {
    "fontSize": "54px",
    "fixedWidth": 210
});
		gold_value_text.setScale(2.5662448, 2.9901435);
		gold_value_text.setScrollFactor(0.0, 0.0);
		
		this.add.image(190.15002, 153.28432, "full_Heart");
		
		this.add.image(493.38568, 158.09758, "full_Heart");
		
		this.add.image(815.8744, 167.72412, "empty_heart");
		
		this.add.image(809.2933, 167.9128, "heart_3-4");
		
		this.add.image(1631.2762, 3250.8884, "background_ui_bottom");
		
		this.add.image(1647.7489, 3270.8005, "skill_slot");
		
		var bag = this.add.image(250.4355, 3240.65, "bag");
		
		this.add.image(3129.5303, 1427.4373, "mana Bar");
		
		this.add.image(3132.451, 1439.2231, "fuel mana");
		
		this.add.image(2624.2095, 143.6174, "coin");
		
		this.fBag = bag;
		
	}
	
	
	/* START-USER-CODE */

	create(){
		this._create()
		this.fBag.setInteractive()
		this.fBagState = false
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
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

class windowShop extends Phaser.Scene {
	
	constructor() {
	
		super("windowShop");
		
	}
	
	_create() {
		
	
		
	}
		init(data){
		this.myData = data
	}
	/* START-USER-CODE */
	create(){
		this.html_shop = this.add.dom(0,700).createFromCache("html_shop").setOrigin(0);
				console.log("create shop window!");
					this.events.on("sleep",function(sys,data){
						this.html_shop.setVisible(false);
					},this);
					this.events.on("wake",function(sys,data){
						this.html_shop.setVisible(true);
						this.myData = data;
					},this);
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

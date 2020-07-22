
// You can write more code here

/* START OF COMPILED CODE */

class windowChoice extends Phaser.Scene {
	
	constructor() {
	
		super("windowChoice");
		
	}
	
	_create() {
	
		
	}
	
	/* START-USER-CODE */
		create(){
			
			this.html_choice = this.add.dom(1000,1900).createFromCache("html_choice").setOrigin(0);
			
			this.events.on("sleep",function(sys,data){
				this.html_choice.setVisible(false);
			},this);
			this.events.on("wake",function(sys,data){
				this.html_choice.setVisible(true);
				this.myData = data;
			},this);
			
			
			
			var choice1 = this.html_choice.getChildByName("choice1");
			choice1.textContent = "Fraise";
			choice1.classList.remove("hidden");
			var choice2 = this.html_choice.getChildByName("choice2");
			choice2.textContent = "Carrotte";
			var choice3 = this.html_choice.getChildByName("choice3");
			choice3.textContent = "Tomate";
			var choice4 = this.html_choice.getChildByName("choice4");
			choice4.textContent = "Patate";
		}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

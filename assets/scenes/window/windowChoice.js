
// You can write more code here

/* START OF COMPILED CODE */

class windowChoice extends Phaser.Scene {
	
	constructor() {
	
		super("windowChoice");
		
	}
	
	init(data){
		this.myData = data
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
				this.displayChoice();
			},this);
			
			
		}
	// Write your code here.
	displayChoice(){
			var choice1 = this.html_choice.getChildByName("choice1");
			choice1.textContent = this.myData.ch1;
			choice1.classList.remove("hidden");
			var choice2 = this.html_choice.getChildByName("choice2");
			choice2.textContent = this.myData.ch2;
			var choice3 = this.html_choice.getChildByName("choice3");
			choice3.textContent = this.myData.ch3;
			var choice4 = this.html_choice.getChildByName("choice4");
			choice4.textContent = this.myData.ch4;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

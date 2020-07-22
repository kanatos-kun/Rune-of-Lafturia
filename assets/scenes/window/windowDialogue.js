
// You can write more code here

/* START OF COMPILED CODE */

class windowDialogue extends Phaser.Scene {
	
	constructor() {
	
		super("dialogueWindow");
		
	}
	
	_create() {
	
		
	}
	
	/* START-USER-CODE */
	
	init(data){
		this.myData = data
	}
	
	create(){
		this._create();
		this.html_dialogue = this.add.dom(100,1600).createFromCache("html_dialogue").setOrigin(0);
		this.scene.run("windowChoice");
		this.events.on("sleep",function(sys,data){
			this.html_dialogue.setVisible(false);
			this.scene.sleep("windowChoice");
		},this);
		this.events.on("wake",function(sys,data){
			this.displayMessage();
			this.myData = data;
		},this);
		
		this.displayMessage();
	}
	
	
	displayMessage(){
		this.html_dialogue.setVisible(true);
			//this.fTag.setVisible(this.myData.tagName.isVisible)
			if(this.myData.tagName !== undefined){
				//show the tag ui
			}else{
				//not show the tag ui
			}
			//this.fTextBubble.setText(this.myData.text) 
			var textDialogue = this.html_dialogue.getChildByID("dialogue-text");
			textDialogue.textContent = this.myData.text;
			console.log("display msg!")
	}
	

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

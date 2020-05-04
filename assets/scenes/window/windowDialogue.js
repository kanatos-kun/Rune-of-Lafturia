
// You can write more code here

/* START OF COMPILED CODE */

class windowDialogue extends Phaser.Scene {
	
	constructor() {
	
		super("dialogueWindow");
		
	}
	
	_create() {
	
		var discussion_bubble = this.add.image(1639.0737, 2630.3953, "discussion_bubble");
		discussion_bubble.setScale(4.189914, 3.898078);
		
		var tag = this.add.image(488.19385, 2322.3882, "orange tag");
		tag.setScale(3.8287184, 5.6525326);
		
		var tagNameText = this.add.text(284.39786, 2263.4048, "Clara", {
    "fontSize": "150px",
    "color": "#400000",
    "stroke": "#400000"
});
		tagNameText.setAngle(-6.416661);
		
		var textBubble = this.add.text(478.80942, 2466.7122, "Bonjour jeune hero, pouvez vous \r\nm'aidez ?", {
    "fontSize": "120px",
    "color": "#400000"
});
		
		var arrow = this.add.image(2854.8948, 2853.3696, "arrow");
		arrow.setScale(2.8402956, 2.3649132);
		arrow.setAngle(91.636765);
		
		this.fTag = tag;
		this.fTagNameText = tagNameText;
		this.fTextBubble = textBubble;
		
	}
	
	

	
	/* START-USER-CODE */
	
	init(data){
		this.myData = data
	}
	
	create(){
		this._create()



		if(this.myData.state){
			this.scene.setActive(true)
			this.scene.setVisible(true)
     
			//this.fTag.setVisible(this.myData.tagName.isVisible)
			if(this.myData.tagName !== undefined){
				this.fTagNameText.setText(this.myData.tagName)
				this.fTag.setVisible(true)
			}else{
				this.fTag.setVisible(false)
				this.fTagNameText.setVisible(false)
			}
			
		/*	if(this.fTag.visible){
				
			}else{
				this.fTagNameText.setText("")
			} */
			this.fTextBubble.setText(this.myData.text) 
			
			
		}else{
			this.scene.setActive(false)
			this.scene.setVisible(false)
		}
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

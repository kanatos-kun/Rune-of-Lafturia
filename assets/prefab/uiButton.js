class UiButton extends Phaser.GameObjects.Image {

	/**
	 * UiButton
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param texture
	 * @param frame
	 */
	constructor(scene, x, y,texture) {
		super(scene, x, y, texture);

		this.setTintFill(this.getData("backgroundColor"))

		this.on("pointermove",function(){

			if(this.getData("isActive") === true){
				
			}else{
				this.setTint((typeof this.getData("backgroundColorHover") == "number")? this.getData("backgroundColorHover"): 0xcecece)
				this.text.setColor((typeof this.getData("textColorHover") == "string")? this.getData("textColorHover"): "#999999")
			}
			
		})
		
	    this.on("pointerout",function(){
			if(this.getData("isActive") === true){
				
			}else{
				this.setTint((typeof this.getData("backgroundColor") == "number")? this.getData("backgroundColor"): 0xffffff )
				this.text.setColor((typeof this.getData("textColor") == "string")? this.getData("textColor"): "#000000")
			}

		})
		
		//lorsue la scene se creer
		scene.events.on("create",function(){
			this.setTint(this.getData("backgroundColor") )
			this.setInteractive()
			
			this.text = scene.add.text(x,y,this.getData("text"),{fontFamily:"Courier",
			fontSize: (typeof this.getData("textSize") == "number")? this.getData("textSize")+"px": "180px",
			color: (typeof this.getData("textColor") == "string")? this.getData("textColor"): "#000000",
			align: "center"
			})
			this.text.setOrigin(0.5)
			
			if(this.getData("groupUI") !== undefined){
				this.scene[this.getData("groupUI")].add(this.text)
			}
			
		},this)
	}
	
	preUpdate(time,delta){
		
	}

}

Phaser.GameObjects.GameObjectFactory.register("uiButton", function (x, y,texture) {
	
	var sprite = new UiButton(this.scene, x, y,texture);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
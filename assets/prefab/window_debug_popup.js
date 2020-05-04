class Window_debug_popup extends Phaser.GameObjects.Text {

	/**
	 * Window_debug_popup
	 *
	 * @param {Phaser.Scene} scene
	 * @param {Phaser.GameObjects.GameObjectFactory} target 
	 * @param {string} text
	 */
	constructor(scene, target, text) {
		super(scene, target.x-70, target.y-100, text, {color:"#ffffff",backgroundColor:"#000000",fontSize:"46px"});
		this.target = target;
		this.setDepth(999)
	}
	
	preUpdate(time,delta){
		this.setPosition(this.target.x-70,this.target.y-100)
		if(this.target.scene === undefined){
			this.destroy()
		}
	}

}

Phaser.GameObjects.GameObjectFactory.register("window_debug_popup", function (target, text) {
	
	var text = new Window_debug_popup(this.scene,target, text);

	this.scene.sys.displayList.add(text);
	this.scene.sys.updateList.add(text);

	return text;
});
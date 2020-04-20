class Window_debug_popup extends Phaser.GameObjects.Text {

	/**
	 * Window_debug_popup
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param text
	 */
	constructor(scene, target, text) {
		super(scene, target.x, target.y-40, text, {color:"#ffffff",backgroundColor:"#000000",fontSize:"46px"});
		this.target = target;
		this.setDepth(999)
	}
	
	preUpdate(time,delta){
		this.setPosition(this.target.x,this.target.y-40)
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
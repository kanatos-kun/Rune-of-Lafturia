class Npc extends Phaser.GameObjects.Sprite {

	/**
	 * Villager_01
	 *
	 * @param {Phaser.Scene} scene
	 * @param {number} x 
	 * @param {number} y 
	 */
	constructor(scene, x, y) {
		super(scene, x, y,"villager_01");
		
		if(this.scene.game.config.physics.arcade.debug){
		this.detectionZone_debug =scene.add.detectionZone(this,700) //new DetectionZone(this.scene,this,700)
		//this.scene.add.existing(this.detectionZone_debug)
		}

		this.isDetectedHero = false
		this.scene.events.on("endSceneManager",function(){
			this.eventPage = this.scene.cache.json.get( this.getData("eventPage") )
		},this)
	}
	
	preUpdate(time,delta){
		super.preUpdate(time,delta)
	}
	
	retrieveTask(){
		if(this.eventPage !== undefined){
			//do something
			//console.log(this.eventPage)
			for(let i = 0; i < this.eventPage.page.Length;i++){
	            let page = this.eventPage.page[i]
	            if(this.scene.game.globalSwitchId === page.globalSwitchId &&
				   this.scene.game.globalSwitchId === true){
	                        this.eventPage.currentPageEvent_id = i
	            }
			}
			let pageId = this.eventPage.currentEventPage_id
			let taskId= this.eventPage.page[pageId].currentTask_id;
			let task =	this.eventPage.page[pageId].task[taskId];
			return task
		}
	}
	
	incTaskId(){
			let pageId = this.eventPage.currentEventPage_id
			this.eventPage.page[pageId].currentTask_id ++;
	}
	
	resetTaskId(){
			let pageId = this.eventPage.currentEventPage_id
				this.eventPage.page[pageId].currentTask_id = 0
	}
	
	getTaskId(){
		let pageId = this.eventPage.currentEventPage_id
		return this.eventPage.page[pageId].currentTask_id
	}
	
	getLengthTask(){
			let pageId = this.eventPage.currentEventPage_id
			let task_length =  this.eventPage.page[pageId].task.length
			return task_length;
	}

}

Phaser.GameObjects.GameObjectFactory.register("npc", function (x, y) {
	
	var sprite = new Npc(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
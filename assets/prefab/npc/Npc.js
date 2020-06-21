class Npc extends Phaser.GameObjects.Sprite {

	/**
	 * Villager_01
	 *
	 * @param {Phaser.Scene} scene
	 * @param {number} x 
	 * @param {number} y 
	 */
	constructor(scene, x, y) {
		super(scene, x, y,"npc_01");
		
		if(this.scene.game.config.physics.arcade.debug){
		this.detectionZone_debug =scene.add.detectionZone(this,700) //new DetectionZone(this.scene,this,700)
		//this.scene.add.existing(this.detectionZone_debug)
		}

		this.isDetectedHero = false
		this.scene.events.on("endSceneManager",function(sys){
			this.eventPage = {currentEventPage_id : 0};
			this.eventPage.page = sys.cache.json.get( this.getData("eventName")+"_page_"+scene.scene.key.toLowerCase() ).page;
			this.eventPage.task = sys.cache.json.get( this.getData("eventName")+"_task_"+scene.scene.key.toLowerCase() ).task;
			console.log(this.eventPage)
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
			let pageId = this.eventPage.currentEventPage_id;
			let page = this.eventPage.page[pageId];
			let taskId= this.eventPage.page[pageId].currentTask_id;
			let task =	this.eventPage.task[taskId];

			return [task,page]
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
	
	getCurrentTaskIterator(){
		let pageId = this.eventPage.currentEventPage_id;
		
		return this.eventPage.page[pageId].currentTask_id;
	}
	
	getTaskId(){
		let pageId = this.eventPage.currentEventPage_id;
		
		return this.eventPage.page[pageId].task;
	}
	
	isSameTaskId(){
		let pageId = this.eventPage.currentEventPage_id;
		let taskId_1 = this.eventPage.page[pageId].task;
		let CurrentTaskIterator = this.eventPage.page[pageId].currentTask_id;
		let taskId_2 = this.eventPage.task[CurrentTaskIterator].taskId;
		console.log(taskId_1);
		console.log(taskId_2);
		if(taskId_1 == taskId_2){
			return true;
		}else{
			return false;
		}
	}
	
	getLengthTask(){
		
			let pageId = this.eventPage.currentEventPage_id;
			let task_length =  this.eventPage.task.length;
			return task_length;
	}

}

Phaser.GameObjects.GameObjectFactory.register("npc", function (x, y) {
	
	var sprite = new Npc(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
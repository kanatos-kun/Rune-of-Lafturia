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
			var eventPage = sys.cache.json.get( "NPCdial_eventPage" );
			this.eventPage = {id : 0};
			this.eventPage.page = eventPage["npc_"+scene.scene.key.toLowerCase()+"_"+this.getData("eventName")];
			/*
			this.eventPage.page = sys.cache.json.get( this.getData("eventName")+"_page_"+scene.scene.key.toLowerCase() ).page;
			this.eventPage.task = sys.cache.json.get( this.getData("eventName")+"_task_"+scene.scene.key.toLowerCase() ).task;
			*/
			// 1) retrieve the type of the dialogue
			// 2) retrive the id of the dialogueType
			// 3) search in the 'sys.cache.json.get('NPCdial_'+dialogueType)' the corresponding id ('dialogueType_id')
			// 4) retrieve the information of the dialogueType
			// x) increment the global id
			console.log(this.eventPage.page[this.eventPage.id].type)
			console.log(this.eventPage.page)
		},this)
	}
	
	preUpdate(time,delta){
		super.preUpdate(time,delta)
	}
	
	// 1) retrieve the type of the dialogue
	// 2) retrive the id of the dialogueType
	// 3) search in the 'sys.cache.json.get('NPCdial_'+dialogueType)' the corresponding id ('dialogueType_id')
	//		3.1) check what type of dialogue it is
	//		3.2) if dialogueType === goto => change global ID eventPage 
	//		3.2) if dialogueType === end => reset global ID eventPage 
	// 4) retrieve the information of the dialogueType
	// x) increment the global id
	getTypeDialogue(){
		var type = this.eventPage.page[this.eventPage.id].type;
		var idType = this.eventPage.page[this.eventPage.id].idType -1;
		
		if(type == "dialogue"){
			// do dialogue things ...
			var typeDialogue = this.scene.sys.cache.json.get('NPCdial_'+type)[idType];
			this.eventPage.id ++;
			typeDialogue.type = type;
			return typeDialogue ;
		}else if(type =="choice"){
			var typeDialogue = this.scene.sys.cache.json.get('NPCdial_'+type)[idType];
			this.eventPage.id ++;
			typeDialogue.type = type;
			return typeDialogue ;
			// do choice things ...
		}else if(type =="shop"){
			// do shop things...
		}else if(type=="goto"){
			this.eventPage.id = idType;
			//var typeDialogue = this.scene.sys.cache.json.get('NPCdial_'+type)[idType];
			//this.eventPage.id = typeDialogue.idType;
			return this.getTypeDialogue();
			// do goto things..
		}else if(type=="end"){

			var i = this.eventPage.id;
			this.eventPage.id = 0;
			return this.eventPage.page[i];
			//do end things...
		}else{
			return;
		}
		

	}
	
	incEventPageId(){
		this.eventPage.id++;
	}
	
	resetEventPageId(){
		this.eventPage.id = 0;
	}
	
	gotoEventPageId(id){
		this.eventPage.id = id;
	}
	
	/*
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
	*/

}

Phaser.GameObjects.GameObjectFactory.register("npc", function (x, y) {
	
	var sprite = new Npc(this.scene, x, y);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
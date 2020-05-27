
// You can write more code here

/* START OF COMPILED CODE */

class windowInventory extends Phaser.Scene {
	
	constructor() {
	
		super("windowInventory");
		
	}
	
	_create() {
	
		var window_inventory = this.add.image(1488.6735, 1599.0881, "window_inventory");
		
		this.fWindow_inventory = window_inventory;
		
	}
	
	
	/* START-USER-CODE */
	create(){

		this._create()
		
		
		this.miscGroup = this.add.group()
		this.miscTextGroup = this.add.group()
		
		this.fWindow_inventory.setInteractive()
		this.input.setDraggable(this.fWindow_inventory)
		
		this.events.on("wake",function(sys,data){
			
			var check = false

			//this.miscGroup.clear(this,true)
			
			//check if inventory is already in
			for(let i =0;i < sys.game.hero.inventory.misc.length;i++){
				for(let y=0; y < sys.scene.miscGroup.getChildren().length;y++){
					let miscNameWindow = sys.scene.miscGroup.getChildren()[y].name
					let miscNameGame = sys.game.hero.inventory.misc[i].name
					if(miscNameWindow ==miscNameGame){
						check = true
						break;
					}
				}
				
				if(!check){
					console.log("create a new sting!")
					let a =sys.scene.add.image(0,0,"sting")
					let text = sys.scene.add.text(0,0,sys.game.hero.inventory.misc[i].quantity,{
						fontSize:"100px",
						color:"#ffffff"
					})
					text.name = "text"
					text.setData("id",i)
					a.name = "sting"
					sys.scene.miscGroup.add(a);
					sys.scene.miscTextGroup.add(text);
					//break;
				}
			}
  			
			let x =sys.scene.fWindow_inventory.x - 500
			let y =sys.scene.fWindow_inventory.y -130
			Phaser.Actions.GridAlign(sys.scene.miscGroup.getChildren(), {
		        width: 6,
		        height: 4,
		        cellWidth: 200,
		        cellHeight: 158,
				x:x,
				y:y
			})
			Phaser.Actions.GridAlign(sys.scene.miscTextGroup.getChildren(), {
		        width: 6,
		        height: 4,
		        cellWidth: 200,
		        cellHeight: 158,
				x:x,
				y:y
			})
			
		})
		
		this.fWindow_inventory.on("dragstart",function(pointer,dragX,dragY){
		this.scene.scene.get(this.scene.game.currentMap).isInWindowInteraction = true
		this.scene.scene.bringToTop()
		})

		this.fWindow_inventory.on("drag",function(pointer,dragX,dragY){
			this.x = dragX
			this.y = dragY
			Phaser.Actions.GridAlign(this.scene.miscGroup.getChildren(), {
		        width: 6,
		        height: 4,
		        cellWidth: 200,
		        cellHeight: 158,
				x:dragX- 500,
				y:dragY -130
			})
			Phaser.Actions.GridAlign(this.scene.miscTextGroup.getChildren(), {
		        width: 6,
		        height: 4,
		        cellWidth: 200,
		        cellHeight: 158,
				x:dragX- 500,
				y:dragY -130
			})
			
		})
		
		this.fWindow_inventory.on("dragend",function(pointer,dragX,dragY){
		this.scene.scene.get(this.scene.game.currentMap).isInWindowInteraction = false
		})
	}
	// Write your code here.
	update(){
		for(let i = 0; i < this.miscTextGroup.getLength();i++){
			let a = this.miscTextGroup.getChildren()[i];
			let id = a.getData("id")
			a.setText(this.game.hero.inventory.misc[id].quantity)
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

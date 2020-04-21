
// You can write more code here

/* START OF COMPILED CODE */

class menu_bag extends Phaser.Scene {
	
	constructor() {
	
		super("menu_bag");
		
	}
	
	_create() {
		var window = this.add.image(1719.904, 1604.6774, "window");
		window.setScale(2.9860482, 2.8257582);
		
		var right_arrow = this.add.image(2917.163, 1585.7952, "arrow");
		right_arrow.setScale(3.6418853, 23.94146);
		
		var left_arrow = this.add.image(318.18958, 1549.2274, "arrow");
		left_arrow.setScale(3.6418853, 23.94146);
		left_arrow.flipX = true;
		
		var status = this.add.image(1670.7399, 1696.8306, "status");
		status.setScale(2.916259, 2.8214219);
		
		var equipment = this.add.image(-2878.672, 512.51904, "equipment");
		equipment.setOrigin(0.0, 0.0);
		equipment.setScale(2.7712405, 2.6580675);
		
		var equipment_01 = this.add.image(-1573.1981, 1800.2789, "equipment_01");
		equipment_01.setScale(2.5154593, 2.4395545);
		
		this.add.image(268.43018, 1568.593);
		
		var obj_important = this.add.image(-5358.5283, 402.49564, "obj_important");
		obj_important.setOrigin(0.0, 0.0);
		obj_important.setScale(2.8200846, 2.5642383);
		
		this.fRight_arrow = right_arrow;
		this.fLeft_arrow = left_arrow;
		this.fStatus = status;
		this.fEquipment = equipment;
		this.fEquipment_01 = equipment_01;
		this.fObj_important = obj_important;
		
	}
	
	
	
	
	
	
	
	/* START-USER-CODE */

	init(data){
		this.myData = data
	}
	create(){
		this._create()
		this.menuIteration = 0
		this.fRight_arrow.setInteractive();
		this.fLeft_arrow.setInteractive();
		this.fRight_arrow.on('pointermove' ,function(pointer){
			this.setTintFill(0xffffff)

		})
		this.fRight_arrow.on('pointerdown' ,function(pointer){
			//console.log("click on right arrow")
			this.menuIteration +=1
			switch(this.menuIteration){
				case 0:
				// Status
				this.fEquipment.setPosition(5000,5000)
				this.fEquipment_01.setPosition(5000,5000)
				this.fStatus.setPosition(1719,1604)
				break;
				case 1:
				// equipment important
				this.fObj_important.setPosition(422,343)
				this.fStatus.setPosition(5000,5000)
				break;
				case 2:
				//equipment
				this.fObj_important.setPosition(5000,5000)
				this.fEquipment.setPosition(393,292)
				this.fEquipment_01.setPosition(1656,1723)
				break;
				default:
				this.menuIteration = 0
				this.fEquipment.setPosition(5000,5000)
				this.fEquipment_01.setPosition(5000,5000)
				this.fStatus.setPosition(1719,1604)
				break;
				
			}
			
		},this)
		this.fRight_arrow.on('pointerout' ,function(pointer){
			this.setTint(0xffffff)
		})	
		
		
		this.fLeft_arrow.on('pointermove' ,function(pointer){
			this.setTintFill(0xffffff)
		})
		this.fLeft_arrow.on('pointerdown' ,function(pointer){
			//console.log("click on left arrow")
		})
		this.fLeft_arrow.on('pointerout' ,function(pointer){
			this.setTint(0xffffff)
		})	
		this.fLeft_arrow.on('pointerdown' ,function(pointer){
			//console.log("click on right arrow")
			this.menuIteration -=1
			switch(this.menuIteration){
				case 0:
				// Status
				this.fObj_important.setPosition(5000,5000)
				this.fStatus.setPosition(1719,1604)
				break;
				case 1:
				// equipment important
				this.fObj_important.setPosition(422,343)
				this.fEquipment.setPosition(5000,5000)
				this.fEquipment_01.setPosition(5000,5000)
				break;
				case 2:
				//equipment
				this.fStatus.setPosition(5000,5000)
				this.fEquipment.setPosition(393,292)
				this.fEquipment_01.setPosition(1656,1723)
				break;
				default:
				this.menuIteration = 2
				this.fEquipment.setPosition(393,292)
				this.fEquipment_01.setPosition(1656,1723)
				this.fStatus.setPosition(5000,5000)
				break;
				
			}
			
		},this)
		
		if(this.myData.state){
			this.scene.setActive(true)
			this.scene.setVisible(true)
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

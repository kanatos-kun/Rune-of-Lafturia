class Hero extends Phaser.Physics.Arcade.Sprite {

	/**
	 * Hero
	 *
	 * @param {Phaser.Scene} scene
	 * @param {number} x 
	 * @param {number} y 
	 */
	constructor(scene, x, y) {
		super(scene, x, y, "hero_"+scene.game.hero.class);
		scene.physics.add.existing(this)
		this.type = "hero";
		this.state ="idle";
		this.setCollideWorldBounds(true);
		this.timeAttack={
			c:0,t:5,state:true
		}

		this.hp = scene.game.hero.statuts.hp;
		this.currentHp=scene.game.hero.statuts.currentHp;
		this.statuts = {
			hp:scene.game.hero.statuts.hp,
			currentHp: scene.game.hero.statuts.currentHp,
			movementSpd:200
		}
		this.invincible = {
			state: false,
			c:0,
			t:5
		}
		this.stateVar = {
			get_hit:{x:0,y:0,pX:800,pY:800,c:0,t:1}
		}
		this.armature = this.scene.add.armature("anims_char_hero02","anims_char_hero02");
		this.setAlpha(0);
		this.armature.animation.play("idle");
		this.armature.animation.timeScale=0.5;
		this.pathfinding={
			goal:{x:0,y:0},
			closedList:[],
			openList:[],
			startMove:false
		};
		
		this.body.setBounce(1);
		this.body.setSize(100,100);
		if(this.scene.game.debug.information){
		this.popup_debug = scene.add.window_debug_popup(this,"hp:" + this.currentHp + "/" + this.hp)//new Window_debug_popup(this.scene,this,"hp:" + this.currentHp + "/" + this.hp)
		
		//this.scene.add.existing(this.popup_debug)
		}
		
		this.scene.events.on("endSceneManager",function(sys){
			this.stats = scene.game.hero.statuts;
		},this)
		
		
	}
	
	preUpdate(time,delta){
		super.preUpdate(time,delta);
		this.stateManager(delta);
		this.armature.x = this.x;
		this.armature.y = this.y +70;
	    this.armature.setDepth( Phaser.Math.FloorTo((this.y-400)/256));
		if(this.armature.animation._animationConfig.animation !== this.state){
			this.armature.animation.play(this.state);
		}
		
		if(this.scene.game.debug.information){
			    let xGrid = Phaser.Math.FloorTo(this.x/256);
				let yGrid = Phaser.Math.FloorTo(this.y/256);
				this.popup_debug.setText("hp:" + this.currentHp + 
										 "/" + this.hp +
										 "\ngold:" + this.scene.game.hero.gold +
									     "\nx:" + this.x+"/"+xGrid +
				                         "\ny:"+this.y+"/"+yGrid);
		}
		if(this.invincible.state){

			if(this.invincible.c > this.invincible.t){
				this.invincible.state = false;
				this.setTint(0xffffff);
				this.invincible.c = 0;
				this.state = "idle";
			}else{
			    this.invincible.c += delta/100;
			}
		}
		
		
		if(!this.timeAttack.state){

			if(this.timeAttack.c > this.timeAttack.t){
				this.timeAttack.state = true;
				this.timeAttack.c = 0;
			}else{
				this.timeAttack.c += delta/100;
			}
		}
		
		
	    let xGrid = Phaser.Math.FloorTo(this.x/256);
		let yGrid = Phaser.Math.FloorTo(this.y/256);
		
		if(xGrid ==this.pathfinding.goal.x && yGrid==this.pathfinding.goal.y){
			this.pathfinding.startMove =false;
			this.state = "idle";
		}else if(this.pathfinding.startMove){
			this.state = "walk";
		}
		
		
	}
	
	stateManager(delta){
		if(this.state =="get_hit"){
			if(this.stateVar.get_hit.c > this.stateVar.get_hit.t){
				this.state="idle"
				this.body.setVelocity(0,0)
				this.stateVar.get_hit.c = 0
			}else{
				this.body.setVelocity(this.stateVar.get_hit.pX * this.stateVar.get_hit.x,this.stateVar.get_hit.pY * this.stateVar.get_hit.y)
				this.stateVar.get_hit.c += delta/100
			}
		}
	}
	
	initPathFinding(){
		
		var node = this.pathfinding.closedList[0];
		let step = node.step;
		let pos = [];
		pos.push({x:node.x*256+128,y:node.y*256+128});
		this.path = new Phaser.Curves.Path(node.x*256+128,node.y*256+128);
		do{
			node = node.prevNode;
			let x =node.x*256 +128 ;
			let y =node.y*256+128;
			this.path.lineTo(x,y);
			pos.push({x:x,y:y});
		}while(node.step != 0)
		pos.reverse();
		pos.shift();
		let config= {
			targets: this,
			ease: 'Linear',
			duration: this.statuts.movementSpd,
			tweens:pos
		}
		
		let xGrid = Phaser.Math.FloorTo(this.x/256);
		if(xGrid > this.pathfinding.goal.x){
			this.armature.armature._flipX = true;
		}else{
			this.armature.armature._flipX = false;
		}
		this.scene.tweens.timeline(config);
		this.pathfinding.startMove = true;
		
		
	}
	
	drawPathFinding(){
		if(this.path !== undefined && this.scene.game.debug.pathfinding){
		    this.scene.sceneGfx.clear();
		    this.scene.sceneGfx.lineStyle(20, 0xffffff, 1);
			this.path.draw(this.scene.sceneGfx);
		}
	}


}

Phaser.GameObjects.GameObjectFactory.register("hero", function (x, y) {
	
	var sprite = new Hero(this.scene, x, y);
	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
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
		this.invincible = {
			state: false,
			c:0,
			t:5
		}
		this.stateVar = {
			get_hit:{x:0,y:0,pX:800,pY:800,c:0,t:1}
		}
		this.body.setBounce(1)
		this.body.setSize(100,100)
		if(this.scene.game.config.physics.arcade.debug){
		this.popup_debug = scene.add.window_debug_popup(this,"hp:" + this.currentHp + "/" + this.hp)//new Window_debug_popup(this.scene,this,"hp:" + this.currentHp + "/" + this.hp)
		//this.scene.add.existing(this.popup_debug)
		}
		
		this.scene.events.on("endSceneManager",function(sys){
			this.stats = scene.game.hero.statuts;
		},this)
		
		
	}
	
	preUpdate(time,delta){
		super.preUpdate(time,delta)
		this.stateManager(delta)
		
		
		if(this.scene.game.config.physics.arcade.debug){
				this.popup_debug.setText("hp:" + this.currentHp + "/" + this.hp +"\ngold:" + this.scene.game.gold +"\nx:" + this.x +"\ny:"+this.y)
		}
		if(this.invincible.state){

			if(this.invincible.c > this.invincible.t){
				this.invincible.state = false
				this.setTint(0xffffff)
				this.invincible.c = 0
				this.state = "idle"
			}else{
			    this.invincible.c += delta/100
			}
		}
		
		
		if(!this.timeAttack.state){

			if(this.timeAttack.c > this.timeAttack.t){
				this.timeAttack.state = true
				this.timeAttack.c = 0
			}else{
				this.timeAttack.c += delta/100
			}
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

}

Phaser.GameObjects.GameObjectFactory.register("hero", function (x, y) {
	
	var sprite = new Hero(this.scene, x, y);
	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
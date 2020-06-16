/**
 *
 */
class SpawnMob extends Phaser.GameObjects.Group {
	
	constructor(scene,spawner) {
				super(scene)
				let e = spawner.properties[1].value.match(/\w([A-Za-z-\s])+/g);
				e.map((v,i)=>{
					e[i]=v.trim()
				})
				spawner.properties[1].value = e;
				this.height = spawner.height;
				this.width = spawner.width;
				this.name = spawner.name;
				this.x = spawner.x;
				this.y = spawner.y;
				this.properties = spawner.properties;
				this.counter = 0;
				while(this.getChildren().length < this.properties[0].value){
					let rngMob = Phaser.Math.RND.integerInRange(0,this.properties[1].value.length - 1);
					let mobName = this.properties[1].value[rngMob];
					let posX = Phaser.Math.RND.integerInRange(this.x,this.x + this.width);
					let posY = Phaser.Math.RND.integerInRange(this.y,this.y + this.height);
					let mob = scene.add["enemy_"+mobName](posX,posY);
					this.add(mob)
				}
	}
	
	preUpdate(time, delta){
	}
	
}

Phaser.GameObjects.GameObjectFactory.register("spawnMob", function (spawner) {
	
	var mySpawner = new SpawnMob(this.scene, spawner);
	this.scene.sys.updateList.add(mySpawner);

	return mySpawner;
});


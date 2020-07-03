
// You can write more code here

/* START OF COMPILED CODE */

class BaseLoadAsset extends Phaser.Scene {
	
	constructor() {
	
		super("BaseLoadAsset");
		
	}
	
	preload() {
		
	    var progress = this.add.graphics();
		this.add.image(1650,2800,"UI_BARFRAME").setScale(2);
		var colorBar = this.add.image(1650,2800,"UI_COLORBAR (2)").setScale(2);
		var texLoad = this.add.text(550,2900,"file currently loading",{
			fontSize:"80px",
			color:"#ffff00"
		})
		this.add.image(1650,2800,"UI_BARMARKINGS").setScale(2)
	    this.load.on('progress', function (value) {
			colorBar.setCrop(0,0,1105*value,380)
	    });
	
	    this.load.on('complete', function () {
	        progress.destroy();
	    });

		this.load.on('filecomplete',function(key,type){
			texLoad.setText(type+"/"+key);
		})
		
		
		this.load.pack("basePack", "assets/basePack.json");
		
	}
  
	
	/* START-USER-CODE */
 init(data){
		this.data.set("class",data.class)
		this.myData = data
	}
	create() {
		//this.scene.sleep("BaseLoadAsset")
		
		this.events.on("resume",function(sys,data){
			this.data.set("class",data.class)
		});
		this.events.on("wake",function(sys,data){
			this.data.set("class",data.class)
		});
		if(this.data.get("class")!== undefined){
			
			var classHero = this.sys.cache.json.get("hero"+this.data.get("class") );
			//add class
			this.game.hero.class = classHero.class[0];
			
			//add stats
			this.game.hero.statuts.exp = classHero.experience[0];
			this.game.hero.statuts.hp = classHero.hp[0];			
			this.game.hero.statuts.currentHp = classHero.hp[0];
			this.game.hero.statuts.mp = classHero.mp[0];			
			this.game.hero.statuts.currentMp = classHero.mp[0];	
			this.game.hero.statuts.strPermBonus = classHero.str[0];		
			this.game.hero.statuts.str = this.game.hero.statuts.str + this.game.hero.statuts.strPermBonus;		
			this.game.hero.statuts.vitPermBonus = classHero.vit[0];		
			this.game.hero.statuts.vit = this.game.hero.statuts.vit + this.game.hero.statuts.vitPermBonus;		
			this.game.hero.statuts.intPermBonus = classHero.int[0];		
			this.game.hero.statuts.int = this.game.hero.statuts.int + this.game.hero.statuts.intPermBonus;		
			this.game.hero.statuts.dexPermBonus = classHero.dex[0];		
			this.game.hero.statuts.dex = this.game.hero.statuts.dex + this.game.hero.statuts.dexPermBonus;		
			this.game.hero.statuts.agiPermBonus = classHero.agi[0];		
			this.game.hero.statuts.agi = this.game.hero.statuts.agi + this.game.hero.statuts.agiPermBonus;		
		}
		this.scene.run("menu_hud")
		//this.scene.run("windowInventory")
		this.scene.bringToTop("menu_hud")
		if(this.game.loading["loadZone_"+this.game.loadZone]===false){
			this.scene.run("LoadZoneAssets",{packName :"packZone-"+this.game.loadZone,packId: this.game.loadZone})
			this.scene.bringToTop("LoadZoneAssets");
		}
		
		this.game.loading.basePack = true;
		this.scene.stop("BaseLoadAsset");
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

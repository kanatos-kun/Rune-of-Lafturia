
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
		this.data.set("class",data.class);
		this.data.set("username",data.username);
		this.myData = data
	}
	create() {
		//this.scene.sleep("BaseLoadAsset")
		
		this.events.on("resume",function(sys,data){
			this.data.set("class",data.class);
			this.data.set("username",data.username);
		});
		this.events.on("wake",function(sys,data){
			this.data.set("class",data.class);
			this.data.set("username",data.username);
		});
		if(this.data.get("class")!== undefined){
			
			var classHero = this.sys.cache.json.get("hero"+this.data.get("class") );
			//add class
			this.game.hero.class = classHero.class[0];
			
			
			if(this.data.get("username") === ""){
				this.game.hero.name = classHero.name[0];
			}else{
				this.game.hero.name = this.data.get("username");
			}
			
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
			
			if(this.game.loadZone==1){
			this.scene.run("LoadZoneAssets_1",{packName :"packZone-"+this.game.loadZone,packId: this.game.loadZone})
			this.scene.bringToTop("LoadZoneAssets_1");
			}else{
			this.scene.run("LoadZoneAssets_"+this.game.loadZone,{packName :"packZone-"+this.game.loadZone,packId: this.game.loadZone})
			this.scene.bringToTop("LoadZoneAssets"+this.game.loadZone);
			}

		}
		this.game.loading.basePack = true;
		this.scene.run("windowShop");
		this.scene.sleep("windowShop");
		this.scene.run("dialogueWindow");
		this.scene.sleep("dialogueWindow");
		this.scene.run("windowChoice");
		this.scene.sleep("windowChoice");
		this.scene.stop("BaseLoadAsset");
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

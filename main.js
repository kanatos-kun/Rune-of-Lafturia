
window.addEventListener('load', function() {

	var game = new Phaser.Game({
    "title": "rune-of-lafturia",
    "width": 3316,
    "height": 3460,
    "type": Phaser.AUTO,
    "backgroundColor": "#000000",
    "disableContextMenu":true,
    "parent": "game-container",
	"version":"v0.2.0-alpha-release",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    "scale": {
        "mode": Phaser.Scale.FIT,
        "autoCenter": Phaser.Scale.CENTER_BOTH
    }
	});
	game.scene.add("Boot", Boot, false);
	game.scene.add("LoadBoot", LoadBoot, true);
	
});

class LoadBoot extends Phaser.Scene{
	preload(){
		this.load.pack("loadPack", "assets/loadPack.json");
	}
	
	create(){
		this.scene.start("Boot")
	}
}

class Boot extends Phaser.Scene {

	preload() {
		
	    var progress = this.add.graphics();
		this.add.image(1650,2800,"UI_BARFRAME").setScale(2);
		var colorBar = this.add.image(1650,2800,"UI_COLORBAR (2)").setScale(2);
		var texLoad = this.add.text(550,2900,"file currently loading",{
			fontSize:"80px",
			color:"#ffff00"
		})
		var barMarking = this.add.image(1650,2800,"UI_BARMARKINGS").setScale(2)
	    this.load.on('progress', function (value) {
			colorBar.setCrop(0,0,1105*value,380)
	    });
	
	    this.load.on('complete', function () {
	        progress.destroy();
	    });

		this.load.on('filecomplete',function(key,type){
			texLoad.setText(type+"/"+key);
		})
		
		
		this.load.pack("pack", "assets/pack.json");
	    this.load.scenePlugin({
	        key: 'UtilsPlugin',
	        url: 'assets/plugins/UtilsPlugin.js',
	        sceneKey: 'utils'
	    });
	}

	create() {
		/** @global 
		 *  @property {string} gold 
		*/
		this.game.gold = 0;
		/** @global 
		 *  @property {Object} hero
		 *  @property {number} hero.currentHp 
		 *  @property {number} hero.hp 
		*/
		this.game.hero = {
			//currentHp : 12,
			//hp : 12,
			statuts:{
				level:1,
				currentExp:0,
				exp:0,
				currentHp : 17,
				hp: 17,
				currentMana:12,
				mana: 12,
				str: 5,
				strTempBonus: 0,
				strPermBonus: 0,
				strAttrib:0,
				vit: 5,
				vitTempBonus: 0,
				vitPermBonus: 0,
				vitAttrib:0,
				int: 5,
				intTempBonus: 0,
				intPermBonus: 0,
				intAttrib:0,
				dex: 5,
				dexTempBonus: 0,
				dexPermBonus:0,
				dexAttrib:0
			},
			equipment:{
				hat:{},
				body:{},
				L_Hand:{},
				R_Hand:{},
				Accessory_A:{},
				Accessory_B:{}
			},
			inventory: {
				misc:[],
				consomable:[],
				equipment:[],
				accessory:[],
				important:[]
			},
			skills: {
				active:[],
				passif:[],
				CP:0
			},
			mapVisited:[],
			dungeonVisited:[]
		}
		/** @global 
		 *  @property {string} currentMap -the current map displayed
		*/
		this.game.currentMap = "Map08"
		this.game.startMap = "Map08"
		this.game.globalSwitchId=[]
		for(let i =0;i < 50;i++){
			this.game.globalSwitchId.push(false)
		}

		/*
		var myPersonalString = "[hello world 1][hello monde !][xD]"
		let regexp =/\[.{0,}?]/g;
		let array = [...myPersonalString.matchAll(regexp)] */
		this.scene.start("titleScreen")
		//this.scene.start("Map03",{x:1492,y:1628});
	}

}

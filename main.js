
window.addEventListener('load', function() {
//TODO :load animation
	var game = new Phaser.Game({
    "title": "rune-of-lafturia",
    "width": 3316,
    "height": 3460,
    "type": Phaser.AUTO,
    "backgroundColor": "#000000",
    "disableContextMenu":true,
    "parent": "game-container",
	"version":"v0.5.1-alpha-unstable",
    dom: {
        createContainer: true
    },
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
    },
    pack: {
        files: [
            { type: 'scenePlugin', key: 'SpinePlugin', url: 'assets/plugins/phaser-spine.js', sceneKey: 'spine' }
        ]
    },       
    plugins: {
            scene: [
                { key: "DragonBones", plugin: dragonBones.phaser.plugin.DragonBonesScenePlugin, mapping: "dragonbone" }    // setup DB scene plugin
            ]
        }
	});
	game.MODE = "prod"
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
		
		
		if(this.game.MODE =="dev"){
			this.load.pack("devPack", "assets/devPack.json");
		}else if(this.game.MODE =="prod"){
			this.load.pack("prodPack","assets/prodPack.json")
		}
		//this.load.pack("devPack", "assets/pack/devPack.json");

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

		/** @global 
		 *  @property {Object} hero
		 *  @property {number} hero.currentHp 
		 *  @property {number} hero.hp 
		*/

		this.game.hero = {
			//currentHp : 12,
			//hp : 12,
			class:"warrior",
			name:"unknown",
			statuts:{
				level:1,
				currentExp:0,
				exp:0,
				currentHp : 1,
				hp: 1,
				currentMp:1,
				mp: 1,
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
				dexAttrib:0,
				agi: 5,
				agiTempBonus: 0,
				agiPermBonus:0,
				agiAttrib:0,
				atk: 5,
				matk: 5,
				def: 0,
				aspd: 50
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
			gold:1000,
			mapVisited:[],
			dungeonVisited:[]
		}
		/** @global 
		 *  @property {string} currentMap -the current map displayed
		*/
		this.game.currentMap = "Map009"
		this.game.startMap = "Map009"
		this.game.loadZone = 2
		this.game.globalSwitchId=[]
		for(let i =0;i < 50;i++){
			this.game.globalSwitchId.push(false)
		}
		this.game.loading = {
				prodPack:false,
				basePack: false,
				loadZone_1: false,
				loadZone_2: false
		}
		this.game.startPosition = {
			x : 600,
			y : 3000
		}

		/*
		var myPersonalString = "[hello world 1][hello monde !][xD]"
		let regexp =/\[.{0,}?]/g;
		let array = [...myPersonalString.matchAll(regexp)] */
		this.game.loading.prodPack = true;
		this.scene.start("titleScreen");
		//this.scene.start("Map03",{x:1492,y:1628});
	}

}

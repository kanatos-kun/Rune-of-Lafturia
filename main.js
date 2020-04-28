
window.addEventListener('load', function() {

	var game = new Phaser.Game({
    "title": "rune-of-lafturia",
    "width": 3316,
    "height": 3460,
    "type": Phaser.AUTO,
    "backgroundColor": "#000000",
    "disableContextMenu":true,
    "parent": "game-container",
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
	game.scene.add("Boot", Boot, true);
	
});

class Boot extends Phaser.Scene {

	preload() {
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
				currentHp : 17,
				hp: 17,
				currentMana:12,
				mana: 12
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
		this.game.currentMap = "Map01"
		this.scene.start("titleScreen")
		//this.scene.start("Map03",{x:1492,y:1628});
	}

}

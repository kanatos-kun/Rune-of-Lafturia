
window.addEventListener('load', function() {

	var game = new Phaser.Game({
    "title": "zelda_like_project",
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
            debug: true
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
		this.game.gold = 0;
		this.game.currentMap = "Map01"
		this.scene.start("Map01",{x:1492,y:1628});
	}

}

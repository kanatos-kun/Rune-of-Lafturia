(function() {
  var root = this;

  class UtilsPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
      super(scene, pluginManager);
    }


	sayHello(){
		console.log("hello!")
	}
	
	findAngle(x1,y1,x2,y2){
		let a ;
		a = Phaser.Math.Angle.Between(x1,y1,x2,y2)
		return a;
	}
	
	saveSlot(saveNumber){
		var strSaveFile = {
			gold: this.game.gold,
			hero: this.game.hero,
			currentMap : this.game.currentMap
		}
		var positionX = this.scene.scene.get(this.game.currentMap).fHero.x
		var positionY = this.scene.scene.get(this.game.currentMap).fHero.y
		strSaveFile.hero.position = {
			x:positionX,
			y:positionY
		}
		
		
		//console.log(this.game.gold)
		var strSaveFileJSON = JSON.stringify(strSaveFile)
		localStorage.setItem("saveSlot-"+saveNumber,strSaveFileJSON)
	}
	
	loadSlot(saveNumber){
		var strLoadFile = localStorage.getItem("saveSlot-"+saveNumber)
		var strLoadFileJSON = JSON.parse(strLoadFile)
		this.game.gold = strLoadFileJSON.gold
		this.game.hero = strLoadFileJSON.hero
		this.game.currentMap = strLoadFileJSON.currentMap
	}
	
	deleteSlot(saveNumber){
		localStorage.setItem("saveSlot-"+saveNumber,undefined)
	}
	
	convertNullToZero(num){
		let a = (num!=null?(num!=NaN?0:num):0);
		console.log(a)
		return a;
	}
	
	splitTextDialogue(text){
		let regexp =/\[.{0,}?]/g;
		let array = [...text.matchAll(regexp)]
		let regexpRemove =/[^\[].{0,}[^\]]/g;
		let array2 = []
		for(let i=0; i < array.length;i++){
			let a = array[i][0]
			let tx = a.match(regexpRemove)[0].replace("\\n","\n")
			array2.push(tx);
		}
		return array2;
	}

  }

  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = UtilsPlugin;
    }
    exports.UtilsPlugin = UtilsPlugin;
  } else if (typeof define !== "undefined" && define.amd) {
    define("UtilsPlugin", (function() {
      return (root.UtilsPlugin = UtilsPlugin);
    })());
  } else {
    root.UtilsPlugin = UtilsPlugin;
  }

  return UtilsPlugin;
}.call(this));

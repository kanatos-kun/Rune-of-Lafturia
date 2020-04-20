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

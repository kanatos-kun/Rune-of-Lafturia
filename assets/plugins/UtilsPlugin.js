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
		let a = (!num?0:(num!=NaN?num:0));
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
	
	
	aStar_openList(pos,goal){
		var a = {}
		
		a.x =  Phaser.Math.FloorTo(pos.x/256);
		a.y = Phaser.Math.FloorTo(pos.y/256);
		a.prevNode=null;
		a.step=0;
		a.dx = Math.abs(a.x-goal.x);
		a.dy =Math.abs(a.y-goal.y);
		a.inCloseList = false;
		a.f = 1*(a.dx + a.dy)+(10 - 2 * 1) * Math.min(a.dx,a.dy);
		return a;
	}
	
	diagonalHeuristic(node,goal,pos){
		var hDist =  100;//heuristic distance value
		if(pos ==2 || pos ==4 || pos ==6 ||pos ==8) hDist = 140;
		let dx = Math.abs(node.x-goal.x);
		let dy =Math.abs(node.y-goal.y);
		
		var a = 1*(dx + dy)+(hDist - 2 * 1) * Math.min(dx,dy)+(node.step*10);
		
		
		return a;
	}
	
	aStar_checkAlreadyexistInOpenList(cellPos,arrayPos,pos){
		//1) take a cell "cellPos"
		//2) check the direction "pos" of "cellPos"
		//------------------------------
		//  pos
		//  1) top
		//  2) top-right
		//  3) right
		//  4) bottom-right
		//  5) bottom
		//  6) bottom-left
		//  7) left
		//  8) top-left
		//------------------------------
		//cellPos === position of the cell
		//arrayPos === table of array of position
		var bool = {state : false, index : null};

		switch(pos){
			case 1:
			cellPos.y -=1
			case 2:
			cellPos.x +=1
			cellPos.y -=1
			case 3:
			cellPos.x +=1
			case 4:
			cellPos.x +=1
			cellPos.y +=1
			case 5:
			cellPos.y +=1
			case 6:
			cellPos.x -=1
			cellPos.y +=1
			case 7:
			cellPos.x -=1
			case 8:
			cellPos.x -=1
			cellPos.y -=1
			default:
		}
		
		for(let i =0;i <arrayPos.length;i++){
			let x = arrayPos[i].x;
			let y = arrayPos[i].y;
			if(cellPos.x == x && cellPos.y == y){
				bool.state = true;
				bool.index = i;
				return bool;
			}
		}
		return bool;
	}
	
	aStar_addNode(node,goal,pos){
		var newNode = {};
		newNode.step = node.step+1;
		newNode.prevNode = node;
		newNode.inCloseList = false;
		//------------------------------
		//  pos
		//  1) top
		//  2) top-right
		//  3) right
		//  4) bottom-right
		//  5) bottom
		//  6) bottom-left
		//  7) left
		//  8) top-left
		//------------------------------
		
		if(pos==1){
		//  1) top
		newNode.x = node.x;
		newNode.y = node.y -1;
		newNode.f = this.scene.utils.diagonalHeuristic(newNode,goal,pos);
		
		}else if(pos ==2){
		//  2) top-right
		newNode.x = node.x+1;
		newNode.y = node.y-1;
		//newNode.dx = Math.abs(newNode.x-goal.x);
		//newNode.dy =Math.abs(newNode.y-goal.y);
		newNode.f = this.scene.utils.diagonalHeuristic(newNode,goal,pos);
		
		
		}else if(pos ==3){
		//  3) right
		newNode.x = node.x+1;
		newNode.y = node.y;
		//newNode.dx = Math.abs(newNode.x-goal.x);
		//newNode.dy =Math.abs(newNode.y-goal.y);
		newNode.f = this.scene.utils.diagonalHeuristic(newNode,goal,pos);
		
		
		
		}else if(pos ==4){
		//  4) bottom-right
		newNode.x = node.x+1;
		newNode.y = node.y+1;
		//newNode.dx = Math.abs(newNode.x-goal.x);
		//newNode.dy =Math.abs(newNode.y-goal.y);
		newNode.f = this.scene.utils.diagonalHeuristic(newNode,goal,pos);
		
		
		
		}else if(pos ==5){
		//  5) bottom
		newNode.x = node.x;
		newNode.y = node.y+1;
		//newNode.dx = Math.abs(newNode.x-goal.x);
		//newNode.dy =Math.abs(newNode.y-goal.y);
		newNode.f = this.scene.utils.diagonalHeuristic(newNode,goal,pos);
		
		
		
		}else if(pos ==6){
		//  6) bottom-left
		newNode.x = node.x-1;
		newNode.y = node.y+1;
		//newNode.dx = Math.abs(newNode.x-goal.x);
		//newNode.dy =Math.abs(newNode.y-goal.y);
		newNode.f = this.scene.utils.diagonalHeuristic(newNode,goal,pos);
		
		
		}else if(pos ==7){
		//  7) left
		newNode.x = node.x -1;
		newNode.y = node.y;
		//newNode.dx = Math.abs(newNode.x-goal.x);
		//newNode.dy =Math.abs(newNode.y-goal.y);
		newNode.f = this.scene.utils.diagonalHeuristic(newNode,goal,pos);
		
		
		
		
		}else if(pos ==8){
		//  8) top-left
		newNode.x = node.x-1;
		newNode.y = node.y-1;
		//newNode.dx = Math.abs(newNode.x-goal.x);
		//newNode.dy =Math.abs(newNode.y-goal.y);
		newNode.f = this.scene.utils.diagonalHeuristic(newNode,goal,pos);
		
		}
		return newNode;
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

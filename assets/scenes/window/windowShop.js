
// You can write more code here

/* START OF COMPILED CODE */

class windowShop extends Phaser.Scene {
	
	constructor() {
	
		super("windowShop");
		
	}
	

	init(data){
		this.myData = data
	}
	/* START-USER-CODE */
	create(){
		this.html_shop = this.add.dom(300,300).createFromCache("html_shop").setOrigin(0);
		this.html_shop.setScale(3);
		this.currentId=1;
		this.goldMinusBought=0;
		this.item_consumable = this.sys.cache.json.get('DATAitem_consumable');
		this.item_weapon =this.sys.cache.json.get('DATAitem_weapon');
		this.item_armor =this.sys.cache.json.get('DATAitem_armor');
		this.item_accesory =this.sys.cache.json.get('DATAitem_accesory');
		this.item_misc = this.sys.cache.json.get('DATAitem_misc');

		this.events.on("sleep",function(sys,data){
			this.html_shop.setVisible(false);
		},this);
		this.events.on("wake",function(sys,data){
			this.html_shop.setVisible(true);
			this.myData = data;
			console.log(data);
			this.createNewItem();
			this.displayShop();
		},this);
				
	}
	
	//---------------ON HOLD--------------------------
	
	retrieveDataShop(){
		
	}
	
	emptyItemList(){
		var itemDescription1=this.html_shop.getChildByID("itemDescription1");
		itemDescription1.innerHTML = "";
	}
	
	createNewItem(){
		this.emptyItemList();
		var a = (this.myData.consumable.length!=null?this.myData.consumable.length:0);
		var b = (this.myData.weapon.length!=null?this.myData.weapon.length:0);
		var c = (this.myData.armor.length!=null?this.myData.armor.length:0);
		var d = (this.myData.accesory.length!=null?this.myData.accesory.length:0);
		var e = (this.myData.misc.length!=null?this.myData.misc.length:0);
		var itemLenght = a+b+c+d+e;
		
      for (let i = 0; i < itemLenght; i++) {
			
			
			if(i < a){
				// data consumable
				var item = this.item_consumable[  this.myData.consumable[i]-1 ];
				console.log(item);
				item.idHtml = i + 1;
				item.type="consumable";
		        this.createNewItemHTML(item);
			}else if(i < (a+b)){
				// data weapon
		        var item = this.item_weapon[  this.myData.weapon[(a+b)-i-1]-1 ] ;
		        item.idHtml = i + 1;
				item.type="weapon";
		        this.createNewItemHTML(item);
			}else if (i < (a+b+c) ){
				// data armor
		        var item = this.item_armor[ this.myData.armor[(a+b+c)-i-1]-1 ] ;
		        item.idHtml = i + 1;
				item.type="armor";
		        this.createNewItemHTML(item);
			}else if(i < (a+b+c+d) ){
				// data accesory
				console.log("accesory");
				console.log((a+b+c+d)-i-1);
		        var item = this.item_accesory[  this.myData.accesory[(a+b+c+d)-i-1]-1 ] ;

		        item.idHtml =i + 1;
				item.type="accesory";
		        this.createNewItemHTML(item);
				
			}else if (i < (itemLenght) ){
				// data misc
		        var item = this.item_misc[  this.myData.misc[itemLenght-i-1]-1 ] ;
		        item.idHtml = i + 1;
				item.type="misc";
		        this.createNewItemHTML(item);
			}
			
      }
		
	}
	
	createNewItemHTML(item){
		var itemDescription1=this.html_shop.getChildByID("itemDescription1");
 	    var { name, idHtml, price, img, description,type} = item;
        var active = idHtml == 1 ? "active" : "";
		itemDescription1.insertAdjacentHTML("beforeend",
		`<label class="containerItem radioInput ${active}" id="${idHtml}" cost="${price}">
              <input type="radio" />
              <div class="logoItem">
                <img src="assets/images/itemInventory/${img}.png" />
              </div>
              <div class="nameItem">${name}</div>
              <div class="priceItem">${price}G</div>
              <input class="numberItem" type="Number" min="0" max="99" value="0" />
              <div class="numberItemHide">
                <div class="numberItemSpinner">
                  <button class="numberItemPlus">+</button>
                  <button class="numberItemMinus">-</button>
                </div>
              </div>
            </label>`
		)
		
		
	  var html = this.html_shop.getChildByID((idHtml).toString(10));




      var plus = html.getElementsByClassName("numberItemPlus");
      var minus = html.getElementsByClassName("numberItemMinus");
      var numItem = html.getElementsByClassName("numberItem");

		html.addEventListener("click", event => {
        event.preventDefault();
        document.getElementById(this.currentId).classList.remove("active");
        this.currentId = idHtml;
        document.getElementById(this.currentId).classList.add("active");
        //-----------------------------------------------------------------------
        // remplissage
        if (type == "weapon") {
          kindItem.classList.remove("hide");
          classRequirment.classList.remove("hide");
          statsBonus.classList.remove("hide");
          statsPrimary.classList.remove("hide");
		  let {kind,position,level_requirment,class_requirment,atk,matk,str,int,agi,dex,vit,aspd,normal,fire,poison,thunder,water,
earth,holy,dark,stun,sleep,mute,stone,freeze,slow,immobilize} = item;
		atk = this.utils.convertNullToZero(atk);
		matk= this.utils.convertNullToZero(matk);
		str= this.utils.convertNullToZero(str);
		int= this.utils.convertNullToZero(int);
		agi= this.utils.convertNullToZero(agi);
		dex= this.utils.convertNullToZero(dex);
		vit= this.utils.convertNullToZero(vit);
		aspd= this.utils.convertNullToZero(aspd);
		normal= this.utils.convertNullToZero(normal);
		fire= this.utils.convertNullToZero(fire);
		poison= this.utils.convertNullToZero(poison);
		thunder= this.utils.convertNullToZero(thunder);
		water = this.utils.convertNullToZero(water);
		earth= this.utils.convertNullToZero(earth);
		holy= this.utils.convertNullToZero(holy);
		dark= this.utils.convertNullToZero(dark);
		stun= this.utils.convertNullToZero(stun);
		sleep= this.utils.convertNullToZero(sleep);
		mute= this.utils.convertNullToZero(mute);
		stone= this.utils.convertNullToZero(stone);
		freeze= this.utils.convertNullToZero(freeze);
		slow= this.utils.convertNullToZero(slow);
		immobilize= this.utils.convertNullToZero(immobilize);


          class_requirment = class_requirment.split(",");
          let warrior = (class_requirment[0]==1 ? "warrior" : "");
          let thief = (class_requirment[1]==1 ? "thief" : "");
          let mage = (class_requirment[2]==1 ? "mage" : "");
          let priest = (class_requirment[3]==1 ? "priest" : "");
          let archer = (class_requirment[4]==1 ? "archer" : "");

          //1=sword;2=dagger;3=bow;4=lance;5=staff;6=masse;7=hache;8=chakram;9=artefact;10=buckler
          switch (kind) {
            case 1:
              kind = "sword";
              break;
            case 2:
              kind = "dagger";
              break;
            case 3:
              kind = "bow";
              break;
            case 4:
              kind = "lance";
              break;
            case 5:
              kind = "staff";
              break;
            case 6:
              kind = "masse";
              break;
            case 7:
              kind = "hache";
              break;
            case 8:
              kind = "chakram";
              break;
            case 9:
              kind = "artefact";
              break;
            case 10:
              kind = "buckler";
              break;
            default:
              break;
          }

          switch (position) {
            case 1:
              position = "1Handed";
              break;
            case 2:
              position = "2Handed";
              break;
            case 3:
              position = "Right hand";
              break;
            case 4:
              position = "Left hand";
              break;
            default:
              break;
          }


          kindItem.innerHTML = "<h3>Type:</h3>" + `<p>${kind}</p>`;
          classRequirment.innerHTML =
            "<h3>Class requirment :</h3>" +
            `<p>${warrior} ${thief} ${mage} ${priest} ${archer}</p>`;
          levelRequirment.innerHTML =
            "<h3>Level requirment :</h3>" + `<p>${level_requirment}</p>`;
          statsBonus.innerHTML =
            "<h3>Stats :</h3>" +
            `<p>str+${str},agi+${agi},int+${int},dex+${dex},vit+${vit}</p>`;
          statsPrimary.innerHTML =
            "<h3>Primary Stats :</h3>" +
            `<p>atk:${atk} matk:${matk}</p>`;
          descriptionItem.innerHTML =
            "<h3>Description :</h3>" + `${description}`;
        } else if (type == "armor") {
          let kind = "";

          kindItem.classList.remove("hide");
          classRequirment.classList.remove("hide");
          statsBonus.classList.remove("hide");
          statsPrimary.classList.remove("hide");

		  let {position,level_requirment,class_requirment,def,mdef,str,int,agi,dex,vit,Resist_normal,Resist_fire,Resist_poison,Resist_water,Resist_thunder,
Resist_earth,Resist_holy,Resist_dark,Resist_stun,Resist_sleep,Resist_mute,Resist_stone,Resist_freeze,Resist_slow,Resist_immobilize} = item;
		def = this.utils.convertNullToZero(def);
		mdef= this.utils.convertNullToZero(mdef);
		str= this.utils.convertNullToZero(str);
		int= this.utils.convertNullToZero(int);
		agi= this.utils.convertNullToZero(agi);
		dex= this.utils.convertNullToZero(dex);
		vit= this.utils.convertNullToZero(vit);
		Resist_normal= this.utils.convertNullToZero(Resist_normal);
		Resist_fire= this.utils.convertNullToZero(Resist_fire);
		Resist_poison= this.utils.convertNullToZero(Resist_poison);
		Resist_thunder= this.utils.convertNullToZero(Resist_thunder);
		Resist_water= this.utils.convertNullToZero(Resist_water);
		Resist_earth= this.utils.convertNullToZero(Resist_earth);
		Resist_holy= this.utils.convertNullToZero(Resist_holy);
		Resist_dark= this.utils.convertNullToZero(Resist_dark);
		Resist_stun= this.utils.convertNullToZero(Resist_stun);
		Resist_sleep= this.utils.convertNullToZero(Resist_sleep);
		Resist_mute= this.utils.convertNullToZero(Resist_mute);
		Resist_stone= this.utils.convertNullToZero(Resist_stone);
		Resist_freeze= this.utils.convertNullToZero(Resist_freeze);
		Resist_slow= this.utils.convertNullToZero(Resist_slow);
		Resist_immobilize= this.utils.convertNullToZero(Resist_immobilize);



          class_requirment = class_requirment.split(",");
          let warrior = (class_requirment[0]==1 ? "warrior" : "");
          let thief = (class_requirment[1]==1 ? "thief" : "");
          let mage = (class_requirment[2]==1 ? "mage" : "");
          let priest = (class_requirment[3]==1 ? "priest" : "");
          let archer = (class_requirment[4]==1 ? "archer" : "");

          switch (position) {
            case 1:
              position = "head";
              break;
            case 2:
              position = "torso";
              break;
            case 3:
              position = "arm";
              break;
            case 4:
              position = "shoulder";
              break;
            case 5:
              position = "belt";
              break;
            case 6:
              position = "leg";
              break;
            case 7:
              position = "boot";
              break;
            default:
              break;
          }




          kindItem.innerHTML = "<h3>Type:</h3>" + `<p>${kind}</p>`;
          classRequirment.innerHTML =
            "<h3>Class requirment :</h3>" +
            `<p>${warrior} ${thief} ${mage} ${priest} ${archer}</p>`;
          levelRequirment.innerHTML =
            "<h3>Level requirment :</h3>" + `<p>${level_requirment}</p>`;
          statsBonus.innerHTML =
            "<h3>Stats :</h3>" +
            `<p>str+${str},agi+${agi},int+${int},dex+${dex},vit+${vit}</p>`;
          statsPrimary.innerHTML =
            "<h3>Primary Stats :</h3>" +
            `<p>def:${def} mdef:${mdef}</p>`;
          descriptionItem.innerHTML =
            "<h3>Description :</h3>" + `${description}`;
        } else if (type == "accesory") {
          kindItem.classList.remove("hide");
          classRequirment.classList.remove("hide");
          statsBonus.classList.remove("hide");
          statsPrimary.classList.remove("hide");
		  let {position,level_requirment,class_requirment,atk,matk,def,mdef,str,int,agi,dex,vit,Resist_normal,Resist_fire,Resist_poison,D,Resist_thunder,Resist_water,
		 Resist_earth,Resist_holy,Resist_dark,Resist_stun,Resist_sleep,Resist_mute,Resist_stone,Resist_freeze,Resist_slow,Resist_immobilize,
	normal,fire,poison,thunder,water,earth,holy,dark,stun,sleep,mute,stone,freeze,slow,immobilize } = item;
		def = this.utils.convertNullToZero(def);
		mdef= this.utils.convertNullToZero(mdef);
		atk = this.utils.convertNullToZero(atk);
		matk= this.utils.convertNullToZero(matk);
		str= this.utils.convertNullToZero(str);
		int= this.utils.convertNullToZero(int);
		agi= this.utils.convertNullToZero(agi);
		dex= this.utils.convertNullToZero(dex);
		vit= this.utils.convertNullToZero(vit);
		Resist_normal= this.utils.convertNullToZero(Resist_normal);
		Resist_fire= this.utils.convertNullToZero(Resist_fire);
		Resist_poison= this.utils.convertNullToZero(Resist_poison);
		Resist_water= this.utils.convertNullToZero(Resist_water);
		Resist_thunder= this.utils.convertNullToZero(Resist_thunder);
		Resist_earth= this.utils.convertNullToZero(Resist_earth);
		Resist_holy= this.utils.convertNullToZero(Resist_holy);
		Resist_dark= this.utils.convertNullToZero(Resist_dark);
		Resist_stun= this.utils.convertNullToZero(Resist_stun);
		Resist_sleep= this.utils.convertNullToZero(Resist_sleep);
		Resist_mute= this.utils.convertNullToZero(Resist_mute);
		Resist_stone= this.utils.convertNullToZero(Resist_stone);
		Resist_freeze= this.utils.convertNullToZero(Resist_freeze);
		Resist_slow= this.utils.convertNullToZero(Resist_slow);
		Resist_immobilize =this.utils.convertNullToZero(Resist_immobilize);
		normal= this.utils.convertNullToZero(normal);
		fire= this.utils.convertNullToZero(fire);
		poison= this.utils.convertNullToZero(poison);
		thunder= this.utils.convertNullToZero(thunder);
		water = this.utils.convertNullToZero(water);
		earth= this.utils.convertNullToZero(earth);
		holy= this.utils.convertNullToZero(holy);
		dark= this.utils.convertNullToZero(dark);
		stun= this.utils.convertNullToZero(stun);
		sleep= this.utils.convertNullToZero(sleep);
		mute= this.utils.convertNullToZero(mute);
		stone= this.utils.convertNullToZero(stone);
		freeze= this.utils.convertNullToZero(freeze);
		slow= this.utils.convertNullToZero(slow);
		immobilize= this.utils.convertNullToZero(immobilize);
	
	
          class_requirment = class_requirment.split(",");
          let warrior = (class_requirment[0]==1 ? "warrior" : "");
          let thief = (class_requirment[1]==1 ? "thief" : "");
          let mage = (class_requirment[2]==1 ? "mage" : "");
          let priest = (class_requirment[3]==1 ? "priest" : "");
          let archer = (class_requirment[4]==1 ? "archer" : "");
          switch (position) {
            case 1:
              position = "ring";
              break;
            case 2:
              position = "talisman";
              break;
            default:
              break;
          }


          kindItem.innerHTML = "<h3>Type:</h3>" + `<p>accesory</p>`;
          classRequirment.innerHTML =
            "<h3>Class requirment :</h3>" +
            `<p>${warrior} ${thief} ${mage} ${priest} ${archer}</p>`;
          levelRequirment.innerHTML =
            "<h3>Level requirment :</h3>" + `<p>${level_requirment}</p>`;
          statsBonus.innerHTML =
            "<h3>Stats :</h3>" +
            `<p>str+${str},agi+${agi},int+${int},dex+${dex},vit+${vit}</p>`;
          statsPrimary.innerHTML =
            "<h3>Primary Stats :</h3>" +
            `<p>atk:${atk} matk:${matk}</p>`+
			`<p>def:${def} mdef:${mdef}</p>`;
          descriptionItem.innerHTML =
            "<h3>Description :</h3>" + `${description}`;
        } else if (type == "consumable") {
          kindItem.classList.add("hide");
          classRequirment.classList.add("hide");
          statsBonus.classList.add("hide");
          statsPrimary.classList.add("hide");
          levelRequirment.classList.add("hide");
          descriptionItem.innerHTML =
            "<h3>Description :</h3>" + `${description}`;
        } else if (type == "misc") {
          kindItem.classList.add("hide");
          classRequirment.classList.add("hide");
          statsBonus.classList.add("hide");
          statsPrimary.classList.add("hide");
          levelRequirment.classList.add("hide");
          descriptionItem.innerHTML =
            "<h3>Description :</h3>" + `${description}`;
        }

        //-----------------------------------------------------------------------
        var cost = html.getAttribute("cost");
        var nmbItem = html.getElementsByClassName("numberItem")[0].value;
        this.checkNumbersItem();
		var gold = this.scene.scene.game.hero.gold;
		var infoGold = this.html_shop.getChildByID("infoGold");
        infoGold.innerHTML = "Gold : " + gold + "G(-" + this.goldMinusBought + "G)";
      });


       plus[0].addEventListener("click", e => {
        event.preventDefault();
        numItem[0].value++;
        if (numItem[0].value > 99) {
          numItem[0].value = 99;
        }
      });

      minus[0].addEventListener("click", e => {
        event.preventDefault();
        numItem[0].value--;

        if (numItem[0].value < 0) {
          numItem[0].value = 0;
        }
      });
		
		
		
		
		
	}
	
	checkNumbersItem(){
		var a = (this.myData.consumable.length!=null?this.myData.consumable.length:0);
		var b = (this.myData.weapon.length!=null?this.myData.weapon.length:0);
		var c = (this.myData.armor.length!=null?this.myData.armor.length:0);
		var d = (this.myData.accesory.length!=null?this.myData.accesory.length:0);
		var e = (this.myData.misc.length!=null?this.myData.misc.length:0);
		var itemLenght = a+b+c+d+e;
		
      this.goldMinusBought = 0;
      for (let i = 0; i < itemLenght; i++) {
        var item = document.getElementById((i + 1).toString(10));

        var cost = (item.getAttribute("cost")!=null?parseInt(item.getAttribute("cost"),10):0 );
        var nmbItem = item.getElementsByClassName("numberItem")[0].value;
        var ncost = nmbItem * cost;
        this.goldMinusBought += ncost;
      }
	}
	//---------------//ON HOLD--------------------------
	
	
	// Write your code here.
	displayShop(){
		var currentId = 1;
	      var gold = this.scene.scene.game.hero.gold;
		//console.log(this.myData)
		var infoGold = this.html_shop.getChildByID("infoGold");
	    var acheterOnglet = this.html_shop.getChildByID("acheterOnglet");
	    var acheterInput = this.html_shop.getChildByID("acheterInput");
	    var vendreOnglet = this.html_shop.getChildByID("vendreOnglet");
	    var vendreInput = this.html_shop.getChildByID("vendreInput");
	    var acheterButton = this.html_shop.getChildByID("acheterButton");
	    var classRequirment = this.html_shop.getChildByID("classRequirment");
	    var statsBonus = this.html_shop.getChildByID("statsBonus");
	    var statsPrimary = this.html_shop.getChildByID("statsPrimary");
	    var levelRequirment = this.html_shop.getChildByID("levelRequirment");
	    var descriptionItem = this.html_shop.getChildByID("descriptionItem");
		var style = {
		  'background-color': 'lime',
		  'width': '200px',
		  'height': '100px',
		  'font': '150px Arial'
		};
	    /*
	    var el_one = this.html_shop.getChildByID("1");
	    var el_two = this.html_shop.getChildByID("2");
	    var el_three = this.html_shop.getChildByID("3");
	    var el_four = this.html_shop.getChildByID("4");
	    var el_five = this.html_shop.getChildByID("5");
	    var el_six = this.html_shop.getChildByID("6");
	    var el_seven = this.html_shop.getChildByID("7");
	    var el_eight = this.html_shop.getChildByID("8");
	    var el_nine = this.html_shop.getChildByID("9");

	    var el_one_plus = el_one.getElementsByClassName("numberItemPlus");
	    var el_one_minus = el_one.getElementsByClassName("numberItemMinus");
	    var el_one_numItem = el_one.getElementsByClassName("numberItem");
		
    el_one_plus[0].addEventListener("click", e => {
      event.preventDefault();
	  el_one_numItem[0].value ++;

      if (el_one_numItem[0].value > 99) {
        el_one_numItem[0].value = 99;
      }
    });

    el_one_minus[0].addEventListener("click", e => {
      event.preventDefault();
      el_one_numItem[0].value--;

      if (el_one_numItem[0].value < 0) {
        el_one_numItem[0].value = 0;
      }
    });

		var html_shop = this.html_shop;
		infoGold.textContent = "Gold : " + this.scene.scene.game.hero.gold + " G";
		
		
		function checkNumbersItem() {

		      var cost = el_one.getAttribute("cost");
		      var nmbItem = el_one.getElementsByClassName("numberItem")[0].value;
		      var ncost1 = nmbItem * cost;
		      cost = el_two.getAttribute("cost");
		      nmbItem = el_two.getElementsByClassName("numberItem")[0].value;
		      var ncost2 = nmbItem * cost;
		
		      cost = el_three.getAttribute("cost");
		      nmbItem = el_three.getElementsByClassName("numberItem")[0].value;
		      var ncost3 = nmbItem * cost;
		
		      cost = el_four.getAttribute("cost");
		      nmbItem = el_four.getElementsByClassName("numberItem")[0].value;
		      var ncost4 = nmbItem * cost;
		
		      cost = el_five.getAttribute("cost");
		      nmbItem = el_five.getElementsByClassName("numberItem")[0].value;
		      var ncost5 = nmbItem * cost;
		
		      cost = el_six.getAttribute("cost");
		      nmbItem = el_six.getElementsByClassName("numberItem")[0].value;
		      var ncost6 = nmbItem * cost;
		
		      cost = el_seven.getAttribute("cost");
		      nmbItem = el_seven.getElementsByClassName("numberItem")[0].value;
		      var ncost7 = nmbItem * cost;
		
		      cost = el_eight.getAttribute("cost");
		      nmbItem = el_eight.getElementsByClassName("numberItem")[0].value;
		      var ncost8 = nmbItem * cost;
		
		      cost = el_nine.getAttribute("cost");
		      nmbItem = el_nine.getElementsByClassName("numberItem")[0].value;
		      var ncost9 = nmbItem * cost;
		
		      goldMinusBought =
		        ncost1 +
		        ncost2 +
		        ncost3 +
		        ncost4 +
		        ncost5 +
		        ncost6 +
		        ncost7 +
		        ncost8 +
		        ncost9;
		    } */

// exemple shop
//************************************************************************************************ */



/*

	    el_one.addEventListener("click", event => {
	      event.preventDefault();
	      html_shop.getChildByID(currentId.toString()).classList.remove("active");
	      currentId = 1;
	      html_shop.getChildByID(currentId.toString()).classList.add("active");
	      //-----------------------------------------------------------------------
	      // remplissage 2 onglet
	      classRequirment.classList.add("hide");
	      statsBonus.classList.add("hide");
	      statsPrimary.classList.add("hide");
	      levelRequirment.classList.add("hide");
	      descriptionItem.innerHTML =
	        "<h3>Description :</h3>" +
	        "<p>a regular sting from regular stingy monster...</p>";
	      //-----------------------------------------------------------------------
	      var cost = el_one.getAttribute("cost");
	      var nmbItem = el_one.getElementsByClassName("numberItem")[0].value;
	      checkNumbersItem();
	      infoGold.textContent = "Gold : " + gold + "G(-" + goldMinusBought + "G)";
	    });

	    el_two.addEventListener("click", event => {
	      event.preventDefault();
	      html_shop.getChildByID(currentId.toString()).classList.remove("active");
	      currentId = 2;
	      html_shop.getChildByID(currentId.toString()).classList.add("active");
	      //-----------------------------------------------------------------------
	      // remplissage 2 onglet
	      classRequirment.classList.remove("hide");
	      statsBonus.classList.remove("hide");
	      statsPrimary.classList.remove("hide");
	      classRequirment.innerHTML =
	        "<h3>Class requirment :</h3>" +
	        "<p>Warrior, Thief, Mage, Priestess,archer</p>";
	      levelRequirment.innerHTML = "<h3>Level requirment :</h3>" + "<p>1</p>";
	      statsBonus.innerHTML =
	        "<h3>Stats :</h3>" + "<p>str+0,agi+0,int+0,dex+0,vit+0</p> ";
	      statsPrimary.innerHTML = "<h3>Primary Stats :</h3>" + "<p>atk:19</p> ";
	      descriptionItem.innerHTML = "<h3>Description :</h3>" + "...";
	      //-----------------------------------------------------------------------
	      var cost = el_two.getAttribute("cost");
	      var nmbItem = el_two.getElementsByClassName("numberItem")[0].value;
	      checkNumbersItem();
	      infoGold.textContent = "Gold : " + gold + "G(-" + goldMinusBought + "G)";
	    });

   el_three.addEventListener("click", event => {
      event.preventDefault();
      document.getElementById(currentId.toString()).classList.remove("active");
      currentId = 3;
      document.getElementById(currentId.toString()).classList.add("active");
      //-----------------------------------------------------------------------
      // remplissage 2 onglet
      classRequirment.classList.remove("hide");
      levelRequirment.classList.remove("hide");
      statsBonus.classList.remove("hide");
      statsPrimary.classList.remove("hide");
      classRequirment.innerHTML =
        "<h3>Class requirment :</h3>" + "<p>Warrior, Thief, Mage, archer</p>";
      levelRequirment.innerHTML = "<h3>Level requirment :</h3>" + "<p>1</p>";
      statsBonus.innerHTML =
        "<h3>Stats :</h3>" + "<p>str+0,agi+0,int+0,dex+0,vit+0</p> ";
      statsPrimary.innerHTML = "<h3>Primary Stats :</h3>" + "<p>def:25</p> ";
      descriptionItem.innerHTML = "<h3>Description :</h3>" + "...";
      //-----------------------------------------------------------------------
      var cost = el_three.getAttribute("cost");
      var nmbItem = el_three.getElementsByClassName("numberItem")[0].value;
      checkNumbersItem();
      infoGold.innerHTML = "Gold : " + gold + "G(-" + goldMinusBought + "G)";
    });
    el_four.addEventListener("click", event => {
      event.preventDefault();
      document.getElementById(currentId.toString()).classList.remove("active");
      currentId = 4;
      document.getElementById(currentId.toString()).classList.add("active");

      //-----------------------------------------------------------------------
      // remplissage 2 onglet
      classRequirment.classList.add("hide");
      levelRequirment.classList.add("hide");
      statsBonus.classList.add("hide");
      statsPrimary.classList.add("hide");
      descriptionItem.innerHTML = "<h3>Description :</h3>" + "Heal 50 HP";
      //-----------------------------------------------------------------------
      var cost = el_four.getAttribute("cost");
      var nmbItem = el_four.getElementsByClassName("numberItem")[0].value;
      checkNumbersItem();
      infoGold.innerHTML = "Gold : " + gold + "G(-" + goldMinusBought + "G)";
    });
    el_five.addEventListener("click", event => {
      event.preventDefault();
      document.getElementById(currentId.toString()).classList.remove("active");
      currentId = 5;
      document.getElementById(currentId.toString()).classList.add("active");

      //-----------------------------------------------------------------------
      // remplissage 2 onglet
      classRequirment.classList.remove("hide");
      levelRequirment.classList.remove("hide");
      statsBonus.classList.remove("hide");
      statsPrimary.classList.remove("hide");
      classRequirment.innerHTML =
        "<h3>Class requirment :</h3>" + "<p>Warrior, Thief, Mage, archer</p>";
      levelRequirment.innerHTML = "<h3>Level requirment :</h3>" + "<p>1</p>";
      statsBonus.innerHTML =
        "<h3>Stats :</h3>" + "<p>str+0,agi+0,int+0,dex+0,vit+0</p> ";
      statsPrimary.innerHTML = "<h3>Primary Stats :</h3>" + "<p>def:13</p> ";
      descriptionItem.innerHTML = "<h3>Description :</h3>" + "...";
      //-----------------------------------------------------------------------
      var cost = el_five.getAttribute("cost");
      var nmbItem = el_five.getElementsByClassName("numberItem")[0].value;
      checkNumbersItem();
      infoGold.innerHTML = "Gold : " + gold + "G(-" + goldMinusBought + "G)";
    });
    el_six.addEventListener("click", event => {
      event.preventDefault();
      document.getElementById(currentId.toString()).classList.remove("active");
      currentId = 6;
      document.getElementById(currentId.toString()).classList.add("active");
      //-----------------------------------------------------------------------
      // remplissage 2 onglet
      classRequirment.classList.add("hide");
      levelRequirment.classList.add("hide");
      statsBonus.classList.add("hide");
      statsPrimary.classList.add("hide");
      descriptionItem.innerHTML = "<h3>Description :</h3>" + "Heal 50 MP";
      //-----------------------------------------------------------------------
      var cost = el_six.getAttribute("cost");
      var nmbItem = el_six.getElementsByClassName("numberItem")[0].value;
      checkNumbersItem();
      infoGold.innerHTML = "Gold : " + gold + "G(-" + goldMinusBought + "G)";
    });
    el_seven.addEventListener("click", event => {
      event.preventDefault();
      document.getElementById(currentId.toString()).classList.remove("active");
      currentId = 7;
      document.getElementById(currentId.toString()).classList.add("active");
      //-----------------------------------------------------------------------
      // remplissage 2 onglet
      classRequirment.classList.remove("hide");
      levelRequirment.classList.remove("hide");
      statsBonus.classList.remove("hide");
      statsPrimary.classList.remove("hide");
      classRequirment.innerHTML =
        "<h3>Class requirment :</h3>" + "<p>Warrior, Thief, Mage, archer</p>";
      levelRequirment.innerHTML = "<h3>Level requirment :</h3>" + "<p>1</p>";
      statsBonus.innerHTML =
        "<h3>Stats :</h3>" + "<p>str+0,agi+0,int+0,dex+0,vit+0</p> ";
      statsPrimary.innerHTML = "<h3>Primary Stats :</h3>" + "<p>atk:38</p> ";
      descriptionItem.innerHTML = "<h3>Description :</h3>" + "...";
      //-----------------------------------------------------------------------
      var cost = el_seven.getAttribute("cost");
      var nmbItem = el_seven.getElementsByClassName("numberItem")[0].value;
      checkNumbersItem();
      infoGold.innerHTML = "Gold : " + gold + "G(-" + goldMinusBought + "G)";
    });
    el_eight.addEventListener("click", event => {
      event.preventDefault();
      document.getElementById(currentId.toString()).classList.remove("active");
      currentId = 8;
      document.getElementById(currentId.toString()).classList.add("active");
      //-----------------------------------------------------------------------
      // remplissage 2 onglet
      classRequirment.classList.remove("hide");
      levelRequirment.classList.remove("hide");
      statsBonus.classList.remove("hide");
      statsPrimary.classList.remove("hide");
      classRequirment.innerHTML =
        "<h3>Class requirment :</h3>" +
        "<p>Warrior, Thief, Mage, archer,Priestess</p>";
      levelRequirment.innerHTML = "<h3>Level requirment :</h3>" + "<p>1</p>";
      statsBonus.innerHTML =
        "<h3>Stats :</h3>" + "<p>str+0,agi+0,int+0,dex+0,vit+0</p> ";
      statsPrimary.innerHTML = "<h3>Primary Stats :</h3>" + "<p>def:6</p> ";
      descriptionItem.innerHTML = "<h3>Description :</h3>" + "...";
      //-----------------------------------------------------------------------
      var cost = el_eight.getAttribute("cost");
      var nmbItem = el_eight.getElementsByClassName("numberItem")[0].value;
      checkNumbersItem();
      infoGold.innerHTML = "Gold : " + gold + "G(-" + goldMinusBought + "G)";
    });
    el_nine.addEventListener("click", event => {
      event.preventDefault();
      document.getElementById(currentId.toString()).classList.remove("active");
      currentId = 9;
      document.getElementById(currentId.toString()).classList.add("active");
      //-----------------------------------------------------------------------
      // remplissage 2 onglet
      classRequirment.classList.remove("hide");
      levelRequirment.classList.remove("hide");
      statsBonus.classList.remove("hide");
      statsPrimary.classList.remove("hide");
      classRequirment.innerHTML =
        "<h3>Class requirment :</h3>" + "<p>Mage,Priestess</p>";
      levelRequirment.innerHTML = "<h3>Level requirment :</h3>" + "<p>1</p>";
      statsBonus.innerHTML =
        "<h3>Stats :</h3>" + "<p>str+0,agi+0,int+0,dex+0,vit+0</p> ";
      statsPrimary.innerHTML =
        "<h3>Primary Stats :</h3>" + "<p>def:8,mdef:1</p> ";
      descriptionItem.innerHTML = "<h3>Description :</h3>" + "...";
      //-----------------------------------------------------------------------
      var cost = el_nine.getAttribute("cost");
      var nmbItem = el_nine.getElementsByClassName("numberItem")[0].value;
      checkNumbersItem();
      infoGold.innerHTML = "Gold : " + gold + "G(-" + goldMinusBought + "G)";
    });



//************************************************************************************************ */

/*
    acheterInput.oninput = e => {
      if (e.target.checked) {
        acheterOnglet.classList.add("isChecked");
        vendreOnglet.classList.remove("isChecked");
        acheterButton.innerHTML = "Acheter";
      } else {
        acheterOnglet.classList.remove("isChecked");
        vendreOnglet.classList.add("isChecked");
      }
    };

    vendreInput.oninput = e => {
      if (e.target.checked) {
        vendreOnglet.classList.add("isChecked");
        acheterOnglet.classList.remove("isChecked");
        acheterButton.innerHTML = "Vendre";
      } else {
        vendreOnglet.classList.remove("isChecked");
        acheterOnglet.classList.add("isChecked");
      }
    };
		
		*/
		
	}
	
	
	
	
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

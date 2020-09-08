
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
		this.html_shop = this.add.dom(400,700).createFromCache("html_shop").setOrigin(0);
				
		this.events.on("sleep",function(sys,data){
			this.html_shop.setVisible(false);
		},this);
		this.events.on("wake",function(sys,data){
			this.html_shop.setVisible(true);
			this.myData = data;
			this.displayShop();
		},this);
				
	}
	// Write your code here.
	displayShop(){
		var currentId = 1;
	    var goldMinusBought = 0;
	      var gold = this.scene.scene.game.hero.gold;
		//console.log(this.myData)
		 var infoGold = this.html_shop.getChildByID("infoGold");
	    var acheterOnglet = this.html_shop.getChildByID("acheterOnglet");
	    var acheterInput = this.html_shop.getChildByID("acheterInput");
	    var vendreOnglet = this.html_shop.getChildByID("vendreOnglet");
	    var vendreInput = this.html_shop.getChildByID("vendreInput");
	    var acheterButton = this.html_shop.getChildByID("acheterButton");
	    var infoGold = this.html_shop.getChildByID("infoGold");
	    var classRequirment = this.html_shop.getChildByID("classRequirment");
	    var statsBonus = this.html_shop.getChildByID("statsBonus");
	    var statsPrimary = this.html_shop.getChildByID("statsPrimary");
	    var levelRequirment = this.html_shop.getChildByID("levelRequirment");
	    var descriptionItem = this.html_shop.getChildByID("descriptionItem");
	
	    var el_one = this.html_shop.getChildByID("1");
	    var el_two = this.html_shop.getChildByID("2");
	    var el_three = this.html_shop.getChildByID("3");
	    var el_four = this.html_shop.getChildByID("4");
	    var el_five = this.html_shop.getChildByID("5");
	    var el_six = this.html_shop.getChildByID("6");
	    var el_seven = this.html_shop.getChildByID("7");
	    var el_eight = this.html_shop.getChildByID("8");
	    var el_nine = this.html_shop.getChildByID("9");

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
		    }

// exemple shop
//************************************************************************************************ */
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
		
		
		
	}
	
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

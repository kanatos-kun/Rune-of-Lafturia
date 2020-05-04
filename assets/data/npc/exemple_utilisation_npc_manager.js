/*
# Exemple utilisation du npcManager

with dataManager
var npcTest = new Npc()
npcTest.getData("page01/globalSwitchId") // Renvoit null
pcTest.getData("page01/task01") //Renvoit object {}
npcTest.getData("page01/task01/text01") // Renvoit text 01
npcTest.getData("page01/task02/shop/sell01") // Renvoit Object { "name": "potion", "value": 0 }


with directly Data
NpcTest.pageEvent = npc_mapxx_xx.json
NpcTest.pageEvent = this.getData("pageEvent")
NpcTest.page[0].globalSwitchId // Renvoit null


NpcTest.pageEvent.currentPageEvent_id = 0
for(let i = 0; i < NpcTest.page.Length;i++){
            let page = NpcTest.page[i]
            if(this.scene.game.globalSwitchId === page.globalSwitchId){
                        npcTest.pageEvent.currentPageEvent_id = i
            }
}
}




*/

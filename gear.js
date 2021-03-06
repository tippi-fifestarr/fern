const gearArr = [
  {
    "id" : "gear-1",
    "name" : "Shield",
    "img" : "./images/shield.png",
    // note i changed hp to maxhp
    "effect" : [["maxhp", "+ 69"]],
    "description" : "Shield gives +69hp to the max",
    // added gold cost to buy from shop
    "cost" : 1
  },
  {
    "id" : "gear-2",
    "name" : "Sword",
    "img" : "./images/sword.png",
    "effect" : [["dmg", "* 2"]],
    "description" : "Sword of swordiness gives double damage",
    "cost" : 1
  },
  {
    "id" : "gear-3",
    "name" : "Nothingness",
    "img" : "./images/blank.png",
    "effect" : [["draw", "+ 1"]],
    "description" : "nothing is usefulness, draw one more card each turn",
    "cost" : 2
  },
  {
    "id" : "gear-4",
    "name" : "Somethingness",
    "img" : "./images/somethingness.png",
    // double all current element cards, lose a turn
    "effect" : [["elements", "* 2"]],
    "description" : "Life is abundant, lose a turn.",
    "cost" : 2
  },
  {
    "id" : "gear-5",
    "name" : "Nice",
    "img" : "./images/nice.png",
    "effect" : [["dmg", "* 0.69"]],
    // nice, all enemy dmg down
    "description" : "Nice to meet you! :) enemy damage down"
  },
  {
    "id" : "gear-6",
    "name" : "Key",
    "img" : "./images/key.png",
    "effect" : [["lock", "- 1"]],
    // security theme
    "description" : "this removes a lock (to exit level)"
  },
  {
    "id" : "gear-7",
    "name" : "Locked",
    "img" : "<i class=\"fab fa-keycdn\"></i>",
    "effect" : [["level", "+ 1"]],
    // level complete
    "description" : "this removes a lock (to exit level)"
  },
  {
    "id" : "gear-8",
    "name" : "Stunbum",
    "img" : "./gif/squat.gif",
    "effect" : [["turn", "+1"]],
    "description" : "stunning bum gives you turns +1"
  }
]

const npcArr = [
  {
    "id" : "npc-1",
    "name" : "Bad Rat(s)",
    "hp" : 18,
    "dmg" : 8,
    "loot" : {
      "qty" : 1,
      "element" : "gold"
    },
  //   50% chance that each turn, instead of attack, copy creature (with current hp)
    "bonus" : "swarm"
    
  },
  {
    "id" : "npc-2",
    "name" : "Ratpack Boss",
    "hp" : 33,
    "dmg" : 9,
    "loot" : {
      "qty" : 2,
      "element" : "gold"
    },
  //   1/3 chance that each turn, instead of attack, summon a lil rat 
    "bonus" : "summonRat"
  },
  {
    "id" : "npc-3",
    "name" : "sleeping tiger",
    "hp" : 69,
    "dmg" : 21,
    "loot" : {
      "qty" : 1,
      "element" : "stone"
    },
    "bonus" : "hpBoost"
  },
  {
    "id" : "npc-4",
    "name" : "ghost of gund",
    "hp" : 22,
    "dmg" : 110,
    "loot" : {
      "qty" : 1,
      "element" : "air"
    },
    "bonus" : "questionTime"
  },
  {
    "id" : "npc-5",
    "name" : "jerk dragon",
    "hp" : 420,
    "dmg" : 69,
    "loot" : {
      "qty" : 3,
      "element" : "gold"
    },
    "bonus" : "bodyPart"
  }
  // dragon what do these cards need status?  like awareness modalities?
  //      or better yet, we can build scry.
  // shop girl, she is a fun guy works at bit buy got lost on her way to find supplies.  low hp low dmg, 33% chance gives a free gear
  
]
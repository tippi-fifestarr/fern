// create an empty object (bc=?) THIS IS OUR "PLAYER"
const heroStats = {
}

// this is the first scene, add/remove"hide" as appropriate
function handleStartBtn(){
  // hide the start div
  document.getElementById("start").classList.add("hide")
  // show the hero select div
  document.getElementById("hero-select").classList.remove("hide")
  // this creates html elements based on heroes.js
  heroCardCreate();
}

function handleHeroSelectBtn(){
  // hide the start div, by adding hide
  document.getElementById("hero-select").classList.add("hide")
  // show the playing board div, by removing hide
  document.getElementById("playing-board").classList.remove("hide")
  createPlayingBoard()
}
// haven't read yet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// awesome article, dan quiz me about this, give me 1-5 stars
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// map object holds key-value pairs and remembers insertion order of keys
// Any value (both objects and p r i m i t i v e values) may be used as either a key or a value.
function heroCardCreate(){
  // we are mapping from heroesArr (created in the heroes.js) into hero (key value pairs)
  heroesArr.map(hero => {
    // in swell foop, declare OBJECT DESTRUCTURING
    const {id, name, hp, dmg, cost, bonus} = hero;
    // this is the card div, the card itself one could say.
    const heroCard = document.createElement("div")
    // in javascript, id is like "name"
    heroCard.id = `${name}`
    // now we are filling the HTML in another feel swoop! ` c o  o   l` 
    heroCard.innerHTML = `
    <h2> ${name} </h2>
    <p> hp: ${hp} </p>
    <p> dmg ${dmg} </p>
    <p> cost: ${cost.qty} ${cost.element} </p>
    <p> bonus: ${bonus} </p>
    `
    // give it some class
    heroCard.classList.add('hero-card')
    // id is the sequential number dan added to the heroes.js to help identify this. 
    heroCard.classList.add(`hero${id}`)
  // on the click, add a function (and give these arguments)
    heroCard.onclick = function(){
      handleChooseHero(id, name, hp, dmg, cost.qty, cost.element, bonus)
    }
    // and append the card
    document.querySelector('.hero-select-cards-container').appendChild(heroCard)
  })
}
//adding the hero data to "state"
function handleChooseHero(id, name, hp, dmg, costQty, costElement, bonus){
  heroStats.name = name
  heroStats.hp = hp
  heroStats.costQty = costQty
  heroStats.costElement = costElement
  heroStats.bonus = bonus
  heroStats.dmg = dmg
  heroStats.id = id

  findChosenHero(heroStats.id)
}

function createPlayingBoard(){
  // this creates the hero box on the left/right side, bottom/top half hero info, bottom half "hand"
  displayHero()
  // this is the unrevealed playing field of 5x5 facedown cards and the stack of x remaining cards
  const unshuffledDeck = buildDeck()
  let shuffledDeck = shuffle(unshuffledDeck)
  shuffledDeck = shuffle(shuffledDeck)
  shuffledDeck = shuffle(shuffledDeck)
  displayDeck(shuffledDeck)
}

function displayHero(){
  // these are finding the chosen hero stat parts and creating objects of them
  const nameEl = document.querySelector('.hero-name')
  const hpEl = document.querySelector('.hero-hp')
  const dmgEl = document.querySelector('.hero-dmg')
  const costEl = document.querySelector('.hero-cost')
  const costQtyEl = document.querySelector('.hero-cost-qty')
  const bonusEl = document.querySelector('.hero-bonus')
  // 
  nameEl.innerHTML = `NAME: ${heroStats.name}`
  hpEl.innerHTML = `HP: ${heroStats.hp}`
  dmgEl.innerHTML = `DMG: ${heroStats.dmg}`
  costEl.innerHTML = `ELEMENT: ${heroStats.costElement}`
  costQtyEl.innerHTML = `COST: ${heroStats.costQty}`
  bonusEl.innerHTML = `BONERS EFFECT: ${heroStats.bonus}`
}

function displayDeck(deck){
  // put cards face down into the <div class="card-grid">
  deck.map(card => {
    const cardEl = document.createElement('div')
    cardEl.classList.add(`card`)
    cardEl.classList.add(`flipped`)
    cardEl.innerHTML = `
      <h1>${card.name}</h1>
      <i class="zoom-icon zoom-icon-${card.id} fas fa-search"></i>
    `
    cardEl.onclick = function(){
      cardEl.classList.remove(`flipped`)
    }
    document.querySelector('.card-grid').appendChild(cardEl)
  })
  for(i = 0; i < deck.length; i++){
    Array.from(document.querySelectorAll('.zoom-icon')).forEach(element => {
      if(element.classList[1] == `zoom-icon-${deck[i].id}`){
        element.addEventListener('click', function(){cardZoom(deck[i])})
      }
    });
  }
}

function buildDeck(){
  // takes heroes, elements, gear, and npc and shuffles them into a stack placed in dadeck
  const deck = []
  gearArr.map(el =>{
    deck.push(el)
  })
  elementsArr.map(el =>{
    deck.push(el)
  })
  npcArr.map(el =>{
    deck.push(el)
  })
  heroesArr.map(el =>{
    deck.push(el)
  })
  return deck
}

function shuffle(array) {
  // for (var i = 0, i<8 )
  array.sort(() => Math.random() - 0.5);
  array.sort(() => Math.random() - 0.5);
  array.sort(() => Math.random() - 0.5);
  array.sort(() => Math.random() - 0.5);
  array.sort(() => Math.random() - 0.5);
  array.sort(() => Math.random() - 0.5);
  array.sort(() => Math.random() - 0.5);
  return array
}

// selectorbox (and delete the imprint)
function findChosenHero(id){
  // checkherostat for hero name and then loop through hero options find the corresponding card by name
  for(var i = 0; heroesArr.length; i++){
    if (id == heroesArr[i].id){
      document.querySelector(`.hero${id}`).classList.add('chosen')
    } else {
      document.querySelector(`.hero${heroesArr[i].id}`).classList.remove('chosen')
    }
  }
  console.log(heroStats.name)
}

// naming card into cardData or DETAILS
function cardZoom(cardData){
  //check if drawer is open or closed
  document.querySelector('.drawer-container').classList.remove('drawer-container-closed')
  console.log(cardData)
  
}

// toggleDrawerBtn triggers "change text to close"
function toggleDrawer(){
  document.querySelector('.drawer-container').classList.toggle('drawer-container-closed')
}
document.querySelector('.toggleDrawerBtn').addEventListener("click", toggleDrawer)

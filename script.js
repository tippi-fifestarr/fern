const heroStats = {
}

function handleStartBtn(){
  // hide the start div
  document.getElementById("start").classList.add("hide")
  // show the hero select div
  document.getElementById("hero-select").classList.remove("hide")
  heroCardCreate();
}
function handleHeroSelectBtn(){
  // hide the start div, by adding hide
  document.getElementById("hero-select").classList.add("hide")
  // show the playing board div, by removing hide
  document.getElementById("playing-board").classList.remove("hide")
  createPlayingBoard()
}

function heroCardCreate(){
heroesArr.map(hero => {
  const {id, name, hp, dmg, cost, bonus} = hero;
  const heroCard = document.createElement("div")
  heroCard.id = `${name}`
  heroCard.innerHTML = `
  <h2> ${name} </h2>
  <p> hp: ${hp} </p>
  <p> dmg ${dmg} </p>
  <p> cost: ${cost.qty} ${cost.element} </p>
  <p> bonus: ${bonus} </p>
  `
  heroCard.classList.add('hero-card')
  heroCard.classList.add(`hero${id}`)

  heroCard.onclick = function(){handleChooseHero(id, name, hp, dmg, cost.qty, cost.element, bonus)}
  document.querySelector('.hero-select-cards-container').appendChild(heroCard)
})
}

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
    `
    document.querySelector('.card-grid').appendChild(cardEl)
  })
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

function findChosenHero(id){
  // checkherostat for hero name and then loop through hero options find the corresponding card by name
  // select that one ()
  console.log(typeof(heroesArr))
  for(var i = 0; heroesArr.length; i++){
    if (id == heroesArr[i].id){
      document.querySelector(`.hero${id}`).classList.add('chosen')
    } else {
      document.querySelector(`.hero${heroesArr[i].id}`).classList.remove('chosen')
    }
  }
  console.log(heroStats.name)
}
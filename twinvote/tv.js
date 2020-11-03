// create an empty object (bc=?) THIS IS OUR "PLAYER"
const topicStats = {
}

// this is the first scene of TV, add/remove"hide" as appropriate
function handleStartBtn(){
  // hide the start div
  document.getElementById("start").classList.add("hide")
  // show the hero select div
  document.getElementById("topic-select").classList.remove("hide")
  // this creates html elements based on heroes.js
  topicCardCreate();
}

function handleTopicSelectBtn(){
  // hide the start div, by adding hide
  document.getElementById("topic-select").classList.add("hide")
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
function topicCardCreate(){
  // we are mapping from heroesArr (created in the heroes.js) into hero (key value pairs)
  topicArr.map(topic => {
    // in swell foop, declare OBJECT DESTRUCTURING
    const {id, name, icon, color} = topic;
    // this is the card div, the card itself one could say.
    const topicCard = document.createElement("div")
    // in javascript, id is like "name"
    topicCard.id = `${name}`
    // now we are filling the HTML in another feel swoop! ` c o  o   l` 
    topicCard.innerHTML = `
    <h2> ${name} </h2>
    <p> icon: ${icon} </p>
    <p> color: ${color} </p>
    `
    // give it some class
    topicCard.classList.add('topic-card')
    // id is the sequential number dan added to the heroes.js to help identify this. 
    topicCard.classList.add(`topic${id}`)
  // on the click, add a function (and give these arguments)
    topicCard.onclick = function(){
      handleChooseTopic(id, name, icon, color)
    }
    // and append the card
    document.querySelector('.topic-select-cards-container').appendChild(topicCard)
  })
}
//adding the hero data to "state"
function handleChooseTopic(id, name, icon, color){
  topicStats.name = name
  topicStats.icon = icon
  topicStats.color = color
  findChosenTopic(topicStats.id)
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
  const nameEl = document.querySelector('.topic-name')
  const iconEl = document.querySelector('.topic-icon')
  const colorEl = document.querySelector('.topic-color')
  
  // 
  nameEl.innerHTML = `NAME: ${topicStats.name}`
  iconEl.innerHTML = `ICON: ${topicStats.icon}`
  colorEl.innerHTML = `COLOR: ${topicStats.color}`
  }

function displayDeck(deck){
  // put cards face down into the <div class="card-grid">
  deck.map(card => {
    const cardEl = document.createElement('div')
    cardEl.classList.add(`card`)
    cardEl.classList.add(`flipped`)
    cardEl.classList.add(`clearfix`)
    cardEl.innerHTML = `
      <h1>${card.name}</h1>
      <i class="zoom-icon zoom-icon-${card.id} fas fa-search"></i>
      <p>${card.detail} and <br> ${card.link}</p>
      <h2 class="palette"><i class="fas fa-palette"></i></h2>
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
  // gearArr.map(el =>{
  //   deck.push(el)
  // })
  // elementsArr.map(el =>{
  //   deck.push(el)
  // })
  // npcArr.map(el =>{
  //   deck.push(el)
  // })
  webDevArr.map(el =>{
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
function findChosenTopic(id){
  // checkherostat for hero name and then loop through hero options find the corresponding card by name
  for(var i = 0; topicArr.length; i++){
    if (id == topicArr[i].id){
      document.querySelector(`.topic${id}`).classList.add('chosen')
    } else {
      document.querySelector(`.topic${topicArr[i].id}`).classList.remove('chosen')
    }
  }
  console.log(topicStats.name)
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

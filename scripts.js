let allCards;
let container = document.querySelector('main');
let cardsFinal = [];
let gifs= [
    '<img src="./img/bobrossparrot.gif" >',
    '<img src="./img/explodyparrot.gif" >',
    '<img src="./img/fiestaparrot.gif" >',
    '<img src="./img/metalparrot.gif" >',
    '<img src="./img/revertitparrot.gif" >',
    '<img src="./img/tripletsparrot.gif" >',
    '<img src="./img/unicornparrot.gif" >'
]
let numberOfCards = prompt("Digite a quantidade de cartas que deseja jogar");

verifyConditionForPlay();
function verifyConditionForPlay() {
    numberOfCards = Number(numberOfCards);
    while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0) {
        numberOfCards = prompt("Digite a quantidade de cartas que deseja jogar");
    }
    gifs = gifs.sort(comparador);
    for (let i = 0; i < numberOfCards / 2; i++) {
        container.innerHTML += `
        <div class="card" onclick="selectCard(this)">
        <div class="backCard face">
                <img src="./img/front.png">
        </div>
        <div class="frontCard face">
            ${gifs[i]}
        </div>
        </div>
        <div class="card" onclick="selectCard(this)">
        <div class="backCard face">
                <img src="./img/front.png">
        </div>
        <div class="frontCard face">
            ${gifs[i]}
        </div>
        </div>`
    }
    allCards = document.querySelectorAll('.card');
    shuffleDeck();

    // let id = setInterval( showBeforeTheBeginGame , 2000);
}
function shuffleDeck() {
    for (let i = 0 ; i < allCards.length ; i++) {
        cardsFinal.push(allCards[i].innerHTML);
        cardsFinal = cardsFinal.sort(comparador);
    }
    for (let j = 0 ; j < allCards.length ; j++) {
        allCards[j].innerHTML = cardsFinal[j];
    }
}
function comparador() { 
	return Math.random() - 0.5; 
}
function showBeforeTheBeginGame() {
    for(let i = 0 ; i < allCards.length ; i++) {
        allCards[i].querySelector('.backCard').classList.toggle('effectBackCard');
        allCards[i].querySelector('.frontCard').classList.toggle('effectFrontCard');
    }
}
function selectCard(e) {
    e.querySelector('.backCard').classList.toggle('effectBackCard');
    e.querySelector('.frontCard').classList.toggle('effectFrontCard');
}

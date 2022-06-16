let allCards;
let count = 0;
let container = document.querySelector('main');
let gifs= [
    '<img src="./img/bobrossparrot.gif" >',
    '<img src="./img/explodyparrot.gif" >',
    '<img src="./img/fiestaparrot.gif" >',
    '<img src="./img/metalparrot.gif" >',
    '<img src="./img/revertitparrot.gif" >',
    '<img src="./img/tripletsparrot.gif" >',
    '<img src="./img/unicornparrot.gif" >'
];

verifyConditionForPlay();
function verifyConditionForPlay() {
    let numberOfCards = prompt("Digite a quantidade de cartas que deseja jogar");
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
    let cardsFinal = [];
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
let firstCard;
let secondCard;
function selectCard(e) {
    // clearInterval('id');
 
    if (firstCard === undefined) {
        firstCard = e;
        firstCard.querySelector('.backCard').classList.toggle('effectBackCard');
        firstCard.querySelector('.frontCard').classList.toggle('effectFrontCard');
    } else {
        secondCard = e;
        secondCard.querySelector('.backCard').classList.toggle('effectBackCard');
        secondCard.querySelector('.frontCard').classList.toggle('effectFrontCard');
        if (firstCard.innerHTML === secondCard.innerHTML) {
            console.log('são iguais');
            firstCard = undefined;
            secondCard = undefined;
        } else {
            setTimeout(turnCard , 1000 , firstCard, secondCard);
            firstCard = undefined;
            secondCard = undefined;
        }

    }
    // verifyVictory();
}
const turnCard = function (card1 , card2) {
    card1.querySelector('.backCard').classList.toggle('effectBackCard');
    card1.querySelector('.frontCard').classList.toggle('effectFrontCard');
    card2.querySelector('.backCard').classList.toggle('effectBackCard');
    card2.querySelector('.frontCard').classList.toggle('effectFrontCard');
    console.log('elas viraram');
}
// function turnCard(card1 , card2){
//     card1.querySelector('.backCard').classList.toggle('effectBackCard');
//     card1.querySelector('.frontCard').classList.toggle('effectFrontCard');
//     card2.querySelector('.backCard').classList.toggle('effectBackCard');
//     card2.querySelector('.frontCard').classList.toggle('effectFrontCard');
// }

// function verifyVictory() {
//     let j = 0;
//     for (let i = 0  ; i < numberOfCards ; i++) {
//         if (allCards[i].querySelector('.backCard').classList.contains('effectBackCard')) {
//             j++;
//         } if (j == numberOfCards) {
//             alert('Você ganhou !!');
//         }
//     }
// }
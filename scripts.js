let allCards;
let count = 0;
let container = document.querySelector('main');
let numberOfCards;
const timer = document.querySelector('.timer');
let firstCard;
let secondCard;
let conditionVictory = 0;
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

let timerOfGame = setInterval(stopwatch , 1000);
function stopwatch() {
    // timer.innerHTML = Number(timer.innerHTML);
    timer.innerHTML++;
}
function verifyConditionForPlay() {
    numberOfCards = Number(prompt("Digite a quantidade de cartas que deseja jogar"));
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

    setTimeout( showBeforeTheBeginGame , 500);
    setTimeout( showBeforeTheBeginGame , 850);
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
    for(let i = 0 ; i < numberOfCards ; i++) {
        allCards[i].querySelector('.backCard').classList.toggle('effectBackCard');
        allCards[i].querySelector('.frontCard').classList.toggle('effectFrontCard');
    }  
}
function selectCard(e) {
    if (e.querySelector('.backCard').classList.contains('effectBackCard') === false && secondCard === undefined) {
        count++;
        if (firstCard === undefined) {
            firstCard = e;
            firstCard.querySelector('.backCard').classList.toggle('effectBackCard');
            firstCard.querySelector('.frontCard').classList.toggle('effectFrontCard');
        } else {
            secondCard = e;
            secondCard.querySelector('.backCard').classList.toggle('effectBackCard');
            secondCard.querySelector('.frontCard').classList.toggle('effectFrontCard');
            if (firstCard.innerHTML === secondCard.innerHTML) {
                firstCard = undefined;
                secondCard = undefined;
                conditionVictory++;
            } else {
                setTimeout(turnCard , 1000 , firstCard, secondCard);
            }
        }
        setTimeout(verifyVictory , 700);
    }
}

const turnCard = function (card1 , card2) {
    card1.querySelector('.backCard').classList.toggle('effectBackCard');
    card1.querySelector('.frontCard').classList.toggle('effectFrontCard');
    card2.querySelector('.backCard').classList.toggle('effectBackCard');
    card2.querySelector('.frontCard').classList.toggle('effectFrontCard');
    firstCard = undefined;
    secondCard = undefined;
}
function verifyVictory() {
    if (conditionVictory == numberOfCards / 2) {
        alert(`Você ganhou em ${count} rodadas no tempo de ${timer.innerHTML} segundos`);
        let answer = prompt('Deseja continuar jogando ? (sim ou não)');
        if (answer === 'sim') {
            container.innerHTML = '';
            count = 0;
            conditionVictory = 0;
            verifyConditionForPlay();
            timer.innerHTML = 0;
        } else if (answer === 'não') {
            clearInterval(timerOfGame);
            alert('Então tchau :(');
        }
    }
}
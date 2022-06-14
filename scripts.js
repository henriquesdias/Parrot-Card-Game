let allCards = document.querySelectorAll('.card');
let deck = document.querySelectorAll('.options');
let gifs= [deck[0] , deck[1] , deck[2],  deck[3],  deck[4],  deck[5], deck[6]];
let numberOfCards = prompt("Digite a quantidade de cartas que deseja jogar");
verifyConditionForPlay();
function verifyConditionForPlay() {
    numberOfCards = Number(numberOfCards);
    while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0) {
        numberOfCards = prompt("Digite a quantidade de cartas que deseja jogar");
    }
    
    for (let i = 13 ; i >= numberOfCards; i--) {
        allCards[i].classList.add('hide');
    }
    shuffleDeck();
}
function shuffleDeck() {
    gifs.sort(comparador);
    for (let i = 0 ; i < numberOfCards ; i++) {
        allCards[i].querySelector('.frontCard').innerHTML = gifs[i].innerHTML;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function selectCard(e) {
    e.querySelector('.backCard').classList.toggle('effectBackCard');
    e.querySelector('.frontCard').classList.toggle('effectFrontCard');
}

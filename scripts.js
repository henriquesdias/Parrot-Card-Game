let allCards = document.querySelectorAll('.card');
let deck = document.querySelectorAll('.frontCard');
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
    showCards();
}

// function comparador() { 
// 	return Math.random() - 0.5; 
// }

function showCards() {
    for (let i = 0 ; i < numberOfCards / 2 ; i++) {
        allCards[i].innerHTML = deck[i].innerHTML;
    }
    console.log('foi chamada');
}
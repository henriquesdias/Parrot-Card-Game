let firstCards = document.querySelectorAll('.firstOption');
let secondCards = document.querySelectorAll('.secondOption');
let frontCards = document.querySelectorAll('.frontCard');
console.log(firstCards , secondCards);
// let numberOfCards = prompt("Digite a quantidade de cartas que deseja jogar");
verifyConditionForPlay();
function verifyConditionForPlay() {
    while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0) {
        numberOfCards = prompt("Digite a quantidade de cartas que deseja jogar");
    }
    for (let i = Number(numberOfCards) / 2 ; i < Number(numberOfCards) ; i++) {

    }
}

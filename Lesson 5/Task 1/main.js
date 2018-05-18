var wordBase = prompt('Введите ваше слово',).toLowerCase();

function isReverse(wordBase) {
    var wordReverse = wordBase.split('').reverse().join('');
    wordBase == wordReverse ?
        alert(' Слово ' + wordBase + ' - полиндром!') :
        alert(' Слово ' + wordBase + ' -  НЕ полиндром!');
}
    isReverse(wordBase);
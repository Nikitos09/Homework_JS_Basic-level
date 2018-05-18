var wordFirst = prompt('Введите первое слово',),
    wordSecond = prompt('Введите второй слово',);

function isAnagram(wordFirst, wordSecond) {
    var first = wordFirst.toLowerCase().split('').sort().join(''),
        second = wordSecond.toLowerCase().split('').sort().join('');
    (first == second) ? alert(' Слова ' + wordFirst + ' , ' + wordSecond + ' - анаграммы!') :
        alert(' Слова ' + wordFirst + ' , ' + wordSecond + ' - НЕ анаграммы!');
}

isAnagram(wordFirst, wordSecond);
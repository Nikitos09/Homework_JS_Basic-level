var text = prompt('Введите текст',);

function vowelCount(text) {
    var textArr = text.toLowerCase().split(''),
        lowerArr = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'],
        textLength = textArr.length,
        lowerLength = lowerArr.length,
        i, j, counter = 0;
    
    for (i = 0; i < textLength; i++) {
        for (j = 0; j < lowerLength; j++) {
            if (textArr[i] == lowerArr[j]) {
                counter++
            }
        }

    }
    return ' Количество гласных в слове "' + text + '" равно ' + counter;
}

alert(vowelCount(text));




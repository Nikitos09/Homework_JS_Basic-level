var text = prompt('Введите текст',);

function vowelCount(text) {
    var textArr = text.toLowerCase().split(''),
        length = textArr.length,
        i, counter = 0;
    for (i = 0; i < length; i++) {
        if (textArr[i] == 'а' || textArr[i] == 'у' || textArr[i] == 'о' ||
            textArr[i] == 'ы' || textArr[i] == 'и' || textArr[i] == 'э' ||
            textArr[i] == 'я' || textArr[i] == 'ю' || textArr[i] == 'ё' || textArr[i] == 'е') {
            counter++;
        }

    }
    return ' Количество гласных в слове "' + text + '" равно ' + counter;
}

alert(vowelCount(text));



var text = prompt('Введите текст',);

function lettersCount(text) {
    var regexp = /[a-zA-ZА-Яа-яЁё]/gi;
    text = text.split(/[!.?]/);                                       // Разделили текст на предложения

    if (text[text.length - 1] == '') {                                // Проверка на пустое предложение в конце.
        text[text.length - 1] = null;
    }
    for (var i = 0; i < text.length; i++) {                           // Пробегаемся по каждому предложению
        var letters = 0,
            sentence = text[i].split('');                             // Разделили предложение на символы
        for (var j = 0; j < sentence.length; j++) {                   // Пробегаемся по каждому символу
            if (sentence[j].search(regexp) !== -1) {                  // Если символ = буква - счётчик++
                letters++
            }
        }
        alert('Предложение: "' + text[i] + '" | Количество букв = ' + letters);
    }
}

lettersCount(text);



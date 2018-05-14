var value, sum = 0, arr = [];
while (true) {
    value = + prompt('Введите значение',);
    if (value == '' || value === null || isNaN(value)) {
        break;
    }
    arr.push(value);
}
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
alert(' Массив: [' + arr + '] |  Сумма: ' + sum);


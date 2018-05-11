var value, sum = 0, arr = [];
while (true) {
    value = prompt('Введите значение',);
    arr.push(+value);
    if (value == '' || value === null || isNaN(value))
        break;
}
for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
alert(' Массив: [' + arr + '] ||  Сумма: ' + sum);


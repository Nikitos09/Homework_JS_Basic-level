var x, n, result;
x = prompt('Введите x',);
n = prompt('Введите n',);

function pow(x, n) {
    if (n == 0) {
        return 1;
    } else if (n != 1) {
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}

result = pow(x, n);
alert('x = ' + x + '; n = ' + n + '; pow(x,n) = ' + result);


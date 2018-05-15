var n = +prompt('Введите значение n',);
/* Через цикл
function sumTo(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
*/

/* Через рекурсию
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}
*/
/* Через формулу
function sumTo(n){
    return (1+n)*n/2;
}
*/
alert(sumTo(n));
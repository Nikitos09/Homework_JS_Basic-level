function repeat(){
  var result,mainNumber,divNumber,multNumber,sumNumber, difNumber ;
  mainNumber = +prompt('Введите число');
  difNumber = +prompt('Сколько отнять от введённого вами числа?');
  sumNumber = +prompt('Сколько прибавить к полученному значению?');
  multNumber = +prompt('На сколько умножить полученное значение?');
  divNumber = +prompt('На сколько разделить полученное значение?');
  result = ((mainNumber - difNumber + sumNumber) * multNumber / divNumber);
  if (isNaN(result)){
    alert('Вы не ввели числа! Повторите ещё раз.');}
  else {
    alert('(' + mainNumber + '-' + difNumber + '+' + sumNumber + ')' + '*' + multNumber + '/' + divNumber + '=' +result);}
}

// --- Sum function ---
function sum(){
  var num1,num2,result;
  num1 = document.getElementById('n1').value;
  num1=parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2=parseInt(num2);
  if (isNaN(num1) || isNaN(num2)) { 
    result = "Enter values!";}
  else {
    result = "Result: "+ num1 + " + " + num2 + " = " +(num1+num2);}
  document.getElementById("result").innerHTML = result;
}
// --- Diff. function ---
function dif(){
  var num1,num2,result;
  num1 = document.getElementById('n1').value;
  num1=parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2=parseInt(num2);
  if (isNaN(num1) || isNaN(num2)) { 
    result = "Enter values!";}
  else {
    result = "Result: "+ num1 + " - " + num2 + " = " +(num1 - num2);}
  document.getElementById('result').innerHTML = result;
}
// --- Clear function ---
function clearCalc(){
  document.getElementById('n1').value = '';
  document.getElementById('n2').value = '';
  document.getElementById('result').innerHTML = 'The calculator has been cleared';
}
// --- CloseCalc function --- 
function closeCalc(){
  document.getElementById('calc').style.display="none";
  document.getElementById('openCalc').style.display="flex";
  document.getElementById('turnCalc').style.display="none";
}
// --- OpenCalc function ---
function openCalc(){
  document.getElementById('calc').style.display="flex";
  document.getElementById('openCalc').style.display="none";
}
// --- TurnCalc function ---
function turnCalc(){
  document.getElementById('calc').style.display="none";
  document.getElementById('turnCalc').style.display="block";
}
// --- unturnCalc function ---
function unTurnCalc(){
  document.getElementById('calc').style.display="flex";
  document.getElementById('turnCalc').style.display="none";
}
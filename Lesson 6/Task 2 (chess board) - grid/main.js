var chessBoard = document.getElementById('chessBoard');

function create(){
    var x =+ document.getElementById('xValue').value,
        y =+ document.getElementById('yValue').value,
        size = document.getElementById('size').value;

    if (x < 0 || y < 0){
        alert('Введите положительные значения');
    }
    if (x % 2 == 0) {
        x = x + 1;
        document.getElementById('xValue').value = x;
    }
        chessBoard.innerHTML='';
        chessBoard.style.gridTemplate = 'repeat(' + y + ',' + size + 'px) / repeat(' + x + ',' + size + 'px)';

    for (var i = 0; i < x*y; i++) {
        newCell = document.createElement('div');
        newCell.className = 'new-cell';
        chessBoard.appendChild(newCell);
        if (i % 2 == 0) {
            newCell.style.background = 'black';
        }
    }
}

chessBoard.addEventListener('click', colorReverse);
function colorReverse(){
    for(var i = 0; i < chessBoard.childNodes.length; i++){
       if (chessBoard.childNodes[i].style.background === 'black'){
           chessBoard.childNodes[i].style.background = 'white';
       } else {
           chessBoard.childNodes[i].style.background = 'black';
       }
    }
}

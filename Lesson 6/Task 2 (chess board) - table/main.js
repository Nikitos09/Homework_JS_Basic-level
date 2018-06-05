var chessBoard = document.getElementById('chessBoard'),
    button = document.getElementsByTagName('button')[0],
    x = document.getElementById('xValue').value,
    y = document.getElementById('yValue').value,
    size = document.getElementById('size').value;

button.addEventListener('click', create, false);
document.addEventListener('keydown', check, false);

function check(){
    if ((document.getElementById('xValue').value !== '') || (document.getElementById('xValue').value > 0 )) {
        button.disabled = false;
    }
}


/* Create chessBoard function */
function create() {
    var x = document.getElementById('xValue').value,
        y = document.getElementById('yValue').value,
        size = document.getElementById('size').value;

    if ((x  !== '') || (x > 0 )) {
        button.disabled = false;
    }

    chessBoard.innerHTML = '';
    for (var i = 0; i < y; i++) {
        var newRow = document.createElement('tr');

        newRow.style.height = size + 'px';
        chessBoard.appendChild(newRow);
    }
    for (var i = 0; i < chessBoard.childNodes.length; i++) {
        for (var j = 0; j < x; j++) {
            var newCell = document.createElement('td');

            newCell.style.width = size + 'px';
            chessBoard.childNodes[i].appendChild(newCell);
            if (i % 2 == 0 && j % 2 == 0) {
                chessBoard.childNodes[i].childNodes[j].style.background = 'black';
            } else if (i % 2 == 0 && j % 2 !== 0) {
                chessBoard.childNodes[i].childNodes[j].style.background = 'white';
            } else if (i % 2 !== 0 && j % 2 == 0) {
                chessBoard.childNodes[i].childNodes[j].style.background = 'white';
            } else if (i % 2 !== 0 && j % 2 !== 0) {
                chessBoard.childNodes[i].childNodes[j].style.background = 'black';
            }
        }
    }
};

/* Reverse color chessBoard function */
function reverse() {

    for (var i = 0; i < chessBoard.childNodes.length; i++) {
        for (var j = 0; j < chessBoard.childNodes[i].childNodes.length; j++) {
            if (chessBoard.childNodes[i].childNodes[j].style.background == 'white') {
                chessBoard.childNodes[i].childNodes[j].style.background = 'black';
            } else {
                chessBoard.childNodes[i].childNodes[j].style.background = 'white';
            }
        }
    }
}
























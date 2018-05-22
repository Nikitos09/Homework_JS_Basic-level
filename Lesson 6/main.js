var addRowBtn = document.getElementById('addRow'),
    tBody = document.getElementsByTagName('tbody')[0];

addRowBtn.addEventListener('click', addRow, false);

function addRow() {
    var newRow = document.createElement('tr'),
        firstRow = tBody.firstChild;
    newRow.innerHTML = '<td></td><td></td><td></td>';
    tBody.insertBefore(newRow, firstRow);
}

tBody.onclick = function (event) {
    var target = event.target;

    if (target.id !== 'addRow') {
        var text = target.innerText;
        target.innerHTML = '<input type="text" onkeypress="focusOutKey(event)" onblur = "focusOut(event);" value="' + text + '">';

        var input = target.getElementsByTagName('input')[0];
        input.focus();
    }
}

function focusOut(event) {
    var target = event.target;
    target.parentNode.innerHTML = target.value;
}

function focusOutKey(event) {
    if (event.keyCode == 13) {
        focusOut(event);
    }
}
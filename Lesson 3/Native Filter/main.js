function myFilter(oldArr, callback) {
    var i = 0, length = oldArr.length, newArr = [];
    for (i; i < length; i++) {
        if (callback(oldArr[i], i, oldArr)) {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}

var oldArr = [-4, 5, -6, -7, 8],
    newArr = myFilter(oldArr, function (name) {
        return name > 0;
    });
alert(newArr);
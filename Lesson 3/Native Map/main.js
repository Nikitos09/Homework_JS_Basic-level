function myMap(oldArr, callback) {
    var i = 0, length = oldArr.length, newArr = [];
    for (i; i < length; i++) {
        newArr[i] = callback(oldArr[i], i, oldArr);
    }
    return newArr;
}

var oldArr = ['HTML', 'CSS', 'JS'],
    newArr = myMap(oldArr, function (name) {
        return name.length;
    });
alert(newArr);



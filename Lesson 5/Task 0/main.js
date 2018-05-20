var arr = [],
    obj = {},
    number = 10;
obj.name = 'Vladimir';
obj.age = 25;

// function isObj(obj) {
//     if (typeof(obj) == 'object') {
//         if (obj.length === undefined) {
//             return 'Это объект'
//         }
//         return 'Это массив'
//     }
//     return 'Это не объект и не массив'
// }


function isObj(obj) {
    return (typeof(obj) == 'object') ? ((obj.length === undefined) ?  'Это объект' :   'Это массив') :
      'Это не объект и не массив';
}
alert(isObj(obj));

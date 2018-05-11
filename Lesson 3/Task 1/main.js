var login = prompt('Ваш логин?',),
    password;

if (login === 'Админ') {
    password = prompt('Ваш пароль?',);
    if (password === 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    } else if (password === null) {
        alert('Вход отменён');
    } else {
        alert('Пароль не верен!');
    }
} else if (login === null) {
    alert('Вход отменён');
} else {
    alert('Я вас не знаю!');
}
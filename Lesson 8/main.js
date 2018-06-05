var btnGet = document.getElementsByTagName('button')[0];

btnGet.onclick = function () {
    var xhr = new XMLHttpRequest();

    if (localStorage.getItem('myUsers') !== null) {
        var storage = localStorage.getItem('myUsers'),
            data = JSON.parse(storage).data;
        build(data);
    } else {
        xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
        xhr.send();

        xhr.onload = function () {
            var data = JSON.parse(this.response).data;

            if (data.length) {
                build(data);
            }

            localStorage.setItem('myUsers', this.response);
        }

        xhr.onerror = function () {
            var errorWindow = document.getElementsByClassName('wrapper')[0];

            errorWindow.classList.add('error');
            errorWindow.innerHTML = '<h2>Простите, произошла ошибка загрузки. Повторите попытку </h2>' +
                '<br><a href="#" title="Очистить все" class="btn btn-primary" onclick="window.location.reload();">Попробовать ещё раз</a>';
        }
    }
}

function build(data) {
    var wrapper = document.getElementsByClassName('wrapper')[0],
        wrapper__tabs = wrapper.getElementsByClassName('wrapper__tabs')[0],
        wrapper__info = wrapper.getElementsByClassName('wrapper__info')[0];

    wrapper__tabs.innerHTML = '';
    wrapper__info.innerHTML = '';
    for (var i = 1; i <= data.length; i++) {
        var tab = document.createElement('div'),
            info = document.createElement('div');

        tab.innerHTML = 'User' + i;
        tab.classList.add('tab');
        tab.id = 'tab' + i;
        tab.setAttribute('onclick', 'showActive(event)');
        wrapper__tabs.appendChild(tab);

        info.innerHTML = '<img src="' + data[i - 1].avatar + '"><h2>' + data[i - 1].first_name + '<br>' + data[i - 1].last_name + '</h2>';
        info.classList.add('info');
        info.id = 'info' + i;
        wrapper__info.appendChild(info);
    }
    wrapper__info.firstChild.classList.add('active');
    wrapper__tabs.firstChild.classList.add('active');
}

function showActive(event) {
    var activeElement = document.getElementsByClassName('active'),
        targetTab = event.target,
        id = targetTab.id[3],
        targetInfo = document.getElementById('info' + id);

    activeElement[0].classList.remove('active');
    activeElement[0].classList.remove('active');
    targetTab.classList.add('active');
    targetInfo.classList.add('active');
}
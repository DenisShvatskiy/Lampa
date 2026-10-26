(function () {
    'use strict';

    var VIDEO_URL = 'https://s9.cdnv365.com/x9/upload_d234d896c6185bec01763f104d7ebed8/45894/45894_480p.mp4';

    function addButton() {
        var list = $('.menu .menu__list').eq(0);

        if (!list.length) return false;

        if (list.find('[data-action="test_plugin"]').length) return true;

        var button = $(
            '<li class="menu__item selector" data-action="test_plugin">' +
                '<div class="menu__ico"><img src="./img/icons/settings/more.svg"></div>' +
                '<div class="menu__text">Тест</div>' +
            '</li>'
        );

        button.on('hover:enter', function () {
            Lampa.Player.play({
                title: 'Тест',
                url: VIDEO_URL
            });
        });

        list.append(button);
        Lampa.Noty.show('Плагин Тест: кнопка добавлена');
        return true;
    }

    function init() {
        var attempts = 0;
        var timer = setInterval(function () {
            attempts++;

            if (addButton() || attempts >= 20) {
                clearInterval(timer);

                if (attempts >= 20) {
                    Lampa.Noty.show('Тест: меню не найдено');
                }
            }
        }, 1000);
    }

    if (window.appready) {
        init();
    } else {
        Lampa.Listener.follow('app', function (event) {
            if (event.type === 'ready') init();
        });
    }
})();

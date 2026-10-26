(function () {
    'use strict';

    var VIDEO_URL = 'https://s9.cdnv365.com/x9/upload_d234d896c6185bec01763f104d7ebed8/45894/45894_480p.mp4';

    function init() {
        // Не добавлять кнопку повторно
        if (document.querySelector('.menu__item[data-action="test_plugin"]')) {
            return;
        }

        var button = $(
            '<li class="menu__item selector" data-action="test_plugin">' +
                '<div class="menu__ico">' +
                    '<img src="./img/icons/settings/more.svg">' +
                '</div>' +
                '<div class="menu__text">Тест</div>' +
            '</li>'
        );

        button.on('hover:enter', function () {
            Lampa.Player.play({
                title: 'Тест',
                url: VIDEO_URL
            });
        });

        $('.menu .menu__list').eq(0).append(button);

        console.log('[Тест] Пункт добавлен в меню');
    }

    if (window.appready) {
        init();
    } else {
        Lampa.Listener.follow('app', function (event) {
            if (event.type === 'ready') {
                init();
            }
        });
    }
})();

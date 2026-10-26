(function () {
    'use strict';

    var VIDEO_URL = 'https://s9.cdnv365.com/x9/upload_d234d896c6185bec01763f104d7ebed8/45894/45894_480p.mp4';

    function init() {
        Lampa.Menu.addButton(
            '<img src="./img/icons/settings/more.svg">',
            'Тест',
            function () {
                Lampa.Player.play({
                    title: 'Тест',
                    url: VIDEO_URL
                });
            }
        );
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

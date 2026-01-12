// ナビゲーション展開
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function() {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
});

// トリガー取得
const scrollTrigger = document.querySelectorAll('.js-scroll-trigger');

// aimation呼び出し
if (scrollTrigger.length) {
    scrollAnimation(scrollTrigger);
}

// aimation関数
function scrollAnimation(trigger) {
    window.addEventListener('scroll', function () {
        for (var i = 0; i < trigger.length; i++) {
            let position = trigger[i].getBoundingClientRect().top,
                scroll = window.pageYOffset || document.documentElement.scrollTop,
                offset = position + scroll,
                windowHeight = window.innerHeight;

            if (scroll > offset - windowHeight + 200) {
                trigger[i].classList.add('is-active');
            }
        }
    });
}
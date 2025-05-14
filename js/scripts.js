$(document).ready(function() {
    // Мобильное меню
    $('.mobile-menu-toggle').click(function() {
        $('nav ul').toggleClass('show');
    });
    
    // Плавная прокрутка к якорям
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });
    
    // Анимация появления элементов при скролле
    $(window).scroll(function() {
        $('.animate-on-scroll').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight > position) {
                $(this).addClass('animated');
            }
        });
    });
    
    // Форма анкеты с валидацией
    $('#bride-form').submit(function(e) {
        e.preventDefault();
        
        var name = $('#name').val();
        var phone = $('#phone').val();
        var date = $('#date').val();
        var budget = $('#budget').val();
        
        var isValid = true;
        
        if (name === '') {
            $('#name').addClass('error');
            isValid = false;
        } else {
            $('#name').removeClass('error');
        }
        
        if (phone === '') {
            $('#phone').addClass('error');
            isValid = false;
        } else {
            $('#phone').removeClass('error');
        }
        
        if (date === '') {
            $('#date').addClass('error');
            isValid = false;
        } else {
            $('#date').removeClass('error');
        }
        
        if (isValid) {
            // Здесь будет код для отправки формы или AJAX запрос
            $('.form-success').show();
            $('#bride-form')[0].reset();
        }
    });
    
    // Галерея изображений с лайтбоксом
    $('.gallery-item').click(function() {
        var imgSrc = $(this).find('img').attr('src');
        $('#lightbox-img').attr('src', imgSrc);
        $('.lightbox').fadeIn();
    });
    
    $('.lightbox-close').click(function() {
        $('.lightbox').fadeOut();
    });
});

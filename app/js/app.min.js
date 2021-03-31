$(window).on("load" , function () {
//live Tabs
    const tab = $('.live__tab')
    const slide = $('.live__slide')
    tab.each(function (index) {
        $(this).on('click', () => {
            slide.each(function () {
                $(this).removeClass('live__slide_active')
            })
            tab.each(function () {
                $(this).removeClass('live__tab_active')
            })
            slide.eq(index).addClass('live__slide_active')
            $(this).addClass('live__tab_active')
        })
})
//feedback form
    function isEmail(email) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email.trim());
    }
    function isWords(name) {
        const regex = /^(([a-zA-Z-а-яА-ЯЁёІіЇїҐґЄє -]{1,80}))$/u
        return regex.test(name.trim());
    }
    function isLetterAndNumber(query) {
        const regex = /^[0-9-a-zA-Z-а-яА-ЯЁёІіЇїҐґЄє -]+$/;
        return regex.test(query.trim());
    }
    function isNumber(tel) {
        const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
        return regex.test(tel.trim());
    }
    const button = $('.feedback-submit')
    const name = $('.feedback-name')
    const email = $('.feedback-email')
    const number = $('.feedback-number')
    const service = $('.feedback-service')
    const message = $('.feedback-message')
    const input = $('.feedback-input')
    input.each(function () {
        $(this).on('click', () => {
            $(this).removeClass('feedback_error')
        })
    })
    button.on('click', () => {
        let count = 0
        if (isEmail(email.val())) {
            email.removeClass('feedback_error')
        } else {
            email.addClass('feedback_error')
            count += 1
        }
        if (isWords(name.val())) {
            name.removeClass('feedback_error')
        } else {
            name.addClass('feedback_error')
            count += 1
        }
        if (isNumber(number.val())) {
            number.removeClass('feedback_error')
        } else {
            number.addClass('feedback_error')
            count += 1
        }
        if (isWords(service.val())) {
            service.removeClass('feedback_error')
        } else {
            service.addClass('feedback_error')
            count += 1
        }
        if (isLetterAndNumber(message.val())) {
            message.removeClass('feedback_error')
        } else {
            message.addClass('feedback_error')
            count += 1
        }
        if (count === 0) {
            console.log('Name: ' + name.val())
            console.log('Number: ' + number.val())
            console.log('Email: ' + email.val())
            console.log('Service: ' + service.val())
            console.log('Message: ' + message.val())
        }
    })
//live gallery
    const img = $('.live-gallery-img')
    const popUp = $('.popup')
    const bigImg = $('.popup-img')
    popUp.on('click', () => {
        popUp.removeClass('popup_active')
    })
    img.each(function () {
        $(this).on('click', () => {
            popUp.addClass('popup_active')
            bigImg.attr('src', $(this).attr('src'))
        })
    })
//header burger
    const burger = $('.header__burger')
    const headerMenu = $('.header__menu')
    const menuHeight = document.querySelector('.header__menu').scrollHeight + 20 + 'px'
    burger.on('click', () => {
        headerMenu.toggleClass('header__menu_active')
        burger.toggleClass('header__burger_active')
        if (burger.hasClass('header__burger_active')) {
            headerMenu.css({'max-height':menuHeight})
            setTimeout(() => {
                headerMenu.css({'overflow':'visible'})
            }, 500)
        } else {
            headerMenu.css({'max-height':'0px'})
            headerMenu.css({'overflow':'hidden'})
        }
    })
})
// animation
const anime = function (element, px) {
    let scrolled = false
    let top = element.offset().top - ($(window).height())
    if ($(document).scrollTop() >= top - 100) {
        element.css({'transition-duration':'0s'})
        element.css({'transform':'translateY(' + px + 'px)'})
        scrolled = true
    } else {
        scrolled = false
    }
    $(document).on('scroll', () => {
        if (!scrolled) {
            if ($(document).scrollTop() >= top) {
                element.css({'transform':'translateY(' + px + 'px)'})
            }
        }
    })
}
anime($('.we-dog'), '0')
anime($('.our__container'), '0')
anime($('.make'), '0')
anime($('.services__all'), '0')
anime($('.feedback__container'), '0')
anime($('.live__container'), '-80')
anime($('.customers__feedbacks'), '0')
anime($('.about-dog'), '0')
anime($('.about__numbers'), '0')
anime($('.footer__top'), '0')
anime($('.footer__bottom'), '0')
$('.header').css({'transform':'translateY(0)'})
$('.banner__container').css({'transform':'translateY(0)'})



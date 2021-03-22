$(function() {
    $('.button-body').click(function() {
        $('body').toggleClass('dark')

        if($('body').hasClass('dark')) {
            $('span.button').css('left', '37px')
        }else{
            $('span.button').css('left', '9px')
        }
    })

    var el = $('header')


    $('.navbar-toggler-icon').click(function() {
        $('body').toggleClass('clicked-nav')

        if($('body').hasClass('clicked-nav')) {
            $('header').animate({
                "height": '693px'
            },400)
        }else{
            $('header').animate({
                "height": '80px'
            },400)
        }
    })
})
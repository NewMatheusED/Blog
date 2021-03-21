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

    curHeight = el.height();
    autoHeight = el.css('height', 'auto').height();

    $('.navbar-toggler-icon').click(function() {
        $('body').toggleClass('clicked-nav')

        if($('body').hasClass('clicked-nav')) {
            $('header').animate({
                "height": autoHeight
            },400)
        }else{
            $('header').animate({
                "height": '80px'
            },400)
        }
    })
})
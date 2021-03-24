$(function() {
    $('.button-body').click(function() {
        $('body').toggleClass('dark')

        if($('body').hasClass('dark')) {
            $('span.button').css('left', '37px')
        }else{
            $('span.button').css('left', '9px')
        }
    })

    /*******************************************/

    $('.navbar-toggler-icon').click(function() {
        $('body').toggleClass('clicked-nav')

        if($('body').hasClass('clicked-nav')) {
            $('header').animate({
                "height": '693px'
            },100)
        }else{
            $('header').animate({
                "height": '80px'
            },100)
        }
    })

    /*******************************************/

        const screenW = screen.width;
        const windoW = window.innerWidth();

        if(screenW >= 1008 && windoW >= 1008) {
            $('header').css('height', '693px')
            console.log(`${screenW} maior`)
        } else if(screenW < 1008 && windoW < 1008) {
            $('header').css('height', '80px')
            console.log(`${screenW} menor`)
        }

})
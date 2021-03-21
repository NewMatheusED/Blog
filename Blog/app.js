$(function() {
    $('.button-body').click(function() {
        $('body').toggleClass('dark')

        if($('body').hasClass('dark')) {
            $('span.button').css('left', '37px')
        }else{
            $('span.button').css('left', '9px')
        }
    })
})
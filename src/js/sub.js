var f = true;
$(window).scroll(function(){
    var scrTop = $(this).scrollTop();
    var winH = $(this).height();
    let innerHeight = $(this).innerHeight();
    let scrollHeight = $('body').prop('scrollHeight');

    if(innerHeight + scrTop >= scrollHeight) {
        $('.go-to-top').css('bottom' , '210px');
    } else {
        $('.go-to-top').css('bottom' , '60px');
    }
    if(scrTop > 50 ) {
        $('header').addClass('active');
        $('.logo img').attr('src' , '../image/icon/logo.png');
    } else {
        $('header').removeClass('active');
        $('.logo img').attr('src' , '../image/icon/logo_white.png');
    }
    scrTop > winH - 150 ? $('.go-to-top').addClass('show') : $('.go-to-top').removeClass('show');

    $('section').each(function(i){
        var secOff = $(this).offset();
        var startPoint = 150;

        if(secOff.top - startPoint <= scrTop && scrTop <= secOff.top + winH) {
            $(this).addClass('active');
        }
    });
    if(scrTop >= 1260) {
        $('.member-type-wrap li').css('animation-name' , 'circle-mv');
        $('.img-wrap img').eq(0).css('animation-name' , 'hand-mv');
        $('.img-wrap img').eq(1).css('animation-name' , 'effect-mv');
        $('.circle-wrap li').eq(0).css('animation-name' , 'visual-circle-mv1');
        $('.circle-wrap li').eq(1).css('animation-name' , 'visual-circle-mv2');
        $('.circle-wrap li').eq(2).css('animation-name' , 'visual-circle-mv3');
    }
    if(scrTop >= 1000) {
        $('.graph-wrap').addClass('active');  
    }
    if(scrTop >= 600) {
        if(f == true) {
            $('.counter').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({ countNum: $this.text()}).animate({
                  countNum: countTo
                },
                {
                  duration: 1000,
                  easing:'linear',
                  step: function() {
                    $this.text(Math.floor(this.countNum).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                  },
                  complete: function() {
                    $this.text(this.countNum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                  }
                });  
            });
            f = false;
        }    
    }
});
$('.go-to-top-link').click(function(e){

    $('html , body').stop();
    $('html , body').animate({scrollTop : 0} , 1000);

    return false;
});
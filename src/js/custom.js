let CORE = {
    appSet : {
        'gnbActive' : false,
    },
    init : function() {
        this.topMenuIndicator();
        this.naviMouseEvent();
    },
    // GNB indicator init
    topMenuIndicator : function() {
        $('nav a.here').addClass('on');
        $('h1').on('click', function(){
            window.location.href = '/';
        })
    },
    // GNB indicator operate
    naviMouseEvent : function() {
        $('nav a').on('mouseenter', function(){
            $('nav a').each(function(){
                $(this).removeClass('on');
            });
            $(this).addClass('on');
            CORE.appSet.gnbActive = true;
        });
        $('nav a').on('mouseleave', function(){
            $(this).removeClass('on');
            CORE.appSet.gnbActive = false;           
            if(!CORE.appSet.gnbActive){
                $('nav a.here').addClass('on');
            }
            
        });
    },
}

// apply AOS plugin
AOS.init({
    easing: 'ease-out-back',
    duration: 1000
}); 

// after loaded execute
window.onload = function() {
    CORE.init();
};

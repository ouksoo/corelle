let CORE = {
    appSet : {
        'gnbActive' : false,
    },
    init : function() {
        this.topMenuIndicator();
        this.naviMouseEvent();
        this.realTabOperation();
        this.frequentlyAskedQuestions();

        // custom scrollbar plug
        if($('div.video-detail div.s').length > 0) {
            $('div.video-detail div.s').mCustomScrollbar({
                theme : 'eoksoo'
            });   
        }
        $('#innerGallery').bjqs({
            height      : 1024,
            width       : 1680,
            responsive  : true
        });
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
    // TAB plug
    realTabOperation : function() {
        $('.tabsets.real-tab a').on('click', function() {
            let tabIndex =  $(this).data('tabContent');
            $(this).siblings().removeClass('on');            
            $(this).addClass('on');
        });
    },
    // FAQ
    frequentlyAskedQuestions : function() {
        $('.questions a.question-link').on('click', function(e){
            e.preventDefault();
            if(!$(this).hasClass('on')) {
                $('.questions div.answer').slideUp(300);    
            }
            $('.questions a.question-link').removeClass('on');
            $(this).addClass('on');
            $(this).next('.answer').slideDown(300);
        });
    },
    // Article Show
    articleShowGallery : function() {
        $('div.article-area a.show').on('click', function(){
            
        });
    }
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

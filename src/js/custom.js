let appendSubmenu = '';
appendSubmenu += '<div class="nav-sub clearfix">';
appendSubmenu += '  <div class="show-submenu clearfix">';
appendSubmenu += '      <ul>';
appendSubmenu += '          <li><a href="#">코렐 브랜드 소개/역사</a></li>';
appendSubmenu += '          <li><a href="#">회사위치및 정보</a></li>';
appendSubmenu += '          <li><a href="#">홍보영상 및 보도자료</a></li>';
appendSubmenu += '      </ul>';
appendSubmenu += '      <ul class="brands">';
appendSubmenu += '          <li><a href="#">Corelle</a></li>';
appendSubmenu += '          <li><a href="#">Pyrex</a></li>';
appendSubmenu += '          <li><a href="#">Vision</a></li>';
appendSubmenu += '          <li><a href="#">Corningware</a></li>';
appendSubmenu += '          <li><a href="#">Snapware</a></li>';
appendSubmenu += '          <li><a href="#">Chicaco Cutlery</a></li>';
appendSubmenu += '          <li><a href="#">Corelle cookware</a></li>';
appendSubmenu += '          <li><span class="line"></span></li>';
appendSubmenu += '          <li><a href="#">OXO</a></li>';
appendSubmenu += '      </ul>';
appendSubmenu += '      <ul>';
appendSubmenu += '          <li><a href="#">제품소개</a></li>';
appendSubmenu += '      </ul>';
appendSubmenu += '      <ul>';
appendSubmenu += '          <li><a href="#">자주묻는 질문</a></li>';
appendSubmenu += '          <li><a href="#">1:1문의</a></li>';
appendSubmenu += '          <li><a href="#">품질보증 및 보관방법</a></li>';
appendSubmenu += '          <li><a href="#">매장안내</a></li>';
appendSubmenu += '      </ul>';
appendSubmenu += '      <ul>';
appendSubmenu += '          <li><a href="#">새로운 소식</a></li>';
appendSubmenu += '          <li><a href="#">이벤트</a></li>';
appendSubmenu += '      </ul>';
appendSubmenu += '      <ul class="webzine">';
appendSubmenu += '          <li class="s"><a href="#">테이블 텔링</a></li>';
appendSubmenu += '          <li class="s"><a href="#">마켓스트리트뉴욕</a></li>';
appendSubmenu += '          <li class="s"><a href="#">파이렉스의 키친놀로지</a></li>';
appendSubmenu += '      </ul>';
appendSubmenu += '  </div>';
appendSubmenu += '</div>';


let CORE = {
    appSet : {
        'gnbActive' : false,
    },
    init : function() {
        //submenu append
        $('header').append(appendSubmenu);

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
        $('nav a.here').parent().addClass('on');
        $('h1').on('click', function(){
            window.location.href = '/';
        })
    },
    // GNB indicator operate
    naviMouseEvent : function() {
        $('nav li').on('mouseenter', function(){
            $('nav li').each(function(){
                $(this).removeClass('on');
            });
            $(this).addClass('on');
            $('header .nav-sub').stop().fadeIn('fast');
            CORE.appSet.gnbActive = true;
        });
        $('nav li').on('mouseleave', function(){
            $(this).removeClass('on');
            CORE.appSet.gnbActive = false;           
            if(!CORE.appSet.gnbActive){
                $('nav a.here').parent().addClass('on');
                $('header .nav-sub').stop().fadeOut('fast');
            }
        });
        $('header .nav-sub').on('mouseover', function(){
            $('nav li').each(function(){
                $(this).removeClass('on');
            });
            $('header .nav-sub').stop()
            $(this).css('display','block');
        });
        $('header .nav-sub').on('mouseout', function(){
            $('header .nav-sub').stop()
            $(this).fadeOut();
            if(!CORE.appSet.gnbActive){
                $('nav a.here').parent().addClass('on');
                $('header .nav-sub').stop().fadeOut('fast');
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
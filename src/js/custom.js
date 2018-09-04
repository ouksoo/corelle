let CORE = {
    init : function() {
        this.topMenuIndicator();
    },
    // GNB indicator
    topMenuIndicator : function() {
        $('nav a.here').addClass('on');
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

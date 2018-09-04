let CORE = {
    init : function() {
        console.log('init');
    },

}

// apply AOS plugin
AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

CORE.init();

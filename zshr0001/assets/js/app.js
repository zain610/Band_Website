
$(function() {

    // Call Gridder
    $('.gridder').gridderExpander({
    	scroll: true,
    	scrollOffset: 30,
        scrollTo: "panel",                  // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: true,                      // Show Navigation
        nextText: "<span>__</span>",        // Next button text
        prevText: "<span>__</span>",               // Previous button text
        closeText: "<span>__</span",                 // Close button text
        onStart: function(){
            //Gridder Inititialized
        },
        onContent: function(){
            //Gridder Content Loaded
        },
        onClosed: function(){
            //Gridder Closed
        }
    });

//jquery code to run type-it code
    new TypeIt('.Intro-place', {
    	breakLines: false,
    	autoStart: false
    });

    new TypeIt('.everyone', {
    	breakLines: false,
    	autoStart: false
    });
});
//code to run audio.js
audiojs.events.ready(function() {
    var as = audiojs.createAll();
  });




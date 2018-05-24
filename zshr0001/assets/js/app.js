
$(function() {

    // Call Gridder
    $('.gridder').gridderExpander({
    	scroll: true,
    	scrollOffset: 30,
        scrollTo: "panel",                  // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: true,                      // Show Navigation
        nextText: "Next",                   // Next button text
        prevText: "Previous",               // Previous button text
        closeText: "Close",                 // Close button text
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




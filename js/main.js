$(document).ready(function() {
    $(document).foundation();
    $('.top-bar').on('sticky.zf.stuckto:top', function(){
        $(this).addClass('shrink');
      }).on('sticky.zf.unstuckfrom:top', function(){
        $(this).removeClass('shrink');
    });

    function fullscreen(){
		jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
	}
  
	fullscreen();

    // Run the function in case of window resize
    jQuery(window).resize(function() {
        fullscreen();         
    });


    var rellax = new Rellax('.rellax');
    function resize() {  
        var intViewportWidth = window.innerWidth;
        console.log(intViewportWidth);
        if (intViewportWidth < 850) {
            rellax.destroy();
            console.log('destroyed');
        }
        else {
            rellax.refresh();
        }
    }
    resize();
    window.onresize = resize;
});

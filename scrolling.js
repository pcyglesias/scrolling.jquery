jQuery.fn.scrolling = function(){
    var that = jQuery(this);
    that.children('a[href*=#]').click(function(){
      jQuery('html, body').animate({
        scrollTop: (jQuery( jQuery.attr(this, 'href') ).offset().top) - 20
      }, 500);
      return false;
    });
};

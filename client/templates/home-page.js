Template.homePage.rendered = function(){
  var $el = $(this.firstNode);
  
  $el.css({
    top: $(window).height() / 2 - $el.outerHeight() / 2
  });
};

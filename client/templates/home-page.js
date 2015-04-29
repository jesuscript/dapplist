
Template.homePage.rendered = function(){
  var self = this;
  
  var vCenter = function(){
    var $el = $(self.firstNode);

    $el.css({
      top: $(window).height() / 2 - $el.outerHeight() / 2
    });
  };

  $(window).resize(vCenter);

  $("img").load(vCenter);

  vCenter();
};

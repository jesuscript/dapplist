var DOGE_PERIOD = 3000,//ms
    DOGE_PROBABILITY = 0.25,
    DOGE_DURATION = 700;//ms
    
var toDogeOrNotToDoge = function(){
  var x = Math.random();

  if(x < DOGE_PROBABILITY){
    Session.set("engage-the-doge", Math.floor(Math.random() * 2));// 0:left , 1:right

    setTimeout(function(){
      Session.set("engage-the-doge", null);
    }, DOGE_DURATION);
  }
};

var dogeInterval;

Template.doge.rendered = function(){
  dogeInterval = setInterval(toDogeOrNotToDoge, DOGE_PERIOD);
};

Template.doge.destroyed = function(){
  clearTimeout(dogeInterval);
};

Template.doge.helpers({
  doge: function(){
    var dogeI = Session.get("engage-the-doge");
    return (dogeI !== null) && ["dogeleft.png", "dogeright.jpg"][dogeI];
  },
  duckPos: function(){
    var dogeI = Session.get("engage-the-doge"),
        t;
    if(dogeI === 0){//left
      t = Math.round(($(window).height() - 250) * Math.random()) + "px";
      l = 0;
      return "left:0;top:"+t+";";
    }
    if(dogeI === 1){//right
      t = Math.round(($(window).height() - 250) * Math.random()) + "px";

      return "right:0;top:"+t+";";
    }
  }
});

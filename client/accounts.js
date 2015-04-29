Accounts.onEmailVerificationLink(function(token, done){
  Accounts.verifyEmail(token, function(err){
    if(err){
      console.log("err", err);
    }else{
      done();
      Meteor.call("addToMaillist", function(err){
        if(err){
          throw err;
        } else {
          Session.set("showVerifiedFeedback", true);
          setTimeout(function(){
            Session.set("showVerifiedFeedback");
          }, 10000);
        }
      });
    }
  });
});

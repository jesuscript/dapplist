AutoForm.hooks({
  signupForm: {
    onSuccess: function(){
      Session.set("showFeedback", true);
      setTimeout(function(){
        Session.set("showFeedback");
      }, 5000);
    }
  }
});

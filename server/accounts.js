Meteor.startup(function(){
  Accounts.emailTemplates.from = "DappList <dapplist@dappninja.com>";
  Accounts.emailTemplates.verifyEmail.subject = function(user){
    return "Please confirm your email address";
  };
});

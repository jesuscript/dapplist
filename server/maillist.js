Maillist = function(){
  if((Meteor.settings || {}).MAILGUN_API_KEY){
    this.mailgun = new Mailgun({
      apiKey: Meteor.settings.MAILGUN_API_KEY,
      domain: Meteor.settings.MAILGUN_DOMAIN
    });
  }else{
    console.warn("Maillist: MAILGUN_API_KEY not found in settings");
  }
};

_(Maillist.prototype).extend({
  addMember: function(user){
    this.checkMailgun();
    
    this.mailgun.api.lists(Meteor.settings.LIST_NAME || "members@dapplist.net").members().create({
      address: user.emails[0].address,
      name: user.profile.name
    }, function(err, data){
      if(err){
        throw new Meteor.Error(err);
      }else{
        console.log(data);
      }
    });
  },
  removeMemeber: function(){
    this.checkMailgun();

    //TODO
  },
  checkMailgun: function(){
    if(!this.mailgun) throw new Meteor.Error("Maillist: Mailgun not initialised");
  }
});


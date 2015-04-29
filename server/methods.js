var maillist = new Maillist();

Meteor.methods({
  signup: function(doc){
    if(!doc.acceptedTerms) return;

    Accounts.sendVerificationEmail(Accounts.createUser({
      email: doc.email,
      password: Meteor.uuid(),
      profile: {
        skillLevel: doc.skillLevel,
        name: doc.name
      }
    }));
  },
  addToMaillist: function(){
    var user = Meteor.user();
    
    if(user){
      if(user.emails[0].verified){
        maillist.addMember(user);
      }else{
        throw new Meteor.Error("unverified-email", "Email address " + email.address + " is not "
                               + "verified");
      }
    }else{
      throw new Meteor.Error("logged-out", "No logged in user found.");
    }
  },
  isEmailRegistered: function(email){
    return !!Meteor.users.findOne({"emails.address": email});
  }
});

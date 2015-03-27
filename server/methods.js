Meteor.methods({
  signup: function(doc){
    if(!doc.acceptedTerms) return;

    Accounts.createUser({
      email: doc.email,
      password: Meteor.uuid(),
      profile: {
        skillLevel: doc.skillLevel
      }
    });
  }  
});

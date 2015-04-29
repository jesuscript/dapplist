SignupSchema = new SimpleSchema({
  name: {
    type: String,
    optional: true
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    unique: true,
    custom: function(){
      if(Meteor.isClient && this.isSet){
        var s = SignupSchema.namedContext("signupForm");

        Meteor.call("isEmailRegistered", this.value,  function(err, res){
          if(res){
            s.addInvalidKeys([
              {name: "email", type: "alreadySubscribed"}
            ]);
          }
        });
      }
    }
  },
  skillLevel: {
    type: String,
    allowedValues: ["beginner", "intermediate", "advanced", "expert"]
  },
  acceptedTerms: {
    type: Boolean,
    allowedValues: [true],
    label: "I accept the Terms and Conditions"
  }
});



SimpleSchema.messages({
  alreadySubscribed: "Already subscribed"
});

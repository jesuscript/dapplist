SignupSchema = new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
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




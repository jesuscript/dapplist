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
    label: "",
    allowedValues: [true]
  }
});



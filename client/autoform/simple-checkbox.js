console.log("huy");

AutoForm.addInputType("simple-checkbox", {
  template: "afSimpleCheckbox",
  valueOut: function(){
    return this.is(":checked");
  },
  valueIn: function(){
    console.log("val in", arguments);
  },
  contextAdjust: function(context){
    if (context.value === true) {
      context.atts.checked = "";
    }
    //don't add required attribute to checkboxes because some browsers assume that to mean that it must be checked, which is not what we mean by "required"
    delete context.atts.required;
    return context;
  }
});

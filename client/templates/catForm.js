
Template.catForm.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.catForm.events({
  "click #saveCat": function(event, template){
    event.preventDefault();

    console.log(event.target.catInput.value)



  }
});

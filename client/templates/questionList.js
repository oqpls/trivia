Template.questionList.events({
  'click #add': function(e) {
    e.preventDefault();
    
    Modal.show("qform");
  },
  "click .delete": function () {
      Questions.remove(this._id);
    }

});

Template.catTemplate.helpers({
    categories: function () {
      return Categories.find({}).fetch({});
    }
  });
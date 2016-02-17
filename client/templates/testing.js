Template.testing.events({


  })

  Template.catTemplate.helpers({
    categories: function () {
      return Categories.find({}).fetch({});
    }
  });

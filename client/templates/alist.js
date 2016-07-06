Template.alist.helpers({
    answers: function () {
      return Meteor.answers.find({}).fetch({});
    },
  });

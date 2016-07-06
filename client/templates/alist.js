Template.alist.helpers({
    answers: function () {
      return Meteor.Answers.find({}).fetch({});
    },
  });

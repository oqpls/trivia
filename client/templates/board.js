


Template.board.helpers({
    users: function () {
      return Meteor.users.find({}).fetch({});
    },
});


Template.board.events({
    'click .clickrow': function(event){
  //to do: actually make the form save data.
     event.preventDefault();
    console.log(Meteor.users.find().fetch());

},


});

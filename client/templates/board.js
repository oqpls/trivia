

Template.board.helpers({
    users: function () {
      return Users.find({}).fetch({});
    },

});


Template.board.events({
    'click .clickrow': function(event){
  //to do: actually make the form save data.
     event.preventDefault();
    console.log(Meteor.userId());
    console.log(users)
},
});

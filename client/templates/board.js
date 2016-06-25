

Template.board.helpers({
    users: function () {
      return Users.find({}).fetch({});
    },
    test : "potato"

});


Template.board.events({
    'click .row': function(event){
  //to do: actually make the form save data.
     event.preventDefault();
    console.log(Meteor.userId());
    console.log(users)
},
});




Template.board.helpers({
    users: function () {
      return Meteor.users.find({}).fetch({});
    },
  });

Template.board.events({
    'click .clickrow': function(event){
  //to do: actually make the form save data.
  console.log("test");
},
"click .delete": function (e) {
    Meteor.users.remove(e.currentTarget.attributes.data.value);
    console.log(e.currentTarget.attributes.data.value);
  },
});

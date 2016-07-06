if (Meteor.isServer) {


  Meteor.startup(function () {
   Categories = new Mongo.Collection('categories');
   Questions = new Mongo.Collection('questions');
   Answers = new Mongo.Collection('answers');
     console.log("server going");

  });

  Meteor.users.allow({
  remove: function () { return true; }
  });

  Meteor.publish('allUsers', function(){
    return Meteor.users.find({}, {fields: {emails: 1, createdAt: 1}})

  });

  Meteor.publish('allUsers', function(){
    return Meteor.users.find({}, {fields: {emails: 1, createdAt: 1}})

  });


}

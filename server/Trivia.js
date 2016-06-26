if (Meteor.isServer) {


  Meteor.startup(function () {
   Categories = new Mongo.Collection('categories');
   Questions = new Mongo.Collection('questions');
   Answers = new Mongo.Collection('answers');
     console.log("server going");

  });


}

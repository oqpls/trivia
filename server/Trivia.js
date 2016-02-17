if (Meteor.isServer) {
    
    
  Meteor.startup(function () {
   Categories = new Mongo.Collection('categories');
   Questions = new Mongo.Collection('questions');
     console.log("server going");
    
  });
  
  
}

/**Template.afrom.created = function() {
  Meteor.Loader.loadCss("../sylesheets/aform.css");
};
*/
Answers = new Mongo.Collection('answers');
//Users = new Mongo.Collection('users');
var Users = function () {
  return users.find({}).fetch({});
}
Template.aform.helpers({
questions: function () {
  return Questions.find({}).fetch({});
},
/*users: function () {
  return Users.find({}).fetch({});
}*/

});

Template.aform.events({
  "click #a": function () {
    fag = Questions.find().fetch();
    console.log(fag);
  },
  "click .card-action": function(e){
    /*Answers.insert({
      userId: $("[name= db.getCollection('users').find({_id})]").val(),
      Answer: $("[name='answer']").val(),
    });*/
    $( e.currentTarget ).parent().parent().parent().parent().slideUp();
    console.log(e.currentTarget.attributes.data.value); //questionID
    console.log(Meteor.userId());
    console.log($("#"+e.currentTarget.attributes.data.value).val())
    console.log(Questions.findOne(e.currentTarget.attributes.data.value).option1)

  //  console.log(db.getCollection('users').find({_id}));

  }

});

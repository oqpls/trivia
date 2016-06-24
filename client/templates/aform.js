/**Template.afrom.created = function() {
  Meteor.Loader.loadCss("../sylesheets/aform.css");
};
*/


Template.aform.helpers({
questions: function () {
  return Questions.find({}).fetch({});
}
});
Template.aform.events({
  "click #a": function () {
    fag = Questions.find().fetch();
    console.log(fag);
  },
  "click .card-action": function(question){
    console.log(question);
  }

});

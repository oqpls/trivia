/**Template.afrom.created = function() {
Meteor.Loader.loadCss("../sylesheets/aform.css");
};
*/
Answers = new Mongo.Collection('answers');
//Users = new Mongo.Collection('users');

Template.aform.helpers({
  questions: function () {
    return Questions.find({}).fetch({});
  },
  /*users: function () {
  return Users.find({}).fetch({});
}*/

});

Template.aform.events({
  "click #close": function (e) {
    event.preventDefault();
    console.log("nimic!")
    $( e.currentTarget ).parent().parent().slideUp();
  },
  "click .card-action": function(e){
    //event.preventDefault();
    Answers.insert({
      userId: Meteor.userId(),
      Answer: $("#"+e.currentTarget.attributes.data.value).val(),
      QuestionID: e.currentTarget.attributes.data.value,
      DateAns : new Date(),
      AnsValid : false,
    });
    //validate
    var rasp = $("#"+e.currentTarget.attributes.data.value).val().toLowerCase();
    var raspC = Questions.findOne(e.currentTarget.attributes.data.value).option1.toLowerCase() ;

    if (rasp == raspC) {
      //If answer matches
      console.log("Raspunsuri",rasp,raspC);
      $( e.currentTarget).parent().addClass("btn-success");
    }
    else {
      console.log("gresit!!");
      $( e.currentTarget ).parent().addClass("btn-warning");
    }
    //$( e.currentTarget ).parent().parent().parent().parent().slideUp();
    console.log(e.currentTarget.attributes.data.value); //questionID
    console.log(Meteor.userId());
    console.log($("#"+e.currentTarget.attributes.data.value).val()) //Input Answer
    console.log(Questions.findOne(e.currentTarget.attributes.data.value).option1)//Answer from Qform
    console.log("ceva ",Answers.find().fetch())

    //  console.log(db.getCollection('users').find({_id}));

  }

});

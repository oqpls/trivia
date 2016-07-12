/**Template.afrom.created = function() {
Meteor.Loader.loadCss("../sylesheets/aform.css");
};
*/
//Answers = new Mongo.Collection('answers');
//Users = new Mongo.Collection('users');

Template.aform.helpers({
  questions: function () {
    return Questions.find({}, {limit: 25}).fetch({});
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

    //validate
    var rasp = $("#"+e.currentTarget.attributes.data.value).val().toLowerCase();
    var raspC = Questions.findOne(e.currentTarget.attributes.data.value).option1.toLowerCase() ;
    var newScore = 0;

    var compare = function() {
      $( e.currentTarget).addClass("hidden");
    if (rasp == raspC) {
      //If answer matches
      console.log("Raspunsuri",rasp,raspC);
      $( e.currentTarget).parent().addClass("btn-success");
      newScore = 15;
      console.log(newScore);
      return true
    }
    else {
      console.log("gresit!!");
      $( e.currentTarget ).parent().addClass("btn-warning");
      return false
    }}
    //$( e.currentTarget ).parent().parent().parent().parent().slideUp();
    console.log(e.currentTarget.attributes.data.value); //questionID
    console.log(Meteor.userId());
    console.log($("#"+e.currentTarget.attributes.data.value).val()) //Input Answer
    console.log(Questions.findOne(e.currentTarget.attributes.data.value).option1)//Answer from Qform
    console.log("ceva ",Answers.find().fetch())

    var currQuestion = $(e.currentTarget).siblings()[0].lastElementChild.innerText.toString()
    currQuestion = currQuestion.replace(/\r?\n|\r/g, '');
    console.log(currQuestion);

    console.log($(e.currentTarget).siblings()); //Returns Question form content -> to find title value


    Answers.insert({
      userId: Meteor.userId(),
      Answer: $("#"+e.currentTarget.attributes.data.value).val(),
      QuestionID: e.currentTarget.attributes.data.value,
      DateAns : new Date(),
      AnsValid : compare(),
      Score : newScore,
      Question:currQuestion,
      CorrAns: Questions.findOne(e.currentTarget.attributes.data.value).option1.toLowerCase()
    });
    //  console.log(db.getCollection('users').find({_id}));

  }

});

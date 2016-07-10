Answers = new Mongo.Collection('answers')

Template.alist.helpers({
  answers2: function () {
    return Answers.find({userId:Router.current().params._id}).fetch({});
  },
  sum: function(){
    var sum=0;
    var cursor=Answers.find({userId:Router.current().params._id});
    cursor.forEach(function(answer){
      sum = sum + answer.Score
      }
    );
    return sum; }

});
Template.alist.rendered = function() {
   if(!this._rendered) {
     console.log(this);
   } };

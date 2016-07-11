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
    return sum; },

    user: function () {
      console.log( Meteor.users.findOne({_id:Router.current().params._id}))
      return Meteor.users.findOne({_id:Router.current().params._id})
    },

    progress: function () {
      return Answers.find({userId:Router.current().params._id}).count();
    }
});
Template.alist.rendered = function() {
   if(!this._rendered) {
     $('#accordion, #bs-collapse')
       .on('show.bs.collapse', function(a) {
         $(a.target).prev('.panel-heading').addClass('active');
       })
       .on('hide.bs.collapse', function(a) {
         $(a.target).prev('.panel-heading').removeClass('active');
       });
   } };

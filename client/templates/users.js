

 Template.users.helpers({
    users: function () {
      return Meteor.users.find({}).fetch({});
      console.log(this._id);

    },
    getId: function(){
      return this._id
    },

    sum: function(user){
      /*  console.log(Template.instance().this._id.get());
      var sum=0;
      var cursor=Answers.find({userId:this._id});
      cursor.forEach(function(answer){
        sum = sum + answer.Score }
      );*/
      console.log(getId())
      return this; }

  });


/*
  Template.users.helpers({
    answers2: function () {
      return Answers.find({user.emails.[0].address}).fetch({});
    },
    sum: function(){
      var sum=0;
      var cursor=Answers.find({userId:Router.current().params._id});
      cursor.forEach(function(answer){
        sum = sum + answer.Score }
      );
      return sum; }

  });
*/

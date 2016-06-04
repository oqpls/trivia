if (Meteor.isClient) {

  // counter starts at 0



  Router.route('/', function () {
    this.render('/home');
  });
  Router.route('/test', function () {
    this.render('test');
  });
  Router.route('/register', function () {
    this.render('register');
  });
  Router.route('/rules', function () {
    this.render('rules');
  });
  Router.route('/board', function () {
    this.render('board');
  });
  Router.route('/qform', function () {
    this.render('qform');
  });
  Router.route('/questionList', function () {
    this.render('questionList');
  });
  Router.route('/aform', function () {
    this.render('aform');
  });
  Router.route('/testing', function () {
    this.render('testing');
  });



  Template.register.events({
      'submit form': function(event){
          event.preventDefault();
          var email = $('[name=email]').val();
          var password = $('[name=password]').val();
          Accounts.createUser({
              email: email,
              password: password
          });
          Router.go('home');
      }
  });


    Template.questionList.helpers({
    questions: function () {
      return Questions.find({}).fetch({});
    }
  });


      Template.qform.helpers({
    categories: function () {
      return Categories.find({}).fetch({});
    },
    questions: function () {
      return Questions.find({}).fetch({});
    }
  });

  Template.categories.helpers({
    categories: function () {
      return Categories.find({}).fetch({});
    }
  });



}

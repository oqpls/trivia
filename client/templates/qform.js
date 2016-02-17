  Categories = new Mongo.Collection('categories');
   Questions = new Mongo.Collection('questions');

Template.qform.events({    
    'submit form': function(event){
        
        //to do: actually make the form save data. 
     event.preventDefault();
    console.log(event.target.question.value);
    console.log(event.target.textoption1.value);
    console.log(event.target.textoption2.value);
    console.log(event.target.textoption3.value);
},

// ask for money if they try to use more than one 

    'click [type=checkbox]' : function(){
        console.log('check click')
      if(  $("input:checkbox:checked").length > 1){
          
                event.preventDefault();
                Alerts.set('Unlock the paid version for multiple answers', 'info')
      }
    },
    
    // saving the questions
    
    'click #save': function(e) {
    e.preventDefault();
    
   var cAnswers = [];
  $('input[type=category]:checked').each(function() {
    categories.push($(this).val());
  });
    
    Questions.insert({
      name: $("[name='question']").val(),
      option1: $("[name='textoption1']").val(),
      option2: $("[name='textoption2']").val(),
      option3: $("[name='textoption3']").val(),
      corectAnswer: cAnswers,
      category: $( "#category1 option:selected" ).val()
        });

    $('.modal').modal('hide');
  },
  
    'change select' : function(event){
           event.preventDefault();
           
   console.log($( "#category1 option:selected" ).val());
}  
});
Endeavour.PersonalState = SC.State.extend({ 
  
  initialSubstate: 'loadPersonalState',
  
    loadPersonalState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadPersonalState');
        Endeavour.getPath('personalView.mainPane').append();
        SC.routes.set('location', 'personal_information');
      },
      
      goToNewAccountState: function() {
        this.gotoState('NewAccountState');
      },
      
      goToSocialState: function() {
        this.gotoState('SocialState');
      },
    
      exitState:function() {
        Endeavour.getPath('personalView.mainPane').remove();
      }
      
    })

});
Endeavour.NewAccountState = SC.State.extend({ 
  
  initialSubstate: 'loadNewAccountState',
  
    loadNewAccountState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadNewAccountState');
        Endeavour.getPath('newAccountView.mainPane').append();
        SC.routes.set('location', 'new_account');
      },
      
      goToLoginState: function() {
        this.gotoState('LoginState');
      },
      
      goToPersonalState: function() {
        this.gotoState('PersonalState');
      },
    
      exitState:function() {
        Endeavour.getPath('newAccountView.mainPane').remove();
      }
      
    })

});
Endeavour.SocialState = SC.State.extend({ 
  
  initialSubstate: 'loadSocialState',
  
    loadSocialState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadSocialState');
        Endeavour.getPath('socialView.mainPane').append();
        SC.routes.set('location', 'social_information');
      },
      
      goToPersonalState: function() {
        this.gotoState('PersonalState');
      },
      
      goToDesktopState: function() {
        this.gotoState('DesktopState');
      },
    
      exitState:function() {
        Endeavour.getPath('socialView.mainPane').remove();
      }
      
    })

});
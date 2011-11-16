Endeavour.LoginState = SC.State.extend({ 
  
  initialSubstate: 'loadLoginState',
  
    loadLoginState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadLoginState');
        Endeavour.getPath('mainPage.mainPane').append();
        this.invokeLater(this.fadeInTexture, 500);
      },
      
      fadeInTexture: function() {
        Endeavour.mainPage.mainPane.linenView.animate('opacity', .8,{duration: 0.8,timing:'linear'});
        Endeavour.mainPage.mainPane.contentWrapper.animate('opacity', 1.0,{duration: 0.8,timing:'linear'});        
      },
      
      goToDesktopState: function() {
        console.log('goToDesktopState');
        this.gotoState('DesktopState');
      },    
    
      exitState:function() {
        Endeavour.getPath('mainPage.mainPane').remove();
      }
      
    })

});
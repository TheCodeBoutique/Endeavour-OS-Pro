Endeavour.LoginState = SC.State.extend({ 
  
  initialSubstate: 'loadLoginState',
  
    loadLoginState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadLoginState');
        Endeavour.getPath('mainPage.mainPane').append();
        this.invokeLater(this.fadeInTexture, 50);
      },
      
      fadeInTexture: function() {
        Endeavour.mainPage.mainPane.linenView.animate('opacity', .8,{duration: 1.0,timing:'linear'});
        Endeavour.mainPage.mainPane.contentWrapper.animate('opacity', 1.0,{duration: 1.0,timing:'linear'});        
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
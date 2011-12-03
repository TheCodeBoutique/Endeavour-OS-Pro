Endeavour.LoginState = SC.State.extend({ 
  
  initialSubstate: 'loadLoginState',
  
    loadLoginState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadLoginState');
        Endeavour.getPath('mainPage.mainPane').append();
        SC.routes.set('location', 'login');
        this.invokeLater(this.fadeIn, 500);
      },
      
      fadeIn: function() {
        Endeavour.mainPage.mainPane.linenView.animate('opacity', .8,{duration: 0.8,timing:'linear'});
        Endeavour.mainPage.mainPane.middleView.animate('opacity', 1.0,{duration: 0.8,timing:'linear'});        
      },
      
      goToNewAccountState: function() {
        console.log('goToNewAccountState');
        this.gotoState('NewAccountState');
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
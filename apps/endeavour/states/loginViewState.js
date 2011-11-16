Endeavour.LoginViewState = SC.State.extend({ 
  
  initialSubstate: 'loadLoginViewState',
  
    loadLoginViewState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadLoginViewState');
        Endeavour.getPath('mainPage.mainPane').append();
        this.invokeLater(this.fadeInTexture, 50);
      },
      
      fadeInTexture: function() {
        Endeavour.mainPage.mainPane.linenView.animate('opacity', .8,{duration: 1.0,timing:'linear'});
      },    
    
      exitState:function() {
        Endeavour.getPath('mainPage.mainPane').remove();
      }
      
    })

});
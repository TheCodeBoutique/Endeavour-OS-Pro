Endeavour.DesktopState = SC.State.extend({ 
  
  initialSubstate: 'loadDesktopState',
  
    loadDesktopState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadDesktopState');
        Endeavour.getPath('desktopView.mainPane').append();
        //this.invokeLater(this.fadeInTexture, 50);
      },
      
      //fadeInTexture: function() {
      //  Endeavour.mainPage.mainPane.linenView.animate('opacity', .8,{duration: 1.0,timing:'linear'});
      //},
      
      // goToDesktopState: function() {
      //   this.gotoState('DesktopState');
      // }    
    
      exitState:function() {
        Endeavour.getPath('desktopView.mainPane').remove();
      }
      
    })

});
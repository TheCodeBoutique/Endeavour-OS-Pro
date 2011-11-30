Endeavour.DesktopState = SC.State.extend({ 
  
  initialSubstate: 'loadDesktopState',
  
    loadDesktopState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadDesktopState');
        Endeavour.getPath('desktopView.mainPane').append();
        SC.routes.set('location', 'desktop');
      },
      
      goToNewsAppState: function() {
        console.log('goToNewsAppState');
        this.gotoState('NewsAppState');
      },
      
      goToDesignerAppState: function() {
        console.log('goToDesignerAppState');
        this.gotoState('DesignerAppState');
      },
      
      goToCloudAppState: function() {
        console.log('goToCloudAppState');
        this.gotoState('CloudAppState');
      },
    
      exitState:function() {
        Endeavour.getPath('desktopView.mainPane').remove();
      }
      
    })

});
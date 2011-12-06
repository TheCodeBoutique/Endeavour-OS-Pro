Endeavour.DesignerAppDeviceState = SC.State.extend({ 
  
  initialSubstate: 'loadDesignerAppDeviceState',
  
    loadDesignerAppDeviceState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadDesignerAppState');
        Endeavour.getPath('designerAppDevice.mainPane').append();
        SC.routes.set('location', 'designer_app');
      },
      
      goToDesignerAppMobileStoryboardState: function() {
        this.gotoState('DesignerAppMobileStoryboardState');
      },
      
      goToDesktopState: function() {
        console.log('goToDesktopState');
        this.gotoState('DesktopState');
      },      
    
      exitState:function() {
        Endeavour.getPath('designerAppDevice.mainPane').remove();
      }
      
    })

});
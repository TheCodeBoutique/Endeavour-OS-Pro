Endeavour.DesignerAppProfileState = SC.State.extend({ 
  
  initialSubstate: 'loadDesignerAppProfileState',
  
    loadDesignerAppProfileState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadDesignerAppState');
        Endeavour.getPath('designerAppProfile.mainPane').append();
        SC.routes.set('location', 'designer_app');
      },
      
      goToDesignerDeviceState: function() {
        this.gotoState('DesignerAppDeviceState');
      },
      
      goToDesktopState: function() {
        console.log('goToDesktopState');
        this.gotoState('DesktopState');
      },
    
      exitState:function() {
        Endeavour.getPath('designerAppProfile.mainPane').remove();
      }
      
    })

});
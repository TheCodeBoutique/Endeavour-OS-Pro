Endeavour.DesignerAppMobileInterfaceState = SC.State.extend({ 
  
  initialSubstate: 'loadDesignerAppMobileInterfaceState',
  
    loadDesignerAppMobileInterfaceState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadDesignerAppMobileInterfaceState');
        Endeavour.getPath('designerAppMobileInterface.mainPane').append();
        SC.routes.set('location', 'designer_app/mobile/interface');
      },
      
      goToDesignerAppMobileStoryboardState: function() {
        this.gotoState('DesignerAppMobileStoryboardState');
      },
    
      exitState:function() {
        Endeavour.getPath('designerAppMobileInterface.mainPane').remove();
      }
      
    })

});
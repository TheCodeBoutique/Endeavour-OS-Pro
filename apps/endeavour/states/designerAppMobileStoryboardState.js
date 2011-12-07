Endeavour.DesignerAppMobileStoryboardState = SC.State.extend({ 
  
  initialSubstate: 'loadDesignerAppMobileStoryboardStateState',
  
    loadDesignerAppMobileStoryboardStateState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadDesignerAppMobileStoryboardStateState');
        Endeavour.getPath('designerAppMobileStoryboard.mainPane').append();
        SC.routes.set('location', 'designer_app/mobile/storyboard');
      },
    
      goToDesignerAppMobileInterfaceState: function() {
        console.log('goToDesignerAppMobileInterfaceState');
        this.gotoState('DesignerAppMobileInterfaceState');
      },
    
      exitState:function() {
        Endeavour.getPath('designerAppMobileStoryboard.mainPane').remove();
      }
      
    })

});
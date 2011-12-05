Endeavour.DesignerAppUserState = SC.State.extend({ 
  
  initialSubstate: 'loadDesignerAppState',
  
    loadDesignerAppProfileState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadDesignerAppState');
        Endeavour.getPath('designerAppProfile.mainPane').append();
        SC.routes.set('location', 'designer_app');
      },
    
      exitState:function() {
        Endeavour.getPath('designerAppProfile.mainPane').remove();
      }
      
    })

});
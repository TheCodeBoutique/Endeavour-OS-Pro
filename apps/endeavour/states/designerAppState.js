Endeavour.DesignerAppState = SC.State.extend({ 
  
  initialSubstate: 'loadDesignerAppState',
  
    loadDesignerAppState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadDesignerAppState');
        Endeavour.getPath('designerApp.mainPane').append();
        SC.routes.set('location', 'designer_app');
      },
    
      exitState:function() {
        Endeavour.getPath('designerApp.mainPane').remove();
      }
      
    })

});
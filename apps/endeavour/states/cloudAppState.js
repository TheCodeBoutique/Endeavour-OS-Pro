Endeavour.CloudAppState = SC.State.extend({ 
  
  initialSubstate: 'loadCloudAppState',
  
    loadCloudAppState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadCloudAppState');
        Endeavour.getPath('cloudApp.mainPane').append();
        SC.routes.set('location', 'cloud_app');
      },
    
      exitState:function() {
        Endeavour.getPath('cloudApp.mainPane').remove();
      }
      
    })

});
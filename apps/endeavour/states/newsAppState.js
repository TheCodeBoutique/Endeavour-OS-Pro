Endeavour.NewsAppState = SC.State.extend({ 
  
  initialSubstate: 'loadNewsAppState',
  
    loadNewsAppState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadNewsAppState');
        Endeavour.getPath('newsApp.mainPane').append();
        SC.routes.set('location', 'news_app');
      },
    
      exitState:function() {
        Endeavour.getPath('newsApp.mainPane').remove();
      }
      
    })

});
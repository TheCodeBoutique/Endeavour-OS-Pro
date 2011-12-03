Endeavour.NewsAppState = SC.State.extend({ 
  
  initialSubstate: 'loadNewsAppState',
  
    loadNewsAppState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadNewsAppState');
        // var tasks = Endeavour.store.find(Endeavour.Task);
        // Endeavour.tasksController.set('content', tasks);
        var newsfeeds = Endeavour.store.find(Endeavour.Newsfeed);
        Endeavour.newsfeedsController.set('content', newsfeeds);
        Endeavour.getPath('newsApp.mainPane').append();
        SC.routes.set('location', 'news_app');
      },
      
      troggleViewsButtonState: function(view) {
        var toggle = Endeavour.newsViewsButtonController.get('isViewsButtonON');
        
        if (toggle === YES) {
          Endeavour.newsApp.mainPane.topBar.viewsButton.animate('right', 74,{duration: .7,timing:'ease-in-out'});
          Endeavour.newsApp.mainPane.topBar.hiddenView.animate('width', 0,{duration: 0.7,timing:'ease-in-out'});
          Endeavour.newsViewsButtonController.set('isViewsButtonON', NO);
        } else {
          Endeavour.newsApp.mainPane.topBar.viewsButton.animate('right', 325,{duration: .7,timing:'ease-in-out'});
          Endeavour.newsApp.mainPane.topBar.hiddenView.animate('width', 250,{duration: 0.7,timing:'ease-in-out'});
          Endeavour.newsViewsButtonController.set('isViewsButtonON', YES);
        }
         
      }, 
    
      exitState:function() {
        Endeavour.getPath('newsApp.mainPane').remove();
      }
      
    })

});
// ==========================================================================
// Project:   Endeavour - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

// This page describes the main user interface for your application.  
Endeavour.newsApp = EOS.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: EOS.MainPane.design({
    childViews:[ 'linenView', 'topBar'],
    
    linenView: EOS.LinenView.design({
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
      classNames: 'linen_eighty_opacity'.w(),
    }),
      
   topBar: EOS.ToolbarView.design({
     layout: { top: 0, left: 0, right: 0, height: 61 },
     classNames: 'EOS_Toolbar_Top'.w(),
     childViews: ["newsIcon", "viewsButton", "hiddenView", "settingsButton"],
     
     viewsButton: EOS.ButtonView.design({
       layout: { top: 0, right: 74, height: 54, width: 78 },
       classNames: 'views_button'.w(),
       action: 'troggleViewsButtonState',
       target: 'Endeavour.statechart'
     }),
     
     hiddenView: EOS.View.design({
       layout: { top: 0, right: 74, height: 54, width: 0 },
       childViews: ["streamButton", "groupedButton", "horizontalButton"],
       
       streamButton: EOS.ButtonView.design({
          layout: { top: 0, right: 168, height: 54, width: 82 },
          classNames: 'stream_button'.w(),
          //action: 'closeViewsState',
          //target: 'Endeavour.statechart'
        }),
        
        groupedButton: EOS.ButtonView.design({
          layout: { top: 0, right: 84, height: 54, width: 84 },
          classNames: 'grouped_button'.w(),
          //action: 'showViewsState',
          //target: 'Endeavour.statechart'
        }),
          
        horizontalButton: EOS.ButtonView.design({
          layout: { top: 0, right: 0, height: 54, width: 84 },
          classNames: 'horizontal_button'.w(),
          //action: 'showViewsState',
          //target: 'Endeavour.statechart'
        }),
       
     }),
     
     settingsButton: EOS.ButtonView.design({
       layout: { top: 0, right: 0, height: 54, width: 74 },
       classNames: 'settings_button'.w(),
       //action: 'myMethod',
       //target: 'MyApp.Controller'
     }),
     
     newsIcon: EOS.ImageView.design({
       layout: { centerY: -2, left: 10, height: 54, width: 233 },
       useCanvas: YES,
       value: sc_static('images/news_icon.png')
     }),
     
   })
           
 }),

});

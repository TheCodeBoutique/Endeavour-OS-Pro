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
    childViews:[ 'linenView', 'topBar', 'newsSyncView', 'bottomBar'],
    
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
          buttonBehavior: SC.TOGGLE_BEHAVIOR,
          // action: 'doCheckToggleState',
          // target: 'Endeavour.statechart'
        }),
        
        groupedButton: EOS.ButtonView.design({
          layout: { top: 0, right: 84, height: 54, width: 84 },
          classNames: 'grouped_button'.w(),
          buttonBehavior: SC.TOGGLE_BEHAVIOR,
          // action: 'groupedButtonSelected',
          // target: 'Endeavour.statechart'
        }),
          
        horizontalButton: EOS.ButtonView.design({
          layout: { top: 0, right: 0, height: 54, width: 84 },
          classNames: 'horizontal_button'.w(),
          buttonBehavior: SC.TOGGLE_BEHAVIOR,
          // action: 'horizontalButtonSelected',
          // target: 'Endeavour.statechart'
        }),
       
     }),
     
     settingsButton: EOS.ButtonView.design({
       layout: { top: 0, right: 0, height: 54, width: 74 },
       classNames: 'settings_button'.w(),
       //action: 'myMethod',
       //target: 'MyApp.Controller'
     }),
     
     newsIcon: EOS.ButtonView.design({
       layout: { centerY: -2, left: 10, height: 52, width: 213 },
       classNames: 'news_icon_button'.w(),
       action: 'goToDesktopState',
       target: 'Endeavour.statechart',
    }),
     
   }),
   
   newsSyncView: EOS.View.design({
    classNames: 'light_background'.w(),
    layout: { top: 55, left: 0, bottom: 50, width: 275 },
    childViews: ["syncListBaseView", "newsSyncText", "syncList"],
     
    newsSyncText: EOS.ImageView.design({
     layout: { top: 20, centerX: 0, height: 42, width: 202 },
     useCanvas: YES,
     value: sc_static('images/news_sync_text.png')
    }),
    
    syncListBaseView: EOS.View.design({
      classNames: 'syncList'.w(),
      layout: { top: 69, bottom: 32, left: 5, right: 5 },
    }),
    
    syncList: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { top: 70, bottom: 32, left: 10, right: 10 },
      //backgroundColor: 'white',
    
      contentView: SC.ListView.design({
			 contentBinding: "Endeavour.newsfeedsController.arrangedObjects",
			 selectionBinding: "Endeavour.newsfeedsController.selection",
			 contentValueKey: "newsSource",
			 contentCheckboxKey: "isSynced",
			 left: 10,  
	     rowHeight: 65,
			 rowSpacing: 2,
			 hasContentIcon:  YES,
			 contentIconKey: "newsIcon",
       escapeHTML: NO,
      })
    }),
     
   }),
   
   bottomBar: EOS.ToolbarView.design({
     layout: { bottom: 0, left: 0, right: 0, height: 50 },
     classNames: 'EOS_Toolbar_Bottom'.w(),
  })
           
 }),

});

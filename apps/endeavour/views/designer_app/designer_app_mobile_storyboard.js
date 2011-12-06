// ==========================================================================
// Project:   Endeavour - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

// This page describes the main user interface for your application.  
Endeavour.designerAppMobileStoryboard = EOS.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: EOS.MainPane.design({
    childViews: ["linenView", "topBar", "bottomBar"],
    
    topBar: EOS.ToolbarView.design({
       layout: { top: 0, left: 0, right: 0, height: 61 },
       classNames: 'EOS_Toolbar_Top_Dark_Shadow'.w(),
       childViews: ["designerIcon", "runButton"],
       
       designerIcon: EOS.ImageView.design ({
         layout: { top: 0, left: 10, height: 63, width: 300 },
         useCanvas: YES,
         value: sc_static('images/designer_icon.png')
       }),
       
       runButton: EOS.ButtonView.design({
         classNames: 'run_button'.w(),
         layout: { centerY: -2, right: 250 , height: 54, width: 94},
         // action: 'myMethod',
         // target: 'Endeavour.statechart'
       }),
       
    }),
    
    linenView: EOS.LinenView.design({
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
      classNames: 'linen_eighty_opacity'.w(),     
    }),
    
    bottomBar: EOS.ToolbarView.design({
       layout: { bottom: 0, left: 0, right: 0, height: 55 },
       classNames: 'EOS_Toolbar_Bottom_Shadow'.w(),
       childViews: ["storyboardButton", "interfaceButton"],
       
       storyboardButton: EOS.ButtonView.design({
         classNames: 'storyboard_button'.w(),
         layout: { centerY: -2, left: 10 , height: 54, width: 94},
         // action: 'myMethod',
         // target: 'Endeavour.statechart'
       }),
       
       interfaceButton: EOS.ButtonView.design({
          classNames: 'interface_button'.w(),
          layout: { centerY: 0, left: 120 , height: 50, width: 70},
          // action: 'myMethod',
          // target: 'Endeavour.statechart'
        }),
       
    })
    
  }),
  
});
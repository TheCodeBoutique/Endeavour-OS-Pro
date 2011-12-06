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
       childViews: ["designerIcon"],
       
       designerIcon: EOS.ImageView.design ({
         layout: { top: 0, left: 10, height: 63, width: 300 },
         useCanvas: YES,
         value: sc_static('images/designer_icon.png')
       }),
       
    }),
    
    linenView: EOS.LinenView.design({
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
      classNames: 'linen_eighty_opacity'.w(),     
    }),
    
    bottomBar: EOS.ToolbarView.design({
       layout: { bottom: 0, left: 0, right: 0, height: 50 },
       classNames: 'EOS_Toolbar_Bottom_Shadow'.w(),
    })
    
  }),
  
});
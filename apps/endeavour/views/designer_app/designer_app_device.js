// ==========================================================================
// Project:   Endeavour - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

// This page describes the main user interface for your application.  
Endeavour.designerAppDevice = EOS.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: EOS.MainPane.design({
    childViews: ["linenView", "designerIcon", "centerView", "chooseYourText"],
    
    linenView: EOS.LinenView.design({
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
      classNames: 'linen_eighty_opacity'.w(),     
    }),
    
    designerIcon: EOS.ImageView.design ({
      layout: { top: 10, left: 10, height: 63, width: 300 },
      useCanvas: YES,
      value: sc_static('images/designer_icon.png')
    }),
    
    centerView: EOS.View.design ({
      classNames: 'test'.w(),
      layout: { centerX: 0, centerY: 0, height: 320, width: 792 },
    }),
    
    chooseYourText: EOS.ImageView.design ({
      layout: { centerX: 0, centerY: 250, height: 39, width: 343 },
      useCanvas: YES,
      value: sc_static('images/choose_your_text.png')
    }),
    
  })
  
});
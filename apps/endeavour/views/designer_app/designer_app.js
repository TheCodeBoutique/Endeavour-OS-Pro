// ==========================================================================
// Project:   Endeavour - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

// This page describes the main user interface for your application.  
Endeavour.designerApp = EOS.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: EOS.MainPane.design({
    childViews: ["linenView", "designerIcon", "buildProfileText", "cancelButton"],
    
    linenView: EOS.LinenView.design({
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
      classNames: 'linen_eighty_opacity'.w(),     
    }),
    
    designerIcon: EOS.ImageView.design ({
      layout: { centerX: 0, centerY: -100, height: 72, width: 307 },
      useCanvas: YES,
      value: sc_static('images/designer_icon.png')
    }),
    
    buildProfileText: EOS.ImageView.design ({
      layout: { centerX: 0, centerY: 200, height: 45, width: 569 },
      useCanvas: YES,
      value: sc_static('images/build_profile_text.png')
    }),
    
    cancelButton: EOS.ButtonView.design({
      layout: { centerX: 0, centerY: 250, height: 41, width: 114 },
      classNames: 'dark_gray_button'.w(),
      title: "cancel"
    }),
      
  })

});

// ==========================================================================
// Project:   EndeavourosControls - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals EndeavourosControls */

// This page describes the main user interface for your application.  
EndeavourosControls.mainPage = EOS.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  
  mainPane: EOS.MainPane.design({
    classNames: 'EOS_Linen_Background'.w(),
    childViews: 'mainToolBar goToDesktop'.w(),
    
     mainToolBar: EOS.ToolbarView.design ({
        layout: { top: 0, right: 0, left: 0, height: 46},
        childViews: "endeavourTextLogo".w(),
        
          endeavourTextLogo: EOS.ImageView.design({
            layout: { top: 3, left: 5, height: 44, width: 336 },
            useCanvas: YES,
            value: sc_static('images/endeavour_text_logo.png')
          }),
        
      }),
    
    goToDesktop: EOS.BackToDesktopButtonView.design({
      layout: { top: 3, left: 5, width: EOS.TOOLBAR_BUTTON_SQUARE_WIDTH, height: EOS.TOOLBAR_BUTTON_SQUARE_HEIGHT },
      toolTip: 'Switch Apps'.loc()
    }),
    
  })

});

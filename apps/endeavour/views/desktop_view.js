// ==========================================================================
// Project:   Endeavour - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

// This page describes the main user interface for your application.  
Endeavour.desktopView = EOS.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: EOS.MainPane.design({
    childViews: 'linenView'.w(),
    
    linenView: EOS.LinenView.design({
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
      classNames: 'linen_eighty_opacity'.w(),
      childViews: "newsApp designerApp cloudApp rolodexApp appShopApp browserApp accountApp".w(),
      
      newsApp: EOS.ButtonView.design({
        classNames: 'news'.w(),
        layout: { top: 55, left: 10, height: 114, width: 130},
        // action: 'myMethod',
        // target: 'MyApp.Controller'
      }),
      
      designerApp: EOS.ButtonView.design({
        classNames: 'designer'.w(),
        layout: { top: 55, left: 150, height: 114, width: 130},
        // action: 'myMethod',
        // target: 'MyApp.Controller'
      }),
      
      cloudApp: EOS.ButtonView.design({
        classNames: 'cloud'.w(),
        layout: { top: 55, left: 290, height: 114, width: 130},
        // action: 'myMethod',
        // target: 'MyApp.Controller'
      }),
      
      rolodexApp: EOS.ButtonView.design({
        classNames: 'rolodex'.w(),
        layout: { top: 55, left: 430, height: 114, width: 130},
        // action: 'myMethod',
        // target: 'MyApp.Controller'
      }),
      
      appShopApp: EOS.ButtonView.design({
        classNames: 'app_shop'.w(),
        layout: { top: 55, left: 570, height: 114, width: 130},
        // action: 'myMethod',
        // target: 'MyApp.Controller'
      }),
      
      browserApp: EOS.ButtonView.design({
        layout: { top: 55, left: 710, height: 114, width: 130},
        classNames: 'browser'.w(),
        // action: 'myMethod',
        // target: 'MyApp.Controller'
      }),
      
      accountApp: EOS.ButtonView.design({
        layout: { top: 55, left: 850, height: 114, width: 130},
        classNames: 'account'.w(),
        // action: 'myMethod',
        // target: 'MyApp.Controller'
      }),
      
    })
      
  })

});

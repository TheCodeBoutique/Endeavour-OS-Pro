// ==========================================================================
// Project:   Endeavour - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

// This page describes the main user interface for your application.  
Endeavour.mainPage = EOS.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: EOS.MainPane.design({
    childViews: 'linenView eosIcon eosLogo userName password newTo signUp login'.w(),
    
    linenView: EOS.LinenView.design({
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
      classNames: 'linen_no_opacity'.w(),
    }),
    
    eosIcon: EOS.ImageView.design({
       layout: { height: 33, width: 182, centerX: -275, centerY: 175},
       useCanvas: YES,
       value: sc_static('images/endeavour_icon.png')
    }),
    
    eosLogo: EOS.ImageView.design({
      layout: { height: 372, width: 1126, centerX: 0, centerY: 0},
       useCanvas: YES,
       value: sc_static('images/endeavour_logo.png')
    }),
    
    userName: EOS.TextFieldView.design({
      layout: { centerX: 0, centerY: 175, height: 25, width: 200},
      hint: 'user name',
      isPassword: NO,
      isTextArea: NO
    }),
    
    password: EOS.TextFieldView.design({
      layout: { centerX: 250, centerY: 175, height: 25, width: 200},
      hint: 'password',
      isPassword: NO,
      isTextArea: NO
    }),
    
    newTo: EOS.LabelView.design({
      layout: { centerX: 0, centerY: 215, height: 25, width: 200},
      value: 'New to Endeavour?'
    }),
    
    signUp: EOS.ButtonView.design({
      classNames: 'signup'.w(),
      layout: { centerX: 50, centerY: 213, height: 21, width: 60},
      //title: 'Sign Up',
      // action: 'myMethod',
      // target: 'MyApp.Controller'
    }),
    
    login: EOS.ButtonView.design({
      classNames: 'login'.w(),
      layout: { centerX: 325, centerY: 215, height: 36, width: 106},
      // title: 'Login',
      // action: 'myMethod',
      // target: 'MyApp.Controller'
    }),
    
  })

});
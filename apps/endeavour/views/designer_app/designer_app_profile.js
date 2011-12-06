// ==========================================================================
// Project:   Endeavour - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

// This page describes the main user interface for your application.  
Endeavour.designerAppProfile = EOS.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: EOS.MainPane.design({
    childViews: ["linenView", "designerIcon", "userView", "professionalView", "buildProfileText", "cancelButton"],
    
    linenView: EOS.LinenView.design({
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
      classNames: 'linen_eighty_opacity'.w(),     
    }),
    
    designerIcon: EOS.ImageView.design ({
      layout: { top: 0, left: 10, height: 63, width: 300 },
      useCanvas: YES,
      value: sc_static('images/designer_icon.png')
    }),
    
    userView: EOS.View.design ({
      classNames: 'center_view'.w(),
      layout: { centerX: -200, centerY: 10, height: 229, width: 365 },
      childViews: ["lineLeft", "userProfileText", "userProfileDescription", "chooseLeftButton"],
      
      lineLeft: EOS.ImageView.design ({
        layout: { top: 31, centerX: 0, height: 12, width: 200},
        useCanvas: YES,
        value: sc_static('images/line.png')
      }),
      
      userProfileText: EOS.ImageView.design ({
        layout: { top: 1, centerX: 0, height: 48, width: 159},
        useCanvas: YES,
        value: sc_static('images/user_profile_text.png')
      }),
      
      userProfileDescription: EOS.LabelView.design({
        classNames: 'text'.w(),
        layout: { top: 50, left: 45, height: 200, width: 300},
        value: 'Show the world who you are by expressing your individual story.  The user profile provides esay to use tools for creating a unique profile: from content, to design, to message.  The designer empowers you to stand out.'
      }),
      
      chooseLeftButton: EOS.ButtonView.design({
        classNames: 'light_gray_button'.w(),
        layout: { centerX: 0, bottom: 20, height: 36, width: 106},
        title: 'User',
        action: 'goToDesignerDeviceState',
        target: 'Endeavour.statechart'
      }),
      
    }),
    
    professionalView: EOS.View.design({
      layout: { centerX: 200, centerY: 10, height: 229, width: 365 },
      classNames: 'center_view'.w(),
      childViews: [ "lineRight", "professionalProfileText", "professionalProfileDescription", "chooseRightButton"],

      lineRight: EOS.ImageView.design ({
        layout: { top: 31, centerX: 0, height: 12, width: 200},
        useCanvas: YES,
        value: sc_static('images/line.png')
      }),
      
      professionalProfileText: EOS.ImageView.design ({
        layout: { top: 1, centerX: 0, height: 50, width: 261},
        useCanvas: YES,
        value: sc_static('images/professionalText.png')
      }),
      
      professionalProfileDescription: EOS.LabelView.design({
        classNames: 'text'.w(),
        layout: { top: 50, right: 15, height: 200, width: 320},
        value: 'Create a profile tailored towards your brand.  The professional profile expands on the user profile and provides e-commerce tools for your music, movies, and physical items such as clothing, electronics, and more,  The professional profile: embracing entrepreneurship - built for business.'
      }),
      
      chooseRightButton: EOS.ButtonView.design({
        classNames: 'light_gray_button'.w(),
        layout: { centerX: 0, bottom: 20, height: 36, width: 106},
        title: 'Professional',
        // action: 'myMethod',
        // target: 'MyApp.Controller'
      }),
      
    }),
    
    buildProfileText: EOS.ImageView.design ({
      layout: { centerX: 0, centerY: 200, height: 45, width: 569 },
      useCanvas: YES,
      value: sc_static('images/build_profile_text.png')
    }),
    
    cancelButton: EOS.ButtonView.design({
      layout: { centerX: 0, centerY: 250, height: 41, width: 114 },
      classNames: 'dark_gray_button'.w(),
      title: "cancel",
      action: 'goToDesktopState',
      target: 'Endeavour.statechart'
    }),
      
  })

});

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
    childViews: ["linenView", "designerIcon", "centerView", "buildProfileText", "cancelButton"],
    
    linenView: EOS.LinenView.design({
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
      classNames: 'linen_eighty_opacity'.w(),     
    }),
    
    designerIcon: EOS.ImageView.design ({
      layout: { centerX: 0, centerY: -175, height: 63, width: 300 },
      useCanvas: YES,
      value: sc_static('images/designer_icon.png')
    }),
    
    centerView: EOS.View.design ({
      classNames: 'center_view'.w(),
      layout: { centerX: 0, centerY: 10, height: 230, width: 737},
      childViews: ["userProfileText", "userProfileDescription", "chooseLeftButton", "professionalProfileText", "professionalProfileDescription", "chooseRightButton"],
      
      userProfileText: EOS.LabelView.design({
        classNames: 'text_med'.w(),
        layout: { top: 18, left: 133, height: 25, width: 150},
        value: 'User Profile'
      }),
      
      userProfileDescription: EOS.LabelView.design({
        classNames: 'text'.w(),
        layout: { top: 50, left: 45, height: 200, width: 300},
        value: 'Show the world who you are by expressing your individual story.  The user profile provides esay to use tools for creating a unique profile: from content, to design, to message.  The designer empowers you to stand out.'
      }),
      
      chooseLeftButton: EOS.ButtonView.design({
        classNames: 'light_gray_button'.w(),
        layout: { left: 20, bottom: 20, height: 36, width: 106},
        title: 'Choose',
        action: 'goToDesignerDeviceState',
        target: 'Endeavour.statechart'
      }),
      
      professionalProfileText: EOS.LabelView.design({
        classNames: 'text_med'.w(),
        layout: { top: 18, right: 77, height: 25, width: 200},
        value: 'Professional Profile'
      }),
      
      professionalProfileDescription: EOS.LabelView.design({
        classNames: 'text'.w(),
        layout: { top: 50, right: 25, height: 200, width: 320},
        value: 'Create a profile tailored towards your brand.  The professional profile expands on the user profile and provides e-commerce tools for your music, movies, and physical items such as clothing, electronics, and more,  The professional profile: embracing entrepreneurship - built for business.'
      }),
      
      chooseRightButton: EOS.ButtonView.design({
        classNames: 'light_gray_button'.w(),
        layout: { right: 20, bottom: 20, height: 36, width: 106},
        title: 'Choose',
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

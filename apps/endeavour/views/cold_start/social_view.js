// ==========================================================================
// Project:   Endeavour - newAccountView
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

// This page describes the main user interface for your application.  
Endeavour.socialView = EOS.Page.design({

  mainPane: EOS.MainPane.design({
    childViews: 'linenView'.w(),
    
     linenView: EOS.LinenView.design({
       layout: { top: 0, right: 0, bottom: 0, left: 0 },
       classNames: 'linen_eighty_opacity'.w(),
       childViews: "centerView".w(),
       
       centerView: EOS.View.design({
         layout: { centerX: 0, centerY: 0, height: 500, width: 1000},
         childViews: 'endeavourIconMed pageIndicator fbIcon fbEmail fbPassword twIcon twEmail twPassword liIcon liEmail liPassword socialButton cancelButton doneButton'.w(),
         
         
          endeavourIconMed: EOS.ImageView.design({
            layout: { top: 0, centerX: 0, width: 466, height: 159 },
            useCanvas: YES,
            value: sc_static('images/endeavour_logo_med.png')
          }),
          
          fbIcon: EOS.ImageView.design({
            layout: { top: 200, left: 5, height: 39, width: 42 },
            useCanvas: YES,
            value: sc_static('images/fb_icon.png')
          }),
          
          fbEmail: EOS.TextFieldView.design({
            classNames: 'EOS_TextField'.w(),
            layout: { top: 200, left: 50, height: 36, width: 233 },
            hint: 'email',
            isPassword: NO,
            isTextArea: NO
          }),
          
          fbPassword: EOS.TextFieldView.design({
            classNames: 'EOS_TextField'.w(),
            layout: { top: 250, left: 50, height: 36, width: 233 },
            hint: 'password',
            isPassword: YES,
            isTextArea: NO
          }),
          
          twIcon: EOS.ImageView.design({
            layout: { top: 200, centerX: -145, height: 39, width: 42 },
            useCanvas: YES,
            value: sc_static('images/tw_icon.png')
          }),
          
          twEmail: EOS.TextFieldView.design({
            classNames: 'EOS_TextField'.w(),
            layout: { top: 200, centerX: 0, height: 36, width: 233 },
            hint: 'email',
            isPassword: NO,
            isTextArea: NO
          }),
          
          twPassword: EOS.TextFieldView.design({
            classNames: 'EOS_TextField'.w(),
            layout: { top: 250, centerX: 0, height: 36, width: 233 },
            hint: 'password',
            isPassword: YES,
            isTextArea: NO
          }),
          
           liIcon: EOS.ImageView.design({
              layout: { top: 200, right: 290, height: 39, width: 42 },
              useCanvas: YES,
              value: sc_static('images/li_icon.png')
            }),
          
          liEmail: EOS.TextFieldView.design({
            classNames: 'EOS_TextField'.w(),
            layout: { top: 200, right: 50, height: 36, width: 233 },
            hint: 'email',
            isPassword: NO,
            isTextArea: NO
          }),
          
          liPassword: EOS.TextFieldView.design({
            classNames: 'EOS_TextField'.w(),
            layout: { top: 250, right: 50, height: 36, width: 233 },
            hint: 'password',
            isPassword: YES,
            isTextArea: NO
          }),
          
          socialButton: EOS.ButtonView.design({
            classNames: 'social_button'.w(),
            layout: { bottom: 110, centerX: 0, height: 32, width: 146},
            // needs to call an iOS style pop up with endeavour flavor //
            action: 'showPopup',
            target: 'Endeavour.statechart'
          }),
          
          cancelButton: EOS.ButtonView.design({
            classNames: 'cancel_button'.w(),
            layout: { bottom: 50, left: 375, height: 41, width: 110},
            action: 'goToPersonalState',
            target: 'Endeavour.statechart'
          }),
          
          doneButton: EOS.ButtonView.design({
            classNames: 'done_button'.w(),
            layout: { bottom: 49, right: 374, height: 41, width: 110},
            action: 'goToDesktopState',
            target: 'Endeavour.statechart'
          }),
          
          pageIndicator: EOS.ImageView.design({
            layout: { bottom: -1, centerX: 0, width: 45, height: 16 },
            useCanvas: YES,
             value: sc_static('images/page_indicator_right.png')
          }),
         
       }),
       
    })
    
  }),
  
});
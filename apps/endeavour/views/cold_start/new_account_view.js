// ==========================================================================
// Project:   Endeavour - newAccountView
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

// This page describes the main user interface for your application.  
Endeavour.newAccountView = EOS.Page.design({

  mainPane: EOS.MainPane.design({
    childViews: 'linenView'.w(),
    
     linenView: EOS.LinenView.design({
       layout: { top: 0, right: 0, bottom: 0, left: 0 },
       classNames: 'linen_eighty_opacity'.w(),
       childViews: "centerView".w(),
       
       centerView: EOS.View.design({
         layout: { centerX: 0, centerY: 0, height: 500, width: 750},
         childViews: 'endeavourIconMed firstName lastName userName password confirmPassword createYourAccountText pageIndicator cancelButton nextButton'.w(),
         
          firstName: EOS.TextFieldView.design({
            classNames: 'EOS_TextField'.w(),
            layout: { top: 200, left: 8, height: 36, width: 233 },
            hint: 'first name',
            isPassword: NO,
            isTextArea: NO
          }),
          
          lastName: EOS.TextFieldView.design({
            classNames: 'EOS_TextField'.w(),
            layout: { top: 200, left: 258, height: 36, width: 233 },
            hint: 'last name',
            isPassword: NO,
            isTextArea: NO
          }),
          
          userName: EOS.TextFieldView.design({
            classNames: 'EOS_TextField'.w(),
            layout: { top: 200, left: 508, height: 36, width: 233 },
            hint: 'user name',
            isPassword: NO,
            isTextArea: NO
          }),
          
          password: EOS.TextFieldView.design({
            classNames: 'EOS_TextField'.w(),
            layout: { top: 250, left: 258, height: 36, width: 233 },
            hint: 'password',
            isPassword: YES,
            isTextArea: NO
          }),
          
          confirmPassword: EOS.TextFieldView.design({
            classNames: 'EOS_TextField'.w(),
            layout: { top: 250, left: 508, height: 36, width: 233 },
            hint: 'confirm password',
            isPassword: YES,
            isTextArea: NO
          }),
         
          endeavourIconMed: EOS.ImageView.design({
            layout: { top: 0, centerX: 0, width: 466, height: 159 },
            useCanvas: YES,
             value: sc_static('images/endeavour_logo_med.png')
          }),
          
          createYourAccountText: EOS.ImageView.design({
            layout: { top: 320, centerX: 0, width: 224, height: 37 },
            useCanvas: YES,
             value: sc_static('images/create_your_account_text.png')
          }), 
          
          cancelButton: EOS.ButtonView.design({
            classNames: 'dark_gray_button'.w(),
            layout: { bottom: 50, left: 250, height: 41, width: 110},
            action: 'goToLoginState',
            target: 'Endeavour.statechart',
            title: 'Cancel'
          }),
          
          nextButton: EOS.ButtonView.design({
            classNames: 'light_gray_button'.w(),
            layout: { bottom: 50, right: 250, height: 41, width: 110},
            action: 'goToPersonalState',
            target: 'Endeavour.statechart',
            title: 'Next'
          }),
          
          pageIndicator: EOS.ImageView.design({
            layout: { bottom: 0, centerX: 0, width: 45, height: 15 },
            useCanvas: YES,
             value: sc_static('images/page_indicator.png')
          }),
         
       }),
       
    })
    
  }),
  
});
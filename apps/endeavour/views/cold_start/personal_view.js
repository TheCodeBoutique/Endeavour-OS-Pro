// ==========================================================================
// Project:   Endeavour - newAccountView
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

// This page describes the main user interface for your application.  
Endeavour.personalView = EOS.Page.design({

  mainPane: EOS.MainPane.design({
    childViews: 'linenView'.w(),
    
     linenView: EOS.LinenView.design({
       layout: { top: 0, right: 0, bottom: 0, left: 0 },
       classNames: 'linen_eighty_opacity'.w(),
       childViews: "centerView".w(),
       
       centerView: EOS.View.design({
         layout: { centerX: 0, centerY: 0, height: 500, width: 750},
         childViews: 'endeavourIconMed uploadPhoto describeYourself provideText pageIndicator cancelButton nextButton'.w(),
         
          endeavourIconMed: EOS.ImageView.design({
            layout: { top: 0, centerX: 0, width: 466, height: 159 },
            useCanvas: YES,
             value: sc_static('images/endeavour_logo_med.png')
          }),
          
          uploadPhoto: EOS.ButtonView.design({
            classNames: 'upload_button'.w(),
            layout: { centerY: 0, left: 70, height: 137, width: 136 },
            // action: 'goToNewAccountState',
            // target: 'Endeavour.statechart',
          }),
          
          describeYourself: EOS.TextFieldView.design({
            classNames: 'EOS_TextArea_Describe'.w(),
            layout: { centerY: 0, right: 70, height: 136, width: 470 },
            hint: 'Describe yourself',
            isPassword: NO,
            isTextArea: YES
          }),
          
          provideText: SC.ImageView.design({
            layout: { bottom: 110, centerX: 0, width: 302, height: 39 },
            useCanvas: YES,
            value: sc_static('images/provide_text.png')
          }),
          
          cancelButton: EOS.ButtonView.design({
            classNames: 'dark_gray_button'.w(),
            layout: { bottom: 50, left: 250, height: 41, width: 110},
            action: 'goToNewAccountState',
            target: 'Endeavour.statechart',
            title: 'Cancel'
          }),
          
          nextButton: EOS.ButtonView.design({
            classNames: 'light_gray_button'.w(),
            layout: { bottom: 50, right: 250, height: 41, width: 110},
            action: 'goToSocialState',
            target: 'Endeavour.statechart',
            title: 'Next'
          }),
          
          pageIndicator: EOS.ImageView.design({
            layout: { bottom: 0, centerX: 0, width: 49, height: 15 },
            useCanvas: YES,
             value: sc_static('images/page_indicator_middle.png')
          }),
         
       }),
       
    })
    
  }),
  
});
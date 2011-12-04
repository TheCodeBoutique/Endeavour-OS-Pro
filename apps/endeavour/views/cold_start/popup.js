Endeavour.popupView = SC.Page.design({
  defaultResponder: 'Endeavour.statechart',
  
  mainPane: SC.MainPane.design({
    classNames: 'menu_pane'.w(),
    childViews: "middleView".w(),
    
     middleView: EOS.View.design({
       classNames: 'popup'.w(),
       layout: { centerX: 0, centerY: 0, height: 157, width: 282 },
       childViews: ["notNowButton", "signInButton"],
       
       notNowButton: EOS.ButtonView.design({
         layout: { bottom: 10, left: 10, height: 44, width: 130},
         classNames: 'not_now_button'.w(),
         action: 'scalePopupMessageDownDesktop',
         target: 'Endeavour.statechart'
       }),
       
       signInButton: EOS.ButtonView.design({
          layout: { bottom: 10, right: 10, height: 44, width: 130},
          classNames: 'sign_in_button'.w(),
           action: 'scalePopupMessageDown',
           target: 'Endeavour.statechart'
        }),
       
     }),
  
  })
  
});
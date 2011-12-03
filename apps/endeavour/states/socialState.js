Endeavour.SocialState = SC.State.extend({ 
  
  initialSubstate: 'loadSocialState',
  
    loadSocialState: SC.State.extend({

      enterState: function() {
        console.log('enterState: loadSocialState');
        Endeavour.getPath('socialView.mainPane').append();
        SC.routes.set('location', 'social_information');
      },
      
      showPopup: function() {
        console.log('showPopup');
        Endeavour.getPath('popupView.mainPane').append();
        Endeavour.popupView.mainPane.middleView.animate('scale',0.001,{duration:.1, timing:'ease-in-out'});
        this.invokeLater(this.scalePopupMessageUp,100);
      },
      
      scalePopupMessageUp: function() {
        Endeavour.popupView.mainPane.middleView.animate('scale',1.2,{duration: 0.3, timing:'ease-in-out'});
        this.invokeLater(this.scalePopupMessageNorm, 300);
      },
      
      scalePopupMessageNorm: function() {
        Endeavour.popupView.mainPane.middleView.animate('scale',1.0,{duration: 0.35, timing:'ease-in-out'});
      },
      
      scalePopupMessageDownDesktop: function() {
        Endeavour.popupView.mainPane.middleView.animate('scale',0.001,{duration: 0.3, timing:'ease-in-out'});
        this.invokeLater(this.closePopUpGoToDesktop, 300);
      },
      
      closePopUpGoToDesktop: function() {
        Endeavour.getPath('popupView.mainPane').remove();
        this.gotoState('DesktopState');
      },
      
      
      scalePopupMessageDown: function() {
        Endeavour.popupView.mainPane.middleView.animate('scale',0.001,{duration: 0.3, timing:'ease-in-out'});
        this.invokeLater(this.closePopUp, 300);
      },
      
      closePopUp: function() {
        Endeavour.getPath('popupView.mainPane').remove();
      },
      
      goToPersonalState: function() {
        this.gotoState('PersonalState');
      },
      
      goToDesktopState: function() {
        this.gotoState('DesktopState');
      },
    
      exitState:function() {
        Endeavour.getPath('socialView.mainPane').remove();
      }
      
    })

});
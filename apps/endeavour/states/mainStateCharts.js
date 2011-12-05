Endeavour.statechart = SC.Statechart.create({

  initialState: 'rootState',

  rootState: SC.State.extend({

    initialSubstate:'LoginState',
    
    LoginState: SC.State.plugin('Endeavour.LoginState'),
    DesktopState: SC.State.plugin('Endeavour.DesktopState'),
    NewAccountState: SC.State.plugin('Endeavour.NewAccountState'),
    PersonalState: SC.State.plugin('Endeavour.PersonalState'),
    SocialState: SC.State.plugin('Endeavour.SocialState'),
    NewsAppState: SC.State.plugin('Endeavour.NewsAppState'),
    DesignerAppProfileState: SC.State.plugin('Endeavour.DesignerAppProfileState'),
    DesignerAppDeviceState: SC.State.plugin('Endeavour.DesignerAppDeviceState'),
    //DesignerAppUserState: SC.State.plugin('Endeavour.DesignerAppUserState'),
    CloudAppState: SC.State.plugin('Endeavour.CloudAppState')
  })

});
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
    DesignerAppState: SC.State.plugin('Endeavour.DesignerAppState'),
    CloudAppState: SC.State.plugin('Endeavour.CloudAppState')
  })

});
Endeavour.statechart = SC.Statechart.create({

  initialState: 'rootState',

  rootState: SC.State.extend({

    initialSubstate:'LoginState',
    
    LoginState: SC.State.plugin('Endeavour.LoginState'),
    DesktopState: SC.State.plugin('Endeavour.DesktopState')
  })

});
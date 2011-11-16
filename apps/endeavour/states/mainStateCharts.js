Endeavour.statechart = SC.Statechart.create({

  initialState: 'rootState',

  rootState: SC.State.extend({

    initialSubstate:'LoginViewState',
    
    LoginViewState: SC.State.plugin('Endeavour.LoginViewState')
    // NextState: SC.State.plugin('Endeavour.LoginState')
  })

});
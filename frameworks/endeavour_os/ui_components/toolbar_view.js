// ==========================================================================
// UI Component:   EOS.ToolbarView
// Copyright: ©2011 The Code Boutique, LLC.
// ==========================================================================
// globals EOS

// @class
// This component is the ToolbarView but it is mapping the default SC.ToolbarView to the EOS namespace.

// @author Chad Eubanks
// @extends SC.ToolBarView


EOS.ToolbarView = SC.ToolbarView.extend(
  /** @scope EOS.MainPane.prototype */{
  classNames: 'ALTO_ToolBar'.w(),
});
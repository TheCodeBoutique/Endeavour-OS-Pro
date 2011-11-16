// ==========================================================================
// Project:   Endeavour
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Endeavour.main = function main() {

  // Let your application know to load from states
  Endeavour.statechart.initStatechart();

} ;

function main() { Endeavour.main(); }

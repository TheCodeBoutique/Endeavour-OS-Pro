// ==========================================================================
// Project:   Endeavour.Newsfeed
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Endeavour.Newsfeed = SC.Record.extend(
/** @scope Endeavour.Newsfeed.prototype */ {

  isSynced: SC.Record.attr(Boolean),
  newsSource: SC.Record.attr(String),
  newsIcon: SC.Record.attr(String)

}) ;

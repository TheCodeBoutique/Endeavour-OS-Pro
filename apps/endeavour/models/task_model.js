// ==========================================================================
// Project:   Endeavour.Task
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Endeavour.Task = SC.Record.extend(
/** @scope Endeavour.Task.prototype */ {

  isDone: SC.Record.attr(Boolean),
  description: SC.Record.attr(String)

}) ;

// ==========================================================================
// Project:   Endeavour.Newsfeed Fixtures
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

sc_require('models/newsfeed_model');

Endeavour.Newsfeed.FIXTURES = [

  {
    guid: 1,
    isSynced: false,
    newsSource: "Facebook",
    newsIcon: sc_static('/images/fb_icon.png'),
  },
  
  {
    guid: 2,
    isSynced: false,
    newsSource: "LinkedIn",
    newsIcon: sc_static('/images/li_icon.png'),
  },
  
  {
    guid: 3,
    isSynced: false,
    newsSource: "Twitter",
    newsIcon: sc_static('/images/tw_icon.png'),
  },
  
  {
    guid: 4,
    isSynced: false,
    newsSource: "Endeavour",
    newsIcon: sc_static('/images/eos_icon.png'),
  },
  
  {
    guid: 5,
    isSynced: false,
    newsSource: "New York Times",
    newsIcon: sc_static('/images/nyt_icon.png'),
  },
    
];
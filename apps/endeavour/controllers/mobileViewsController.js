// ==========================================================================
// Project:   Endeavour.mobileViewsController
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Endeavour.mobileViewsController = SC.ArrayController.create(
/** @scope Endeavour.mobileViewsController.prototype */ {

  content:[
  
    SC.Object.create({
      icon: sc_static('images/mobile_blank_view_icon.png'),
      title:"Blank",
      description: "A blank single page."
      }),
  
    SC.Object.create({
     icon:sc_static('mobile_tabbar_view_icon.png'),
     title:"Tab Bar",
     description: "A multi page view with navigation buttons on the bottom toolbar."
    }),

    SC.Object.create({
      icon:sc_static('mobile_drill_down_view_icon.png'),
      title:"Drill Down Menu",
      description: "A list of objects organizded in cells.  Upon selectionof a cell  The view slides to the left and reveals detailed information."
    }),
    
    SC.Object.create({
     icon:sc_static('mobile_horizontal_swipe_icon.png'),
     title:"Horizontal Swipe",
     description: "A multi page view that has horizontal swipe capability.  Views slide left and right per slide direction."
    }),
    
    SC.Object.create({
     icon:sc_static('mobile_vertical_navigation_view_icon.png'),
     title:"Vertical Navigation",
     description: "A multi page view with navigation buttons on the top tollbar.  View slides up and down per button selection."
    }),
    
    SC.Object.create({
     icon: sc_static('mobile_twitter_view_icon.png'),
     title:"Twitter Feed",
     description: "A list of tweets."
    }),
    
    SC.Object.create({
     icon:sc_static('mobile_drill_down_view_icon'),
     title:"Blog Feed",
     description: "A list of blog titles organized in cells.  Upon selection of a cell.  The view slides to the left and reveals the blog entry."
    }),
    
    SC.Object.create({
     icon:sc_static('mobile_drill_down_view_icon'),
     title:"Press Release",
     description: "A list of official press release titles organized in cells.  Upon selection of a cell.  The view slides to the left and reveals the press release entry."
    }),
    
    SC.Object.create({
     icon:sc_static('mobile_photo_gallery_icon.png'),
     title:"Photo Gallery",
     description: "A list of photo albumns organized in cells.  Upon selection of a cell The view slides to the left and reveals a grid photos."
    }),
    
    SC.Object.create({
     icon:sc_static('mobile_drill_down_view_icon'),
     title:"Video Gallery",
     description: "A list of videos organized in cells.  Upon selection of a cell.  The view slides to the left and reveals a video.  You can change video my sliding the left or right."
    }),

  ]

});

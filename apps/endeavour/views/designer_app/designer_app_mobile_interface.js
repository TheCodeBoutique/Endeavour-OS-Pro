// ==========================================================================
// Project:   Endeavour - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Endeavour */

// This page describes the main user interface for your application.  
Endeavour.designerAppMobileInterface = EOS.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: EOS.MainPane.design({
    childViews: ["linenView", "topBar", "rightView", "bottomBar"],
    
    topBar: EOS.ToolbarView.design({
       layout: { top: 0, left: 0, right: 0, height: 61 },
       classNames: 'EOS_Toolbar_Top_Dark_Shadow'.w(),
       childViews: ["designerIcon", "runButton", "toolbarSplit", "rightLabel"],
       
       designerIcon: EOS.ImageView.design ({
         layout: { top: 0, left: 10, height: 63, width: 300 },
         useCanvas: YES,
         value: sc_static('images/designer_icon.png')
       }),
       
       toolbarSplit: EOS.ImageView.design ({
          layout: { top: 2, right: 293, height: 52, width: 3 },
          useCanvas: YES,
          value: sc_static('images/toolbar_split.png')
        }),
       
       rightLabel: EOS.LabelView.design({
         classNames: 'text_lrg'.w(),
         layout: { centerY: 0, right: 30, height: 30, width: 200},
         value: 'UI Components'
       }),
       
       runButton: EOS.ButtonView.design({
         classNames: 'run_button'.w(),
         layout: { centerY: -2, right: 265 , height: 54, width: 94},
         // action: 'myMethod',
         // target: 'Endeavour.statechart'
       }),
       
    }),
    
    linenView: EOS.LinenView.design({
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
      classNames: 'linen_eighty_opacity'.w(),     
    }),
    
    rightView: SC.ScrollView.design({
      classNames: 'light_background_shadow_left'.w(),
        hasHorizontalScroller: NO,
        layout: { right: -6, top: 60, bottom: 55, width: 300 },

        contentView: SC.ListView.design({
            contentValueKey: "header",
            contentBinding: "Endeavour.mobileViewsController.arrangedObjects",
            selectionBinding: "Endeavour.mobileViewsController.selection",
            showAlternatingRows: YES,
            rowHeight: 150,
            rowSpacing: 2,
            exampleView: SC.View.extend({
              classNames: 'EOS_listview'.w(),
              layout: { right: 0, top: 0, bottom: 0, width: 300},
              childViews: [ "icon", "title", "description"],
              
              icon: SC.ImageView.design({
                layout: { left: 0, top: 10, height: 100, width: 57 },
                useImageQueue: YES,
                valueBinding: '.parentView.content.icon'
              }),
              
              title: SC.LabelView.design({
                classNames: 'text_lrg'.w(),
                layout: { left: 65, top: 12, height: 27, right: 5 },
                needsEllipsis: YES,
                escapeHTML: NO,
                isTextSelectable: NO,
                valueBinding: '.parentView.content.title'
              }),
              
              description: SC.LabelView.design({
                layout: { left: 65, top: 37, height: 125, right: 5 },
                needsEllipsis: NO,
                escapeHTML: NO,
                isTextSelectable: NO,
                valueBinding: '.parentView.content.description'
              }),

            })
        })

    }),
    
    bottomBar: EOS.ToolbarView.design({
       layout: { bottom: 0, left: 0, right: 0, height: 55 },
       classNames: 'EOS_Toolbar_Bottom_Shadow'.w(),
       childViews: ["storyboardButton", "interfaceButton", "toolbarSplit"],
       
       storyboardButton: EOS.ButtonView.design({
         classNames: 'storyboard_button'.w(),
         layout: { centerY: -2, left: 10 , height: 54, width: 94},
         action: 'goToDesignerAppMobileStoryboardState',
         target: 'Endeavour.statechart'
       }),
       
       interfaceButton: EOS.ButtonView.design({
          classNames: 'interface_button'.w(),
          layout: { centerY: 0, left: 120 , height: 50, width: 70},
          action: 'goToDesignerAppMobileInterfaceState',
          target: 'Endeavour.statechart'
        }),
        
        toolbarSplit: EOS.ImageView.design ({
          layout: { bottom: 2, right: 293, height: 52, width: 3 },
          useCanvas: YES,
          value: sc_static('images/toolbar_split.png')
        }),
       
    })
    
  }),
  
});
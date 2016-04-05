/**
 * Vertical Tabs
 * -------------
 * Tabs located in sidebar
 **/

$(document).ready(function(){

  var tabBody = $('.tab-body'),
      tabTitle = $('.tab-title');

  tabTitle.click(function(){
    if ($(this).next(tabBody).is(':visible')) {
      // do nothing
    } else {
      tabBody.slideUp(300);
      $(this).next(tabBody).slideDown(300);
    }
  });

  tabBody.not(':first').hide();

});

// JavaScript source code
$(function () {
  var headerSearchInput = $('#headerSearchInput');
  var headerSearchButton = $('#headerSearchButton');

  headerSearchButton.click(function () {
    if (headerSearchInput.val() === '') {
      headerSearchInput.parent().addClass('has-warning');
    }
  });

  headerSearchInput.on('input propertychange paste', function () {
    headerSearchInput.parent().removeClass('has-warning');
  });

  // col-xs header and footer overflow fix
  // Handle Resize event and set body paddings with header and footer heights.
  $(window).resize(function () {
    var headerHeight = $('body > header:first-of-type > nav:first-of-type').outerHeight(true) + 'px';
    $('body').css('padding-top', headerHeight);

    var footerHeight = $('body > footer:last-of-type').outerHeight(true) + 'px';
    $('body').css('padding-bottom', footerHeight);
  });


});

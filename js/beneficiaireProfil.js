// JavaScript source code
$(function () {

  //init
  $('#AddVisitForm').hide(); // Hidden on load
  //$('#today').

  //show and hide
  $('#ShowAddVisitForm').on('click', function () {
    $('#AddVisitForm').show(400);
    $('#ShowAddVisitForm').parent().parent().hide(400);
  });

  $('#HideAddVisitForm').on('click', function () {
    $('#ShowAddVisitForm').parent().parent().show(400);
    $('#AddVisitForm').hide(400);
  })

});
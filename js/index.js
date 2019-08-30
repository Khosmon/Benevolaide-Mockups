// JavaScript source code
$(function () {
    var beneficiaireInput = $('#beneficiaireInput');
    var beneficiaireSearch = $('#beneficiaireSearch');
    var benevoleInput = $('#benevoleInput');
    var benevoleSearch = $('#benevoleSearch');

    beneficiaireSearch.click(function () {
        if (beneficiaireInput.val() === '') {
            beneficiaireInput.parent().addClass('has-warning');
        }
    });

    beneficiaireInput.on('input propertychange paste', function () {
        beneficiaireInput.parent().removeClass('has-warning');
    });

    benevoleSearch.click(function () {
        if (benevoleInput.val() === '') {
            benevoleInput.parent().addClass('has-warning');
        }
    });

    benevoleInput.on('input propertychange paste', function () {
        benevoleInput.parent().removeClass('has-warning');
    });

});
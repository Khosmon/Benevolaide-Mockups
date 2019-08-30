// JavaScript source code
$(function () {
    var errorClass = 'has-error';
    var warningClass = 'has-warning';
    var successClass = 'has-success';

    var NomInput = $('#Nom');
    var PrenomInput = $('#Prenom');
    var DdnInput = $('#DDN');
    var dateRGX = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)dd$/;
    var hommeRadio = $('#homme');
    var femmeRadio = $('#femme');
    var courriel = $('#email');
    var emailRGX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/;
    var APE = $('input[name="APE"]:checked').val();

    var phoneRGX = /[0-9-()+]{3,20}/;

    var submitButton = $('#submitButton');
    var updateButton = $('#updateButton');

    // Show and hide
    $('#APE-0').on('change', function () {
        $('#IdentifiantPE').parent().parent().hide(400);
        $('#passPE').parent().parent().hide(400);
    });
    $('#APE-1').on('change', function () {
        $('#IdentifiantPE').parent().parent().show(400);
        $('#passPE').parent().parent().show(400);
    })
    
    $('#AAdresse-0').on('change', {vsb : false}, function (e) {
        $('label[for="Adresse"]').parent().hide(400);
        $('label[for="NatureAdresse"]').parent().hide(400);
        $('label[for="AdressePrioritaire"]').parent().hide(400);
    });
    $('#AAdresse-1').on('change', function () {
        $('label[for="Adresse"]').parent().show(400);
        $('label[for="NatureAdresse"]').parent().show(400);
        $('label[for="AdressePrioritaire"]').parent().show(400);
    });

    // Submit verification
    submitButton.click(function () {
        if (!emailRGX.test(courriel)) {
            courriel.parent().parent().addClass(errorClass);
        }

        if (NomInput.val() === '') {
            NomInput.parent().parent().addClass(errorClass);
        }

        if (PrenomInput.val() === '') {
            PrenomInput.parent().parent().addClass(errorClass);
        }

        if (DdnInput.val() === '') {
            DdnInput.parent().parent().parent().addClass(errorClass);
        }
    });



    NomInput.on('input propertychange paste', function () {
        NomInput.parent().parent().removeClass(errorClass);
    });

    PrenomInput.on('input propertychange paste', function () {
        PrenomInput.parent().parent().removeClass(errorClass);
    });

    DdnInput.on('input propertychange paste', function () {
        DdnInput.parent().parent().parent().removeClass(errorClass);
    });
});

// JavaScript source code
$(function () {
    var usernameInput = $('#usernameInput');
    var passwordInput = $('#passwordInput');
    var submitButton = $('#submit');

    submitButton.click(function () {
        if (usernameInput.val() === '') {
            usernameInput.parent().parent().addClass('has-warning');
        }

        if (passwordInput.val() === '') {
            passwordInput.parent().parent().addClass('has-warning');
        }
    });

    usernameInput.on('input propertychange paste', function () {
        usernameInput.parent().parent().removeClass('has-warning');
    });

    passwordInput.on('input propertychange paste', function () {
        passwordInput.parent().parent().removeClass('has-warning');
    });

});

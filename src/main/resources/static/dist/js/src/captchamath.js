/* eslint-disable */
import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * RacikUI (v1.2.0): captcha Math.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */


// Set Captcha
$('#captchaOperation').html([Math.floor(Math.random() * (10 - 1 + 1) + 1), '+', Math.floor(Math.random() * (10 - 1 + 1) + 1)].join(' '));
// Repeat Captcha
$(".setBack").on('click',function() {
    $('#captchaOperation').html([Math.floor(Math.random() * (10 - 1 + 1) + 1), '+', Math.floor(Math.random() * (10 - 1 + 1) + 1)].join(' '));
    $("#captcha").value = "";
});

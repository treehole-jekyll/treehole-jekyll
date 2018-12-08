/* eslint-disable */
import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * RacikUI (v1.2.0): pwd.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */


// view password
$(".reveal").on('click',function() {
    const $pwd = $(".pwd");
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
        $('.changeColor').css('background-color', 'rgb(211, 199, 199)');
    } else {
        $pwd.attr('type', 'password');
        $('.changeColor').css('background-color', 'transparent');
    }
});
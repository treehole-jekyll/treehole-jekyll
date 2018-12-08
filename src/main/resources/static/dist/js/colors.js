/* global rgbToHex */

/**
 * --------------------------------------------------------------------------
 * RacikUI (v1.2.0): colors.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */
$('.theme-color').each(function () {
  var Color = $(this).css('backgroundColor');
  $(this).parent().append("\n    <table class=\"w-100\">\n      <tr>\n        <td class=\"text-muted\">HEX:</td>\n        <td class=\"font-weight-bold\">" + rgbToHex(Color) + "</td>\n      </tr>\n      <tr>\n        <td class=\"text-muted\">RGB:</td>\n        <td class=\"font-weight-bold\">" + Color + "</td>\n      </tr>\n    </table>\n  ");
});
//# sourceMappingURL=colors.js.map
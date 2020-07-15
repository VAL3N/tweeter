$(document).ready(function() {
  // --- our code goes here --->
  $('textarea').on('input' , function() {
    $('output').val(140-$(this).val().length);
    if (140-$(this).val().length < 0) {
      $('output').css('color', 'red');
    } else {
      $('output').css('color', '#545149');
    }
  });
});
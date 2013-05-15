$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  $('form').on('click', function(event) {
  //   2- prevent the default action for that event from happening
  event.preventDefault();
  //   3- generate a random number between 1 and 6 using JavaScript
  var randomnumber = Math.floor(Math.random() * 6 + 1);
  //   4- use jQuery to submit an AJAX post to the form's action
  $.ajax({
    url: '/rolls',
    type: 'POST',
    data: $('#die img')
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
}).done(function(response) {
  $('#die img').attr('title', randomnumber);
  $('#die img').attr('src',"/" + randomnumber + ".png");
  $('#die img').html(response);
    });
});
} );


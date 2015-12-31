/* Responsive Nav -----------------------------------------------*/
   $(function () {

     // Create the dropdown base
     $("<select />").appendTo("nav");

     // Populate dropdown with menu items
     $("nav a").each(function () {
         var el = $(this);
         $("<option />", {
             "value": el.attr("href"),
             "text": el.text()
         }).appendTo("nav select");
     });

     // To make dropdown actually work
     // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
     $("nav select").change(function () {
         window.location = $(this).find("option:selected").val();
     });

 });


$(document).ready(function(){

    // prettyPhoto
    $("a[data-gal^='prettyPhoto']").prettyPhoto();
    
});

// Validate Form And Handle Sending Confirmation

// $(function() {
//     $('.submit').click(function() {
//         $("#contact").validate({
//             submitHandler: function(form){
//                 jQuery("#contact .submit").html('Your request has been sent.');
//                 jQuery("#contact .submit").addClass("sent");
//                 jQuery("#contact").ajaxSubmit();
//                 jQuery("#contact .submit").attr("disabled", "true");
//                 return false;
//             }
//         });
//     });
// });

$(document).ready(function(){
    $('form[data-submit]').on('submit', function(){
       var $this = $(this);
       var key = $this.data('submit');
       analytics.track('email-signup', {
          'data' : key
       });
    });
});

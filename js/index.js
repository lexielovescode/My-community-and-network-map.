   
$(function() {
     $('ul#descriptions h2').hover(function() {
       $('ul.networks li.' + $(this).attr('id')).toggleClass('active');

     })
   });
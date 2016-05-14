  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });

      window.onload = function() {
        document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
          slideout.toggle();
        });

        document.querySelector('.menu').addEventListener('click', function(eve) {
          if (eve.target.nodeName === 'A') { slideout.close(); }
        });

        var runner = mocha.run();
      };
 document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});
slideout.enableTouch();



/* ACCORDION */
var mainNav = $('#navigation > ul > li > a');
$('.content').hide();

$('#link').click(function(e){
    e.preventDefault();
});

mainNav.click(function(){
    $(this).siblings('ul').slideToggle(1000,'swing');
});





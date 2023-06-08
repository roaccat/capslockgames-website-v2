$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      var $navbrand = $(".navbar-brand-fixed-top")
      var $navlink = $(".nav-link");
      var $navshadow = $("nav")
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $navbrand.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $navlink.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $navshadow.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

      var $myButton = $("#btn-back-to-top")
      $myButton.toggleClass('scrolled', $(this).scrollTop() > $nav.height()); {

        myButton.style.display = block;
        myButton.addEventListener("click", backToTop);
      }
    });
  });

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}
 
 <!--дата время-->
  
  <script type="text/javascript">
function clock() {
var d = new Date();
var month_num = d.getMonth()
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();

month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
"июля", "августа", "сентября", "октября", "ноября", "декабря");

if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;

date_time = "Сегодня: " + day + " " + month[month_num] + " " + d.getFullYear() +
" г.&nbsp;&nbsp;&nbsp; "+ hours + ":" + minutes + ":" + seconds;
if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();
}
else document.getElementById("doc_time").innerHTML = date_time;
 setTimeout("clock()", 1000);
}
</script>

<script type="text/javascript">
 clock();
</script>


<!--дата время-->
 
 
 <!-- ========================= ======================-->

 jQuery(document).ready(function(){
   // for hover dropdown menu
  $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });
  // slick slider call 
    $('.slick_slider').slick({
      dots: true,
      infinite: true,      
      speed: 800,      
      slidesToShow: 1,
      slide: 'div',
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'linear'
    });  

    // latest post slider call 
    $('.latest_postnav').newsTicker({
    row_height: 64,
    speed: 800,
    prevButton:  $('#prev-button'),
    nextButton:  $('#next-button')   
});
    jQuery(".fancybox-buttons").fancybox({
    prevEffect    : 'none',    
    nextEffect    : 'none',
    closeBtn    : true,
    helpers   : {
      title : { type : 'inside' },
      buttons : {}
    }
  });
   // jQuery('a.gallery').colorbox();
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
   
     //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  $('.tootlip').tooltip(); 
  $("ul#ticker01").liScroll(); 

});

 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
    // document.getElementById('moar').onclick = function() {
    //   var section = document.createElement('section');
    //   section.className = 'section--purple wow fadeInDown';
    //   this.parentNode.insertBefore(section, this);
    // };

  <!-- Preloader -->

  //<![CDATA[
    jQuery(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })
  //]]>

  
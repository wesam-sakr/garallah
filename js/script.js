

$(document).ready(function () {

  $(".top-nav-user .has-menu").click(function(){
    $(".top-nav-user .sub-menu").toggleClass("d-flex");
  });
  $(".top-nav-user .has-menu").mouseover(function(){
    $(".top-nav-user .sub-menu").addClass("d-flex");
  });
  $(".top-nav-user .sub-menu").mouseleave(function(){
    $(this).removeClass("d-flex");
  });

  $(".sections-button .has-menu").click(function(){
    $(this).next().next(".sub-menu").toggleClass("d-flex");
  });

  $(".toggle-side-menu").click(function(){
    $(".side-menu-nav").addClass("show");
    $(".overlay-sidemenu").addClass("show");
  })
  $(".close-side-menu").click(function(){
    $(".side-menu-nav").removeClass("show");
    $(".overlay-sidemenu").removeClass("show");
  })

  $(".toggle-side-menu-classification").click(function(){
    $(".side-menu-classification").toggleClass("show");
    $(".overlay-sidemenu").toggleClass("show");
  })
  $(".close-side-menu-classification").click(function(){
    $(".side-menu-classification").removeClass("show");
    $(".overlay-sidemenu").removeClass("show");
  })


  $('.quantity.plus').click(function(e) {
    let $input = $(this).next('input.qty');
    let val = parseInt($input.val());
    $input.val( val+1 ).change();
  });
  
  $('.quantity.minus').click(function(e) {
    let $input = $(this).prev('input.qty');
    var val = parseInt($input.val());
    if (val > 1) {
        $input.val( val-1 ).change();
    } 
  });



  // add-to-fav

  $(".add-to-fav").click(function(){
    $(this).children(".bi").toggleClass('bi-heart-fill').toggleClass('bi-heart');
  });

  $(".profile-data .add-to-fav").click(function(){
    console.log($(this).children(".bi").hasClass('bi-heart-fill'));
    if ($(this).children(".bi").hasClass('bi-heart')) {
      $(this).parents(".product-item").hide(100);
    }
  });
// -------- make nav bar static on scroll -------

window.onscroll = function() {fixNav()};

var navbar = document.getElementsByClassName("bottom-nav");
var sticky = navbar[0].offsetTop ;

function fixNav() {
  if ($(window).scrollTop() >= sticky) {
    $(navbar).addClass("sticky");
  } else {
    $(navbar).removeClass("sticky")
  }
}

  // ----- scroll top ------

  var btn = $('#scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




  // --- virification code -----



var body = $('body');

function goToNextInput(e) {
  var key = e.which,
    t = $(e.target),
    sib = t.prev('#varification-code input');

  if (key != 9 && (key < 48 || key > 57)) {
    e.preventDefault();
    return false;
  }

  if (key === 9) {
    return true;
  }

  if (!sib || !sib.length) {
    sib = body.find('#varification-code input').eq(0);
  }
  sib.select().focus();
}

function onKeyDown(e) {
  var key = e.which;

  if (key === 9 || (key >= 48 && key <= 57)) {
    return true;
  }

  e.preventDefault();
  return false;
}

function onFocus(e) {
  $(e.target).select();
}

body.on('keyup', '#varification-code input', goToNextInput);

body.on('keydown', '#varification-code input', onKeyDown);
body.on('click', '#varification-code input', onFocus);






  // run owl-carousel script

  $('.choose-car-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    rtl:true,
    autoplay:true,
    autoplayTimeout:20000,
    responsive:{
        0:{
            items:3,
            nav:false
        },
        600:{
            items:6,
            nav:false
        },
        1000:{
            items:9,
            nav:false,
            loop:true
        }
    }
});


$('.offers-slider .owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  responsiveClass:true,
  rtl:true,
  autoplay:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});


$('.most-wanted .owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  responsiveClass:true,
  rtl:true,
  autoplay:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});



var changeSlide = 4; // mobile -1, desktop + 1
// Resize and refresh page. slider-two slideBy bug remove
var slide = changeSlide;
if ($(window).width() < 600) {
    var slide = changeSlide;
    slide--;
} else if ($(window).width() > 999) {
    var slide = changeSlide;
    slide++;
} else {
    var slide = changeSlide;
}
$('.one').owlCarousel({
    nav: false,
    items: 1,
    autoplay: 5000,
  rtl:true
})
$('.two').owlCarousel({
    nav: false,
    margin: 10,
    rtl:true,
    responsive: {
        0: {
            items: changeSlide - 1,
            slideBy: changeSlide - 1
        },
        600: {
            items: changeSlide,
            slideBy: changeSlide
        },
        1000: {
            items: changeSlide + 1,
            slideBy: changeSlide + 1
        }
    }
})
var owl = $('.one');
owl.owlCarousel();
owl.on('translated.owl.carousel', function (event) {
    $(".right").removeClass("nonr");
    $(".left").removeClass("nonl");
    if ($('.one .owl-next').is(".disabled")) {
        $(".slider .right").addClass("nonr");
    }
    if ($('.one .owl-prev').is(".disabled")) {
        $(".slider .left").addClass("nonl");
    }
    $('.slider-two .item').removeClass("active");
    var c = $(".slider .owl-item.active").index();
    $('.slider-two .item').eq(c).addClass("active");
    var d = Math.ceil((c + 1) / (slide)) - 1;
    $(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
})
$('.right').click(function () {
    $(".slider .owl-next").trigger('click');
});
$('.left').click(function () {
    $(".slider .owl-prev").trigger('click');
});
$('.slider-two .item').click(function () {
    var b = $(".item").index(this);
    $(".slider .owl-dots .owl-dot").eq(b).trigger('click');
    $(".slider-two .item").removeClass("active");
    $(this).addClass("active");
});
var owl2 = $('.two');
owl2.owlCarousel();
owl2.on('translated.owl.carousel', function (event) {
    $(".right-t").removeClass("nonr-t");
    $(".left-t").removeClass("nonl-t");
    if ($('.two .owl-next').is(".disabled")) {
        $(".slider-two .right-t").addClass("nonr-t");
    }
    if ($('.two .owl-prev').is(".disabled")) {
        $(".slider-two .left-t").addClass("nonl-t");
    }
})
$('.right-t').click(function () {
    $(".slider-two .owl-prev").trigger('click');
});
$('.left-t').click(function () {
    $(".slider-two .owl-next").trigger('click');
});



$('select').niceSelect();


});


// ----- star rate ------
$(function () {


  $("#rateYo").rateYo({
    rating: $("#rateYo").attr("rateYo"),
    starWidth: "20px",
    ratedFill: "#FFC107",
    readOnly: true
  });

  $(".user-rate").rateYo({
    rating: $(".user-rate").attr("rateYo"),
    starWidth: "15px",
    ratedFill: "#FFC107",
    readOnly: true
  });

  $("#your-rate").rateYo({
    starWidth: "15px",
    ratedFill: "#FFC107",
    rating: 0,
    fullStar: true
  });


  // --------- aos ----------

  AOS.init();

});



// price slider

var $slider = $("#slider");
var $fill = $(".bar .fill");

function setBar() {
	$fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();


// ----------- sign in & up ---------


let login = document.getElementById("login")
let forgotPassBtn = document.getElementById("forgotPassBtn")

let currentEmail = document.getElementById("currentEmail")
let sendCurrentEmail= document.getElementById('sendCurrentEmail')

let verifyCode = document.getElementById('verifyCode')
let sendVerifyCode = document.getElementById('sendVerifyCode')

let resetPass = document.getElementById('resetPass')
let sendNewPass = document.getElementById('sendNewPass')

forgotPassBtn.addEventListener("click" , function (e){
    login.classList.add('d-none');
    currentEmail.classList.remove('d-none');
})

sendCurrentEmail.addEventListener("click" , function (e){
    currentEmail.classList.add('d-none');
    verifyCode.classList.remove('d-none');
})

sendVerifyCode.addEventListener("click" , function (e){
    verifyCode.classList.add('d-none');
    resetPass.classList.remove('d-none');
})

sendNewPass.addEventListener("click" , function (e){
    resetPass.classList.add('d-none');
    login.classList.remove('d-none');
})





//when we choose a pic to upload

const img = document.querySelector('#photo');
const file = document.querySelector('#file');

file.addEventListener('change', function(){
  const choosedFile = this.files[0];
  if (choosedFile) {
      const reader = new FileReader(); 
      reader.addEventListener('load', function(){
          img.setAttribute('src', reader.result);
      });
      reader.readAsDataURL(choosedFile);
  }
});



// -------- make nav bar static on scroll -------

window.onscroll = function() {fixNav()};

var navbar = document.getElementsByClassName("bottom-nav");
var sticky = navbar[0].offsetTop ;

function fixNav() {
  if ($(window).scrollTop() >= sticky) {
    $(navbar).addClass("sticky");
  } else {
    $(navbar).removeClass("sticky")
  }
}





// ---------- typed js --------------

var typed = new Typed('.header-content h2', {
  strings: [`<span>احصل</span> علي جميع قطع غيار سيارتك ...`],
  typeSpeed:100,
  startDelay:1500,
  showCursor: false,
});
var typed = new Typed('.header-content p', {
  strings: [`وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير`],
  typeSpeed:10,
  startDelay:6500,
  showCursor: false,
});







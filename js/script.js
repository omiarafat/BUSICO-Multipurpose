

var swiper = new Swiper(".BanarSlide", {
    slidesPerView: 1,
    spaceBetween: -.3,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".BrandSlide", {
      slidesPerView: 2,
      spaceBetween: 80,
      loop: true,
      autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1192: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper(".projectSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1191: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });



  // Define variables
var tabLabels = document.querySelectorAll("#tabs li");
var tabPanes = document.getElementsByClassName("tab-contents");

function activateTab(e) {
  e.preventDefault();
  
  // Deactivate all tabs
  tabLabels.forEach(function(label, index){
    label.classList.remove("active");
  });
  [].forEach.call(tabPanes, function(pane, index){
    pane.classList.remove("active");
  });
  
  // Activate current tab
  e.target.parentNode.classList.add("active");
  var clickedTab = e.target.getAttribute("href");
  document.querySelector(clickedTab).classList.add("active");
}

// Apply event listeners
tabLabels.forEach(function(label, index){
  label.addEventListener("click", activateTab);
});


// count js
$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 9);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(25, counter[j], j);
  }
});
// count js end




// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
  
  
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navber").style.animation = "300ms ease-in-out fadeInDown";
    document.getElementById("navber").style. position = "fixed";
    document.getElementById("navber").style. background = "#fff";
    document.getElementById("navber").style. width = "100%";
    document.getElementById("navber").style. top = "0";
    document.getElementById("navber").style. zIndex = "100";
    document.getElementById("navber").style. boxShadow = "0px 20px 30px rgba(3, 4, 28, 0.1)";
  
  } else {
    document.getElementById("navber").style.animation = "fadeInUp";
  }
}


const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuWrapper = document.querySelector(".menu-wrapper");

// Sidenav Toggle
openMenu.addEventListener("click", function () {
	menuWrapper.classList.add("active");
});

closeMenu.addEventListener("click", function () {
	menuWrapper.classList.remove("active");
});
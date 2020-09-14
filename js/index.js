// mobile navigation function

let toggleNavStatus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector(".mobile-navigation");
  let getSidebarUl = document.querySelector(".mobile ul");
  let getSocialbox = document.querySelector(".social-box");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebarUl.style.display = " ";
    getSidebar.style.width ="100%";
    getSocialbox.style.visibility = "visible";
    getSocialbox.style.display = " ";
    getSocialbox.style.width ="100%";
  
    toggleNavStatus = true;
  }
  else if (toggleNavStatus === true) {
    getSidebar.style.width ="100%";
    getSidebarUl.style.visibility = "hidden";
    getSocialbox.style.visibility = "hidden";
  
    toggleNavStatus = false;
  }
};

// navigation color change

window.addEventListener('scroll', () => {
  let getPage = window.location.pathname === './index.php';
  console.log(getPage);
  let scrolled = window.scrollY;
  let getMenuClass = document.querySelector (".navigation-bar");

  if ( getPage === true, scrolled > 50 ) {
    getMenuClass.style.backgroundColor ="#212121";
  } else if ( scrolled < 700) {
    getMenuClass.style.backgroundColor ="#ffffff00"
  } if ( getPage === false, scrolled > 90) {
    getMenuClass.style.backgroundColor ="#212121";
  };

});

//services mobile slider
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  let b = document.getElementsByClassName("mySlidesImg");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    b[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
  b[slideIndex-1].style.display = "block";  
}

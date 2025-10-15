document.addEventListener("DOMContentLoaded", function () {
  const mobileNav = document.getElementById("mobile-nav");
  const navList = document.querySelector(".dos-nav");
  const menuIcon = document.querySelector(".menuicon");

  if (mobileNav) mobileNav.style.display = "none";

  adjustView();

  window.addEventListener("resize", adjustView);

  
  function adjustView() {
    const width = window.innerWidth;

    if (navList) {
      navList.style.display = width < 768 ? "none" : "block";
    }

    if (menuIcon) {
      menuIcon.style.display = width > 768 ? "none" : "block";
    }

    if (mobileNav) {
      if (width > 768) {
        mobileNav.style.display = "none";
      }
    }
  }

  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      if (mobileNav.style.display === "none" || mobileNav.style.display === "") {
        mobileNav.style.display = "block";
      } else {
        mobileNav.style.display = "none";
      }
    });
  }

  const buttonW = document.querySelectorAll(".orderw, .orderx")
  buttonW.forEach(button => {
    button.addEventListener("click", function() {
  window.open("https://wa.me/23407036579913?text=Hello!%20I%20want%20to%20order%20the%20Soft%20Pastel%20Comfort%20bedsheet.", "_blank");
});

  });
});
  const nav = document.getElementsByTagName("nav")[0];
  document.addEventListener("scroll" , () =>{
         if (window.scrollY > 0) {
    nav.style.backgroundColor = "#008080ff";
  } else {
    nav.style.backgroundColor = "";
  }
  });

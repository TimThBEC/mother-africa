// JS for Mother Africa home page

/* 
    ---------- Init Stuff ----------
*/

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

var version = 1.8;

let homepageHeaderSection = ".homepage-header_section",
  navLogoLink = ".navbar_logo-link",
  navTitleText = ".navbar_title-text",
  navLogoColor = ".ma-icon_outer-fill",
  navbarButtonWrapper = ".navbar_button-wrapper",
  donateButton = ".navbar_button-wrapper",
  donateButtonColor = ".icon-donate_fill-1";

// create the smooth scroller FIRST!

const smoother = ScrollSmoother.create({
  wrapper: "#gsap-scroll-smoother-wrapper",
  content: "#gsap-scroll-smoother-content",
  smooth: 2
});

/* 
    ---------- Doc Ready ----------
*/

$(document).ready(function () {
  console.log("index.js v" + version);
  constructSplide();
  gsapSetup();
});

/* 
    ---------- Functions ----------
*/

// Splide slider

function constructSplide() {
  new Splide(".splide", {
    perPage: 1,
    perMove: 1,
    speed: 4000,
    type: "loop",
    autoplay: true,
    interval: 8000,
    pauseOnHover: false
  }).mount();
}

// GSAP Animations

function gsapSetup() {
  var navLogoTL = gsap.timeline({
    scrollTrigger: {
      trigger: homepageHeaderSection,
      start: "top top",
      end: "15% top",
      scrub: true,
      markers: false
    }
  });

  navLogoTL
    .to(navLogoLink, { scale: 1, y: "0vh" })
    .to(navTitleText, { y: "0vh", color: "white" }, "<")
    .to(navLogoColor, { color: "white" }, "<")
    .to(donateButton, { scale: 1, y: "0vh" }, "<")
    .to(donateButtonColor, { fill: "white" }, "<")
    .to(navbarButtonWrapper, { flexDirection: "row" }, "<");
}

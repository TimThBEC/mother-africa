// Mother Africa Home Page JS

// Init

gsap.registerPlugin(ScrollTrigger);

var version = 2.1;

var devToolsOn = false; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools

var sectn1 = "#sectn-1-js";
var sectn1Pic = "#s1__img-wrap-js";
var sectn1Misc = "#wamap-js, #titles-js, #scroll-js";
var titles = "#titles-js";
var scrollIcon = "#scroll-js";
var pgmLogo = "#pgm__logo-js";
var pgmCat1 = "#pgm__cat-1-js";
var pgmCat2 = "#pgm__cat-2-js";
var pgmCat3 = "#pgm__cat-3-js";
var pgmCat4 = "#pgm__cat-4-js";

// Doc ready

$(document).ready(function () {
  console.log("home.js v" + version);
  introTLPrep();

  gsapDevTools();
});

// Functions

function introTLPrep() {
  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2;

  console.log("width " + centerX + " height " + centerY);

  var introTL = gsap.timeline({
    id: "intro",
    scrollTrigger: {
      trigger: sectn1,
      start: "top top",
      end: "200% top",
      scrub: 2,
      pin: true,
      markers: false
    }
  });

  introTL
    .to(sectn1Pic, {
      xPercent: -30,
      yPercent: -20,
      scale: 0,
      opacity: 0,
      ease: "back.in(1.5)"
    })
    .from(pgmLogo, { scale: 0, ease: "back.out(2)" }, ">-0.1")
    .to(pgmLogo, { opacity: 1 }, "<")
    .to(sectn1Misc, { opacity: 0 }, ">-0.1")
    .to(pgmCat1, { opacity: 1 }, "<")
    .from(pgmCat1, { xPercent: -25, ease: "back.out(1)" }, "<")
    .to(pgmCat2, { opacity: 1 }, "<+0.2")
    .from(pgmCat2, { xPercent: 25, ease: "back.out(1)" }, "<")
    .to(pgmCat3, { opacity: 1 }, "<+0.2")
    .from(pgmCat3, { xPercent: -25, ease: "back.out(1)" }, "<")
    .to(pgmCat4, { opacity: 1 }, "<+0.2")
    .from(pgmCat4, { xPercent: 25, ease: "back.out(1)" }, "<");
} // end function

function gsapDevTools() {
  // Set up GSAP dev tools
  if (devToolsOn) {
    gsap.set(gsapDevToolsContainer, { display: "block" });
    GSDevTools.create({ container: gsapDevToolsContainer });
  }
}

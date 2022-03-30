// Mother Africa Home Page JS

// Init

gsap.registerPlugin(ScrollTrigger);

var version = 1.0;

var devToolsOn = false; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools

var purpleGradient =
  "linear-gradient(to bottom, rgba(101,44,144,1), rgba(209, 144, 253, 1)";

var sectn1 = "#sectn-1-js";
var waMap = "#wamap-js";
var graphic = "#graphic-js";
var subtitle = "#subtitle-js";
var scrollIcon = "#scroll-js";

var introImg1 = "#intro-img-1-js";
var introImg2 = "#intro-img-2-js";

var mission = "#mission-js";

// Doc ready

$(document).ready(function () {
  console.log("home.js v" + version);
  introTLPrep();

  gsapDevTools();
});

// Functions

function introTLPrep() {
  // Create timelines for all Feature Image 1s

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
    .to(waMap, { opacity: 0 })
    .to(subtitle, { opacity: 0, ease: "none" }, "<")
    .to(scrollIcon, { opacity: 0, ease: "none" }, "<")
    .to(introImg1, { opacity: 0, ease: "none" }, "<+.25")
    .to(introImg2, { opacity: 1, ease: "none" }, "<")
    .to(sectn1, { backgroundImage: purpleGradient, ease: "none" }, "<")
    .to(graphic, { xPercent: 5, ease: "none" }, "<")
    .to(mission, { opacity: 1, ease: "none" }, "<");
} // end function

function gsapDevTools() {
  // Set up GSAP dev tools
  if (devToolsOn) {
    gsap.set(gsapDevToolsContainer, { display: "block" });
    GSDevTools.create({ container: gsapDevToolsContainer });
  }
}

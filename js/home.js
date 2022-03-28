// Mother Africa Home Page JS

// Init

gsap.registerPlugin(ScrollTrigger);

var version = 1.0;

var devToolsOn = false; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools

var desktopWidth = "(min-width: 992px)";

// Doc ready

$(document).ready(function () {
  console.log("home.js v" + version);

  gsapDevTools();
});

// Functions

function introTLPrep() {
  // Create timelines for all Feature Image 1s
} // end function

function gsapDevTools() {
  // Set up GSAP dev tools
  if (devToolsOn) {
    gsap.set(gsapDevToolsContainer, { display: "block" });
    GSDevTools.create({ container: gsapDevToolsContainer });
  }
}

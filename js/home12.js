// JS for Mother Africa home page

/* 
    ---------- Init Stuff ----------
*/

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip);

var version = 2.07;

// Header section variables

let homepageHeaderSection = ".homepage-header_section",
  navLogoLink = ".navbar_logo-link",
  navTitleText = ".navbar_title-text",
  navLogoColor = ".ma-icon_outer-fill",
  donateButton = ".navbar_button-wrapper",
  donateText = ".donate-text",
  // Lifecycle section variables

  lifecycleComponent = ".lifecycle_component",
  lifecycleIcon = ".lifecycle_icon",
  lifecycleDetails = ".panel2",
  LifecycleDetailsClosed = "closed", // Note no leading period because used for toggleClass
  // Impact section variables

  impactComponent = ".impact_component",
  impactTop = ".impact_top",
  impactIcon = ".impact_icon",
  impactHighlight = ".impact_highlight",
  impactDetails = ".impact_details",
  impactComponentClosed = "closed"; // Note no leading period because used for toggleClass

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
  navBarAnimation();
  lifeCycleAnimation();
  impactAnimation();
});

/* 
    ---------- Functions ----------
*/

// Splide slider function

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

// Animation Functions

function navBarAnimation() {
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
    .to(donateText, { color: "white" }, "<");
}

function lifeCycleAnimation() {
  // Create array of all lifecycle components
  let lCComponents = gsap.utils.toArray(lifecycleComponent);

  lCComponents.forEach((lCComponent) => {
    // Find elements for click and toggle class

    let lCIcon = $(lCComponent).find(lifecycleIcon);
    let lCPanel2 = $(lCComponent).find(lifecycleDetails);

    // Add click to icon

    $(lCIcon).click(() => {
      // Toggle state of component card using GSAP FLIP animation
      lifecycleCardToggle(lCPanel2);
    });
  });
}

function lifecycleCardToggle(lCPanel2) {
  const state = Flip.getState(lCPanel2);
  $(lCPanel2).toggleClass(LifecycleDetailsClosed);
  Flip.from(state, { duration: 0.5, ease: "power1.inOut" });
}

function impactAnimation() {
  // Create array of all impact components
  let impactComponents = gsap.utils.toArray(impactComponent);

  impactComponents.forEach((impComponent) => {
    // Find elements for toggle class

    let impTop = $(impComponent).find(impactTop),
      impIcon = $(impComponent).find(impactIcon),
      impHiglight = $(impComponent).find(impactHighlight),
      impDetails = $(impComponent).find(impactDetails);

    $(impComponent).click(() => {
      // Toggle state of component card using GSAP FLIP animation
      $(impTop).toggleClass(impactComponentClosed);
      $(impIcon).toggleClass(impactComponentClosed);
      $(impHiglight).toggleClass(impactComponentClosed);
      $(impDetails).toggleClass(impactComponentClosed);
    });
  });
}

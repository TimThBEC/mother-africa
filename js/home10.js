// JS for Mother Africa home page

/* 
    ---------- Init Stuff ----------
*/

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip);

var version = 1.9;

let homepageHeaderSection = ".homepage-header_section",
  navLogoLink = ".navbar_logo-link",
  navTitleText = ".navbar_title-text",
  navLogoColor = ".ma-icon_outer-fill",
  donateButton = ".navbar_button-wrapper",
  donateButtonColor = ".icon-donate_fill-1",
  donateText = ".donate-text",
  lifecycleCard = ".lifecycle_card",
  lifecycleDetails = ".panel2",
  LifecycleDetailsClosed = "closed"; // Note no leading period because used for toggleClass

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

  $(lifecycleCard).click(() => {
    lifecycle();
  });
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
    .to(donateText, { color: "white" }, "<");
}

// Other Functions

function lifecycle() {
  console.log("lifecycle card clicked");

  const state = Flip.getState(lifecycleDetails);

  $(lifecycleDetails).toggleClass(LifecycleDetailsClosed);

  Flip.from(state, { duration: 0.5, ease: "power1.inOut" });
}

// JS for Mother Africa about page

/* 
    ---------- Init Stuff ----------
*/

gsap.registerPlugin(Flip);

var version = 1.00;

let teamMemberBio = ".team-member_bio",
bioClosed = "closed";  // Note no leading period, for use in toggleclass
  
/* 
    ---------- Function Calls ----------
*/


  console.log("index.js v" + version);
  teamCardAnimation();
  
/* 
    ---------- Functions ----------
*/

// Animation Functions



function teamCardAnimation() {
  // Create array of all 
  let teamBios = gsap.utils.toArray(teamMemberBio);

  teamBios.forEach((bio) => {


    // Find parent card for click

    let parentCard = $(bio).parent();,
      
    $([parentCard]).click(() => {
      // Prep GSAP FLIP
        console.log("Foobaaaar!!!");
      
      const bioState = Flip.getState([bio]);

      // Toggle state of bio
      $(bio).toggleClass(bioClosed);
      
      // Animate class toggle with GSAP FLIP

      Flip.from(bioState, { duration: 0.5, ease: "power1.inOut" });
    });
  });
}

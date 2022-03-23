// ===============================================
// HIGHLIGHT NAVIGATION WITH CORRESPONDING VIEW
// ===============================================

// NAV LINKS
const welcomeLink = document.querySelector('.welcome-link');
const recommendationsLink = document.querySelector('.recommendations-link');
const educationLink = document.querySelector('.education-link');
const certificationLink = document.querySelector('.certifications-link');
const experienceLink = document.querySelector('.experience-link');
const projectsLink = document.querySelector('.projects-link');

document.addEventListener('scroll', navHighlight);

// FUNCTION FOR HIGHLIGHTING NAV BASED OFF VIEWING POSITION
function navHighlight() {
  // WINDOW POSITIONS
  const navHeight = document.querySelector('nav').getBoundingClientRect()
    .height;

  // ======================================
  // HOME BREAK
  const homeTop =
    document.querySelector('#welcome').getBoundingClientRect().top - navHeight;

  const homeHeight = document.querySelector('#welcome').getBoundingClientRect()
    .height;

  let homeBreak = homeTop + homeHeight;
  console.log(homeBreak);
  // ======================================
  // RECOMMENDATIONS BREAK
  const recommendationsBreak =
    document.querySelector('#recommendations').getBoundingClientRect().top -
    navHeight;

  // ======================================
  // EDUCATION BREAK
  const educationBreak =
    document.querySelector('#education').getBoundingClientRect().top -
    navHeight;

  // ======================================
  // CERTIFICATIONS BREAK
  const certificationsBreak =
    document.querySelector('#certifications').getBoundingClientRect().top -
    navHeight;

  // ======================================
  // EXPERIENCE BREAK
  const experienceBreak =
    document.querySelector('#experience').getBoundingClientRect().top -
    navHeight;

  // ======================================
  // PROJECTS BREAK
  //   const projectsBreak =
  //     document.querySelector('#projects').getBoundingClientRect().top - navHeight;

  // HOME
  homeBreak > 0
    ? welcomeLink.classList.add('current')
    : welcomeLink.classList.remove('current');

  // RECOMMENDATIONS
  if (recommendationsBreak < 0 && educationBreak > 0) {
    recommendationsLink.classList.add('current');
  } else if (recommendationsBreak > 0 || educationBreak < 0) {
    recommendationsLink.classList.remove('current');
  }

  console.log(educationBreak);

  // EDUCATION
  if (educationBreak < 0 && certificationsBreak > 0) {
    educationLink.classList.add('current');
  } else if (educationBreak > 0 || certificationsBreak < 0) {
    educationLink.classList.remove('current');
  }

  // // CERTIFICATION
  if (certificationsBreak < 0 && experienceBreak > 0) {
    certificationLink.classList.add('current');
  } else if (certificationsBreak > 0 || experienceBreak < 0) {
    certificationLink.classList.remove('current');
  }

  // // EXPERIENCE
  //   if (experienceBreak < 0 && projectsBreak > 0) {
  //     experienceLink.classList.add('current');
  //   } else if (experienceBreak > 0 || projectsBreak < 0) {
  //     experienceLink.classList.remove('current');
  //   }

  // EXPERIENCE
  experienceBreak < 0
    ? experienceLink.classList.add('current')
    : experienceLink.classList.remove('current');

  //   // PROJECTS
  //   projectsBreak < 0
  //     ? projectsLink.classList.add('current')
  //     : projectsLink.classList.remove('current');
}
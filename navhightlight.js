// // ===============================================
// // HIGHLIGHT NAVIGATION WITH CORRESPONDING VIEW
// // ===============================================

// // NAV LINKS
// const welcomeLink = document.querySelector('.welcome-link');
// const recommendationsLink = document.querySelector('.recommendations-link');
// const educationLink = document.querySelector('.education-link');
// const certificationLink = document.querySelector('.certifications-link');
// const experienceLink = document.querySelector('.experience-link');
// const projectsLink = document.querySelector('.projects-link');

// document.addEventListener('scroll', navHighlight);

// // FUNCTION FOR HIGHLIGHTING NAV BASED OFF VIEWING POSITION
// function navHighlight() {
//   // WINDOW POSITIONS
//   const navHeight = document.querySelector('nav').getBoundingClientRect()
//     .height;

//   // ======================================
//   // HOME BREAK
//   const homeTop =
//     document.querySelector('#welcome').getBoundingClientRect().top - navHeight;

//   const homeHeight = document.querySelector('#welcome').getBoundingClientRect()
//     .height;

//   let homeBreak = homeTop + homeHeight;
//   console.log(homeBreak);
//   // ======================================
//   // RECOMMENDATIONS BREAK
//   const recommendationsBreak =
//     document.querySelector('#recommendations').getBoundingClientRect().top -
//     navHeight;

//   // ======================================
//   // EDUCATION BREAK
//   const educationBreak =
//     document.querySelector('#education').getBoundingClientRect().top -
//     navHeight;

//   // ======================================
//   // CERTIFICATIONS BREAK
//   const certificationsBreak =
//     document.querySelector('#certifications').getBoundingClientRect().top -
//     navHeight;

//   // ======================================
//   // EXPERIENCE BREAK
//   const experienceBreak =
//     document.querySelector('#experience').getBoundingClientRect().top -
//     navHeight;

//   // ======================================
//   // PROJECTS BREAK
//   //   const projectsBreak =
//   //     document.querySelector('#projects').getBoundingClientRect().top - navHeight;

//   // HOME
//   homeBreak > 0
//     ? welcomeLink.classList.add('current')
//     : welcomeLink.classList.remove('current');

//   // RECOMMENDATIONS
//   if (recommendationsBreak < 0 && educationBreak > 0) {
//     recommendationsLink.classList.add('current');
//   } else if (recommendationsBreak > 0 || educationBreak < 0) {
//     recommendationsLink.classList.remove('current');
//   }

//   console.log(educationBreak);

//   // EDUCATION
//   if (educationBreak < 0 && certificationsBreak > 0) {
//     educationLink.classList.add('current');
//   } else if (educationBreak > 0 || certificationsBreak < 0) {
//     educationLink.classList.remove('current');
//   }

//   // // CERTIFICATION
//   if (certificationsBreak < 0 && experienceBreak > 0) {
//     certificationLink.classList.add('current');
//   } else if (certificationsBreak > 0 || experienceBreak < 0) {
//     certificationLink.classList.remove('current');
//   }

//   // // EXPERIENCE
//   //   if (experienceBreak < 0 && projectsBreak > 0) {
//   //     experienceLink.classList.add('current');
//   //   } else if (experienceBreak > 0 || projectsBreak < 0) {
//   //     experienceLink.classList.remove('current');
//   //   }

//   // EXPERIENCE
//   experienceBreak < 0
//     ? experienceLink.classList.add('current')
//     : experienceLink.classList.remove('current');

//   //   // PROJECTS
//   //   projectsBreak < 0
//   //     ? projectsLink.classList.add('current')
//   //     : projectsLink.classList.remove('current');
// }

// Image Grid
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("mycolumn");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "myshow");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "myshow");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("mybtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
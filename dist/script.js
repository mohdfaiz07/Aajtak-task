
let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let cancel = document.querySelector(".cancel");
let dropdownIcon = document.querySelector(".dropdown");
let firstdropdown = document.querySelector('.first-dropdown')
let secondNav = document.querySelector(".second-nav");
let menuDropDOwn = document.querySelector(".menu-dropdown");


window.addEventListener("scroll", function(){
let secondNav = document.querySelector(".second-nav")
secondNav.classList.toggle("sticky", window.scrollY>0)


})









function openMenuDropDown(){

    if (menuDropDOwn.style.display === 'none') {
    
        menuDropDOwn.style.display = 'block';
      } else {
    
        menuDropDOwn.style.display = 'none';
      }
    

}

menuIcon.addEventListener("click", function () {
  sidebar.classList.remove("hidden");
  sidebar.style.left = "0";
});

cancel.addEventListener("click", function () {
  sidebar.style.left = "-100%";
});


dropdownIcon.addEventListener("click", function() {
this.classList.toggle("rotate-90");
if (firstdropdown.style.display === "none"|| firstdropdown.style.display === "") {
    firstdropdown.style.display = "block";
  } else {
    firstdropdown.style.display = "none";
  }
  
  if (secondNav.style.marginTop === "32px" || secondNav.style.marginTop === "") {
    secondNav.style.marginTop = "0px"
  } else {
    secondNav.style.marginTop = "32px";
  }


});


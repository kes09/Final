
// burger-bar
let navigation = document.getElementById('navBar');
let navUl = document.getElementById('footerBar');

burgerBar.addEventListener('click',function() {
  navigation.classList.toggle('activeNav');
  burgerBar.classList.toggle('activeBugerBar');
  navUl.classList.toggle('toggleNavigation');
})


// heder scroll
let main = document.getElementById('mainheder');

window.onscroll = function () {
  if (document.documentElement.scrollTop >= 500) {
    main.classList.add("scroll");
  } else {
    main.classList.remove("scroll");
  }
};

//scroll To TOp
let btnTop = document.getElementById("top");

btnTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

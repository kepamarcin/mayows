var navigation;
const button = document.querySelector(".menu-button"),
      menu = document.querySelector(".menu-container"),
      header = document.querySelector(".header");

// button.addEventListener('click', () => menu.classList.toggle("is-open"));
button.addEventListener('click', function(){
      menu.classList.toggle("is-open");
      header.classList.toggle("menu-open");
      this.classList.add("animation");
}, true);


function myEndFunction(){
      this.classList.remove("animation");
}
button.addEventListener("animationend", myEndFunction);

export default navigation;
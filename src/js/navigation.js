var navigation;
const button = document.querySelector(".menu-button"),
      menu = document.querySelector(".menu-container"),
      header = document.querySelector(".header"),
      body = document.querySelector("body");

button.addEventListener('click', function(){
      menu.classList.toggle("is-open");
      header.classList.toggle("menu-open");
      body.classList.toggle("no-scroll");
      this.classList.add("animation");
}, true);


function animationEndFunction(){
      this.classList.remove("animation");
}
button.addEventListener("animationend", animationEndFunction);

export default navigation;
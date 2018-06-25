var navigation;
const button = document.querySelector(".menu-button"),
      menu = document.querySelector(".menu-container"),
      header = document.querySelector(".header"),
      // body = document.querySelector("body");
      body = document.querySelector(".barba-container");

// button.addEventListener('click', function(){
//       menu.classList.toggle("is-open");
//       header.classList.toggle("menu-open");
//       body.classList.toggle("no-scroll");
//       this.classList.add("animation");
// }, true);



// if(body.classList.contains("no-scroll")){
//       body.classList.remove("no-scroll");
// }
document.addEventListener('click', function(e){
      if(e.target.classList.contains("menu-button")){

            
            let button = document.querySelector(".menu-button");
            let menu = document.querySelector(".menu-container"),
            header = document.querySelector(".header"),
            body = document.querySelector(".barba-container");

            menu.classList.toggle("is-open");
            header.classList.toggle("menu-open");


            body.classList.toggle("no-scroll");
            button.classList.add("animation");
            button.addEventListener("animationend", animationEndFunction);

      }else{
            return;
      }
      
      

}, true);


function animationEndFunction(){
      this.classList.remove("animation");
}




export default navigation;
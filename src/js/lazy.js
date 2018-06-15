var lazy;

    function showData(e){
      e.preventDefault();
      data.classList.add("show");
    }
    let btn = document.getElementById("buy"),
         data = document.querySelector(".buy-data");

    if(btn){
      btn.addEventListener("click", showData, false);
    }
      
    
    let bioBtn = document.querySelectorAll(".contact .product-button");
    let arr = Array.from(bioBtn);
    let scrollandler;
    const wrapper = document.querySelector(".wrapper-people");
    const body = document.querySelector("body");
    const bgOverlay = document.querySelector(".background-overlay");

    if(wrapper){
      
      wrapper.addEventListener("click", function(e){
        const productButtons = wrapper.querySelectorAll("button");
        if( e.target.className === "button margin-top"){
          // open.bind(e.target.parentElement.nextElementSibling)();
          open.bind(e.target.parentElement.nextElementSibling)();
          
        }
        else if(e.keyCode == 27 || e.target.classList.contains("background-overlay") || e.target.classList.contains("red")){
          
          close.bind(this)();
        }
        else 
          return;

      }, false);
    }
    function addNoScroll(){
      body.classList.add("no-scroll");
    }
    function removeNoScroll(){
      body.classList.remove("no-scroll");
    }
    function open(){
      
      this.classList.add("show-bio");
      bgOverlay.classList.add("background-visible");
      window.addEventListener("keydown", close, false);

      createCloseBtn.bind(this)();
      loadImage.bind(this)();
      addNoScroll();
      scrollEvent.bind(this)();
    }

    function close(){
      
      let panelOpened = wrapper.querySelector(".show-bio");
      
      if(panelOpened){
        panelOpened.removeEventListener("scroll", scrollandler, false);
        panelOpened.classList.remove("show-bio");
        panelOpened.lastElementChild.style.top = "10px";
        setTimeout(function(){
          panelOpened.scrollTop = 0;
        }, 500);
      }
      
      bgOverlay.classList.remove("background-visible");
      window.removeEventListener("keydown", close, false);
      removeNoScroll();
      
    }
    function createCloseBtn(){
      if(this.querySelector(".red")){
        return;
      }
      
      const closeBtn = document.createElement('span');
      closeBtn.innerHTML = "Close";
      closeBtn.classList = "button red button-sticky";
      
      this.appendChild(closeBtn);
      
    }

    function loadImage(){
      let img = this.firstElementChild;
      if(img.getAttribute("data-src") == img.getAttribute("src")){
        return;
      }
      img.setAttribute("src", img.getAttribute("data-src"));
    }

    
    function scrollEvent(){

      scrollandler = function(){
        let divTop = this.firstElementChild.getBoundingClientRect().top;
        let actualTop = (-1)*divTop + 10;
   
        let closeBtn = this.lastElementChild;
        closeBtn.style.top = actualTop +"px";
      }

      this.addEventListener("scroll", scrollandler, false);

    }

export default lazy;
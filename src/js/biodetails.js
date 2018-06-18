var biodetails;

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
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    let touchEndHandler;
    let touchStartHandler;
    const wrapper = document.querySelector(".wrapper-people");
    const body = document.querySelector("body");
    const bgOverlay = document.querySelector(".background-overlay");

    if(wrapper){
      
      wrapper.addEventListener("click", function(e){
        const productButtons = wrapper.querySelectorAll("button");
        if( e.target.className === "button margin-top with-text"){

          open.bind(e.target.parentElement.nextElementSibling)();
          
        }
        else if(e.keyCode == 27 || e.target.classList.contains("background-overlay") || e.target.classList.contains("red")){
          
          
          close.bind(this)(e);
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

    function closeEsc(e){
      if(e.keyCode == 27){
        close();
      }
    }
    

    function touchStartListener(){
      touchStartHandler = function(e){
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
      }
      this.addEventListener("touchstart", touchStartHandler, false);
    }
    function touchEndListener(){
      touchEndHandler = function(e){
        touchEndX =  e.changedTouches[0].clientX;
        touchEndY =  e.changedTouches[0].clientY;
        handleGesure();
      }
      this.addEventListener("touchend", touchEndHandler, false);
      
    }
    function handleGesure(){
      if ((touchEndX - touchStartX > 50) && (touchEndY - touchStartY >-15) && (touchEndY - touchStartY < 15) ) {

        close();
      }
    }

    function open(){
      
      this.classList.add("show-bio");
      bgOverlay.classList.add("background-visible");
      document.addEventListener("keydown", closeEsc, false);

      createCloseBtn.bind(this)();
      loadImage.bind(this)();
      addNoScroll();
      scrollEvent.bind(this)();
      touchStartListener.bind(this)();
      touchEndListener.bind(this)();
      
    }

    function close(){

      let panelOpened = wrapper.querySelector(".show-bio");
      
      if(panelOpened){
        panelOpened.removeEventListener("scroll", scrollandler, false);
        panelOpened.removeEventListener("touchstart", touchStartHandler, false);
        panelOpened.removeEventListener("touchend", touchEndHandler, false);
        panelOpened.classList.remove("show-bio");
        panelOpened.lastElementChild.style.top = "10px";
        setTimeout(function(){
          panelOpened.scrollTop = 0;
        }, 500);
      }
      document.removeEventListener("keydown", closeEsc, false);
      bgOverlay.classList.remove("background-visible");    
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
export default biodetails;
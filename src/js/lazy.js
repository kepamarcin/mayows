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
      
    const bgOverlay = document.querySelector(".background-overlay");
    let bioBtn = document.querySelectorAll(".contact .product-button");
    let arr = Array.from(bioBtn);

    
    

    // arr.map(function(item){
    //   item.addEventListener("click",function(e){
    //     e.preventDefault();
        
    //     let bioDetailsDiv = item.parentElement.nextElementSibling;

    //     let open = function(){
    //       bioDetailsDiv.classList.add("show-bio");
    //       bgOverlay.classList.add("background-visible");
    //       bgOverlay.addEventListener("click", close, false);
    //     }

    //     let close = function(){
    //       bioDetailsDiv.classList.remove("show-bio");
    //       bgOverlay.classList.remove("background-visible");
    //       bgOverlay.removeEventListener("click", close, false);
    //       setTimeout(function(){
    //         bioDetailsDiv.scrollTop = 0;
    //       }, 500);
    //       closeBtn.remove();
    //     }

    //     let div = item.parentElement.parentElement;
    //     let bioDetails = div.querySelector(".bio-details");
    //     let bioWrapper = bioDetails.children[1];
    //     open();
    
    //     let closeBtn = document.createElement('span');
    //     let img = bioDetails.firstElementChild;
    //     img.setAttribute("src", img.getAttribute("data-src"));

    //     closeBtn.innerHTML = "Close";
    //     closeBtn.classList = "product-button red";

    //     bioWrapper.appendChild(closeBtn);

    //     closeBtn.addEventListener("click", close, false);

    //   }, false);
    // })


    // const open = (e) => {
    //   let bioDetailsDiv = item.parentElement.nextElementSibling;
    //   console.log(bioDetailsDiv);
      
    // }
    const wrapper = document.querySelector(".wrapper-people");
    if(wrapper){
      wrapper.addEventListener("click", function(e){
        const productButtons = wrapper.querySelectorAll(".product-button");
        if( e.target.className === "product-button"){
          open.bind(e.target.parentElement.nextElementSibling)();
          
        }
        else if(e.keyCode == 27 || e.target.classList.contains("background-overlay") || e.target.classList.contains("red")){
          
          close.bind(this)();
          
        }
        else 
          return;

      }, false);
    }

    function open(){
      this.classList.add("show-bio");
      bgOverlay.classList.add("background-visible");
      window.addEventListener("keydown", close, false);
      createCloseBtn.bind(this)();
    }

    function close(){
      let panelOpened = document.querySelector(".show-bio");
      if(panelOpened){
        panelOpened.classList.remove("show-bio");
        setTimeout(function(){
          panelOpened.scrollTop = 0;
        }, 500);
      }
      bgOverlay.classList.remove("background-visible");
      window.removeEventListener("keydown", close, false);
    }

    function createCloseBtn(){
      if(this.querySelector(".product-button")){
        return;
      }
      const closeBtn = document.createElement('span');
      const bioWrapper = this.querySelector(".bio-wrapper");
      closeBtn.innerHTML = "Close";
      closeBtn.classList = "product-button red";
      bioWrapper.appendChild(closeBtn);
      let img = this.firstElementChild;
      img.setAttribute("src", img.getAttribute("data-src"));
    }

    


export default lazy;
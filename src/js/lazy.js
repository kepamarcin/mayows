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


    function open(){
      this.classList.add("show-bio");
      let q = this.querySelector(".product-button");
      bgOverlay.classList.add("background-visible");
      bgOverlay.addEventListener("click", close, false);

      if( !q ){
        createCloseBtn.bind(this)();
        let img = this.firstElementChild;
        img.setAttribute("src", img.getAttribute("data-src"));
      }
          

    }
    function createCloseBtn(){
      let closeBtn = document.createElement('span');
      let btn = this.querySelector(".bio-wrapper");
      closeBtn.innerHTML = "Close";
      closeBtn.classList = "product-button red";
      btn.appendChild(closeBtn);
      closeBtn.addEventListener("click", close, false);
    }

    function close(){
      let panel = document.querySelector(".show-bio");
      panel.classList.remove("show-bio");

      bgOverlay.classList.remove("background-visible");
      bgOverlay.removeEventListener("click", close, false);

      setTimeout(function(){
        panel.scrollTop = 0;
      }, 500);
    }

    arr.map(function(item){  
      item.addEventListener("click",function(){
        let bioDetailsDiv = item.parentElement.nextElementSibling;
        open.bind(bioDetailsDiv)();
      }, false);
    })
    


export default lazy;
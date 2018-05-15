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

    
    

    arr.map(function(item){
      item.addEventListener("click",function(e){
        e.preventDefault();
        
        let bioDetailsDiv = item.parentElement.nextElementSibling;

        let open = function(){
          bioDetailsDiv.classList.add("show-bio");
          bgOverlay.classList.add("background-visible");
          bgOverlay.addEventListener("click", close, false);
        }

        let close = function(){
          bioDetailsDiv.classList.remove("show-bio");
          bgOverlay.classList.remove("background-visible");
          bgOverlay.removeEventListener("click", close, false);
          setTimeout(function(){
            bioDetailsDiv.scrollTop = 0;
          }, 500);
          closeBtn.remove();
        }

        let div = item.parentElement.parentElement;
        let bioDetails = div.querySelector(".bio-details");
        let bioWrapper = bioDetails.children[1];
        open();
    
        let closeBtn = document.createElement('span');
        let img = bioDetails.firstElementChild;
        img.setAttribute("src", img.getAttribute("data-src"));

        closeBtn.innerHTML = "Close";
        closeBtn.classList = "product-button red";

        // if(bioWrapper.querySelectorAll(".product-button").length == 0){
          bioWrapper.appendChild(closeBtn);
        // }
        closeBtn.addEventListener("click", close, false);

      }, false);
    })
    


export default lazy;